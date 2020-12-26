import {parse, ParsedUrlQuery} from 'querystring';
import {head} from 'lodash';
import {useMemo} from 'react';
import {useLocation} from 'react-router-dom';
import {toNumber} from '../utils/parsers';

type QueryParser<T> = (value?: string | string[]) => T;
export type QueryParsers<T> = Partial<{[K in keyof T]: QueryParser<T[K]>}>;

export function stringParser<T extends string>(): QueryParser<Undefinable<T>>;
export function stringParser<T extends string>(defaultValue: T): QueryParser<T>;
export function stringParser<T extends string>(defaultValue?: T) {
    return (val?: string | string[]) => {
        const value = Array.isArray(val) ? head(val) : val;

        return value ?? defaultValue;
    };
}

export function numberParser(): QueryParser<Undefinable<number>>;
export function numberParser(defaultValue?: number): QueryParser<number>;
export function numberParser(defaultValue?: number) {
    return (val?: string | string[]) => {
        const value = Array.isArray(val) ? head(val) : val;

        return toNumber(value) ?? defaultValue;
    };
}

export function booleanParser(): QueryParser<Undefinable<boolean>>;
export function booleanParser(defaultValue: boolean): QueryParser<boolean>;
export function booleanParser(defaultValue?: boolean) {
    return (val?: string | string[]) => {
        const value = Array.isArray(val) ? head(val) : val;

        if (value === 'true') {
            return true;
        }

        if (value === 'false') {
            return false;
        }

        return defaultValue;
    };
}

// Date parser

// Array parser (должен уметь с enum)

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
