import {decode} from 'querystring';

export type QueryParser<T> = (value?: string | string[]) => T;
export type QueryParsers<T> = {[K in keyof T]: QueryParser<T[K]>};

export const getQueryFromUrl = <T extends Record<string, unknown>>(queryParsers: QueryParsers<T>, search?: string) => {
    const query = decode((search || location.search).slice(1));

    return Object.keys(queryParsers).reduce<T>((memo, key) => {
        if (key in queryParsers) {
            const parser = queryParsers[key];
            return {
                ...memo,
                [key]: parser?.(query[key]),
            };
        }
        return memo;
    }, {} as T);
};
