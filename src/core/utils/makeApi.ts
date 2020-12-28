import {fromPromise} from '@most/core';
import {Stream} from '@most/types';
import {objectEntries} from './objectEntries';

type PromiseApi = Record<string, (...args: any[]) => Promise<unknown>>;

type StreamApi<T extends PromiseApi> = {
    [K in keyof T]: (...params: Parameters<T[K]>) => (
        T[K] extends (...args: any[]) => Promise<infer R> ? Stream<R> : never
    );
};

export const makeApi = <T extends PromiseApi>(apiObj: T) => {
    return objectEntries(apiObj).reduce((streamObj, [apiKey, apiMethod]) => {
        return {
            ...streamObj,
            [apiKey]: (...args: Parameters<typeof apiMethod>) => fromPromise(apiMethod(...args)),
        };
    }, {} as StreamApi<T>);
};
