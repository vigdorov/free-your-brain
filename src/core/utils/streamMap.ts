import {skipRepeats, filter, map} from '@most/core';
import {hold} from '@most/hold';
import {Stream} from '@most/types';
import {pipe} from 'fp-ts/pipeable';

import {createSubject, Subject} from '_utils/createSubject';

import {isNotEmpty} from '../referers/common';

type UninitializedEntity<V> = {
	hasValue: false;
	subject: Subject<V | undefined>;
	stream: Stream<V>;
};

type InitializedEntity<V> = {
	hasValue: true;
	subject: Subject<V>;
	stream: Stream<V>;
};

type StreamMapEntity<V> = UninitializedEntity<V> | InitializedEntity<V>;

type InitializedEntry<K, V> = [K, InitializedEntity<V>];
type StreamMapEntry<K, V> = [K, StreamMapEntity<V>];

export class StreamMap<K, V> {
	private cache = new Map<K, StreamMapEntity<V>>();

	private allSubject$ = createSubject<void>(undefined);

	private isInTransaction = false;

	private hasChanges = false;

	private _keys$ = createSubject<K[]>([]);

	readonly keys$ = this._keys$.stream$;

	readonly values$ = pipe(this.allSubject$.stream$,
		map(() => {
			const values = Array.from(this.cache.values());
			return values.filter(isInitialized).map(entity => entity.subject.getValue());
		}),
	);

	readonly entries$: Stream<[K, V][]> = pipe(
		this.allSubject$.stream$,
		map(() => {
			const entries = Array.from(this.cache.entries()).filter(isEntryInitialized);
			return entries.map<[K, V]>(entry => [entry[0], entry[1].subject.getValue()]);
		}),
		hold,
	);

	get size(): number {
		return this.cache.size;
	}

	get isEmpty(): boolean {
		return this.size === 0;
	}

	private handleKeys = (keys: K[]) => this._keys$.next(keys);

	has(key: K): boolean {
		return this.cache.has(key);
	}

	get(key: K): Stream<V> {
		return this.getOrCreateCached(key).stream;
	}

	getValue(key: K): V | undefined {
		if (this.cache.has(key)) {
			const value = this.cache.get(key);
			if (isNotEmpty(value) && value.hasValue) {
				return value.subject.getValue();
			}
		}
	}

	set(key: K, value: V): void {
		this.transaction(() => {
			const isCachedKey = this.cache.has(key);
			let cached = this.getOrCreateCached(key);
			if (cached.hasValue === false) {
				cached = initializeEntity(cached);
				this.cache.set(key, cached);
				if (!isCachedKey) {
					this.handleKeys(Array.from(this.cache.keys()));
				}
			}

			if (cached.subject.getValue() !== value) {
				cached.subject.next(value);
				this.hasChanges = true;
			}
		});
	}

	setMany(entries: [K, V][]): void {
		this.transaction(() => {
			entries.forEach(entry => {
				const [key, value] = entry;
				this.set(key, value);
			});
		});
	}

	transaction(thunk: () => void): void {
		if (!this.isInTransaction) {
			this.isInTransaction = true;
			thunk();
			if (this.hasChanges) {
				this.hasChanges = false;
				this.allSubject$.next(undefined);
			}
			this.isInTransaction = false;
		} else {
			// Execute the thunk, notifications will be handled by parent transaction
			thunk();
		}
	}

	delete(key: K): void {
		this.transaction(() => {
			const isCachedKey = this.cache.has(key);
			this.cache.delete(key);
			if (isCachedKey) {
				this.handleKeys(Array.from(this.cache.keys()));
			}
			this.hasChanges = true;
		});
	}

	deleteMany(keys: K[]): void {
		this.transaction(() => {
			keys.forEach(key => {
				this.delete(key);
			});
		});
	}

	clear(): void {
		this.transaction(() => {
			this.cache.clear();
			this.handleKeys(Array.from(this.cache.keys()));
			this.hasChanges = true;
		});
	}

	private getOrCreateCached(key: K): StreamMapEntity<V> {
		const cached = this.cache.get(key);
		if (cached) {
			return cached;
		}

		const subject = createSubject<V | undefined>(undefined);
		const stream = pipe(subject.stream$, filter(isNotEmpty), skipRepeats);
		const entity: StreamMapEntity<V> = {
			hasValue: false,
			subject,
			stream,
		};
		this.cache.set(key, entity);
		return entity;
	}
}

function initializeEntity<V>(entity: UninitializedEntity<V>): InitializedEntity<V> {
	return {
		...entity,
		subject: entity.subject as Subject<V>,
		hasValue: true,
	};
}

function isInitialized<V>(entity: StreamMapEntity<V>): entity is InitializedEntity<V> {
	return entity.hasValue;
}

function isEntryInitialized<K, V>(entry: StreamMapEntry<K, V>): entry is InitializedEntry<K, V> {
	return isInitialized(entry[1]);
}
