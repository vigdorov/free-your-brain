import {RemoteData, remoteData, isSuccess, success} from '@devexperts/remote-data-ts';
import {filter, map, skipRepeats, chain, tap, now} from '@most/core';
import {hold} from '@most/hold';
import {newDefaultScheduler} from '@most/scheduler';
import {array} from 'fp-ts/lib/Array';
import {Predicate} from 'fp-ts/lib/function';
import {pipe} from 'fp-ts/pipeable';
import {noop} from 'lodash';

import {isNotEmpty} from '_referers/common';
import {LiveData} from '_types/LiveData';

import {chainRD, mapRD, tapRD} from './asyncDataUtils';
import {StreamMap} from './streamMap';

export class EntityStore<L = never, A = never> {
    get allValues$() {
        return this._getAllValues$;
    }

    set allValues$(value: any) {
        this._getAllValues$ = value;
    }

    private readonly cache = new StreamMap<string, RemoteData<L, A>>();

    private readonly cachedStreams = new Map<string, LiveData<L, A>>();

    private hasLoadedAll = false;

    private isLoadingAll = false;

    private _getAllValues$ = pipe(
        this.cache.values$,
        filter(() => !this.isLoadingAll && this.hasLoadedAll),
        map(data => data.filter(item => isSuccess(item))),
        map(array.sequence(remoteData)),
        skipRepeats,
        hold
    );

    readonly keys$ = this.cache.keys$;

    get(key: string, get: () => LiveData<L, A>): LiveData<L, A> {
        let sharedGetter = this.cachedStreams.get(key);

        if (!isNotEmpty(sharedGetter)) {
            const hasValue = this.cache.has(key);
            const cachedValue = this.cache.getValue(key);
            const valueIsResolved = isNotEmpty(cachedValue) && isSuccess(cachedValue);
            if (hasValue && valueIsResolved) {
                return this.cache.get(key);
            }

            sharedGetter = pipe(get(), hold);

            this.cachedStreams.set(key, sharedGetter);
        }

        return sharedGetter;
    }

    getAll(
        personalKey: (value: A) => string,
        partialGetAll: () => LiveData<L, A[]>,
        predicate?: Predicate<A>
    ): LiveData<L, A[]> {
        this.isLoadingAll = false;
        return pipe(
            partialGetAll(),
            tapRD(values => {
                this.hasLoadedAll = true;
                this.updateCache(values, personalKey);
            }),
            chain(data => {
                this.cache.values$.run(
					{
						event: noop,
						end: noop,
						error: noop
					},
					newDefaultScheduler()
				);
                return isSuccess(data) ? this._getAllValues$ : now(data);
            }),
            skipRepeats,
            mapRD(entities => {
                if (typeof predicate === 'undefined') {
                    return entities;
                }
                let hasChanges = false;
                const filtered = entities.filter(value => {
                    const result = predicate(value);
                    if (!result) {
                        hasChanges = true;
                    }
                    return result;
                });
                return hasChanges ? filtered : entities;
            }),
            hold
        );
    }

    remove(
        key: string,
        pk: (value: A) => string,
        remove: () => LiveData<L, A[]>,
        optimistic = true
    ): LiveData<L, A[]> {
        if (optimistic) {
            this.cache.delete(key);
        }
        return pipe(
            remove(),
            tapRD(values => {
                this.updateCache(values, pk);
            }),
            chain(() => this._getAllValues$)
        );
    }

    create(personalKey: (value: A) => string, create: () => LiveData<L, A>): LiveData<L, A> {
        return pipe(
            create(),
            chainRD(value => {
                const key = personalKey(value);
                this.cache.set(key, success(value));
                return this.cache.get(key);
            })
        );
    }

    update(key: string, update: () => LiveData<L, A>): LiveData<L, A> {
        return pipe(
            update(),
            tap(value => {
                if (isSuccess(value)) {
                    this.cache.set(key, value);
                }
            })
        );
    }

    private updateCache(values: A[], pk: (value: A) => string): void {
        const entries = values.map<[string, RemoteData<L, A>]>(item => [pk(item), success(item)]);
        this.cache.setMany(entries);
    }
}
