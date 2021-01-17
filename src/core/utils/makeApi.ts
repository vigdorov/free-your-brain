import {failure, pending, RemoteData, success} from '@devexperts/remote-data-ts';
import {fromPromise, startWith, recoverWith, map, now} from '@most/core';
import {Stream} from '@most/types';
import {pipe} from 'fp-ts/pipeable';
import {objectEntries} from './objectEntries';

type PromiseApi = Record<string, (...args: any[]) => Promise<unknown>>;

type StreamApi<T extends PromiseApi, E> = {
    [K in keyof T]: (
        ...params: Parameters<T[K]>
    ) => T[K] extends (...args: any[]) => Promise<infer R> ? Stream<RemoteData<E, R>> : never;
};
const pipeApiStream = <T>(stream$: Stream<T>) =>
    pipe(
        stream$,
        map(val => success(val)),
        startWith(pending),
        recoverWith(err => now(failure(err)))
    );

export const makeApi = <T extends PromiseApi, E = Error>(apiObj: T) => {
    return objectEntries(apiObj).reduce((streamObj, [apiKey, apiMethod]) => {
        return {
            ...streamObj,
            [apiKey]: (...args: Parameters<typeof apiMethod>) => {
                const res = fromPromise(apiMethod(...args));

                return pipeApiStream(res);
            }
        };
    }, {} as StreamApi<T, E>);
};
