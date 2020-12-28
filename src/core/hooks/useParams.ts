import {useMemo} from 'react';
import {useParams as useReactParams} from 'react-router-dom';
import {getParamsFromUrl} from '_utils/getParamFromUrl';
import {QueryParsers} from '_utils/getQueryFromUrl';

export function useParams<T extends Record<string, unknown>>(paramParsers: QueryParsers<T>) {
    const params = useReactParams<Record<keyof T, string>>();

    return useMemo(() => getParamsFromUrl(paramParsers, params), [params, paramParsers]);
}
