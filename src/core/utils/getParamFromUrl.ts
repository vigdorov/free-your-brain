import {QueryParsers} from './getQueryFromUrl';

export const getParamsFromUrl = <T extends Record<string, unknown>>(
    paramParsers: QueryParsers<T>,
    params: Record<string, string>
) => {
    return Object.keys(paramParsers).reduce<T>((memo, key) => {
        const parser = paramParsers[key];

        return {
            ...memo,
            [key]: parser?.(params[key]),
        };
    }, {} as T);
};
