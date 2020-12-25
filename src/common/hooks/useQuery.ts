import {parse, ParsedUrlQuery} from 'querystring';
import {useMemo} from 'react';
import {useLocation} from 'react-router-dom';

type QueryParser<T> = (value?: string | string[]) => Undefinable<T>;
export type QueryParsers<T> = Partial<{[K in keyof T]: QueryParser<T[K]>}>;

export function useQuery(): ParsedUrlQuery;
export function useQuery<T extends {[name: string]: unknown}>(queryParsers: QueryParsers<T>): Partial<T>;
export function useQuery<T extends {[name: string]: unknown}>(
    queryParsers?: QueryParsers<T>
): ParsedUrlQuery | Partial<T> {
    const {search} = useLocation();

    return useMemo(() => {
        const query = parse(search.slice(1));
        return queryParsers ? Object.keys(query).reduce<Partial<T>>((memo, key) => {
            if (key in queryParsers) {
                const parser = queryParsers[key];
                return {
                    ...memo,
                    [key]: parser?.(query[key]),
                };
            }
            return memo;
        }, {}) : query;
    }, [search, queryParsers]);
}
