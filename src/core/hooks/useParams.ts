import {useMemo} from 'react';
import {useLocation, useParams as useReactParams} from 'react-router-dom';
import {PageType} from '../enums/common';
import {getPageType} from '../utils/common';

type ParamsParser<T> = (value?: string) => T;
export type ParamsParsers<T> = Partial<{[K in keyof T]: ParamsParser<T[K]>}>;

export function useParams<T extends {[name: string]: unknown}>(paramParsers: ParamsParsers<T> = {}) {
    const params = useReactParams<Record<keyof T, string>>();
    const {pathname} = useLocation();

    return useMemo(() => {
        return Object.keys(paramParsers).reduce<T & {pageType: PageType}>((memo, key) => {
            const parser = paramParsers[key];

            return {
                ...memo,
                [key]: parser?.(params[key]),
            };
        }, {
            pageType: getPageType(pathname),
        } as T & {pageType: PageType});
    }, [params, paramParsers, pathname]);
}
