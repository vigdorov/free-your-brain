import {useMemo} from 'react';
import {useParams as useReactParams} from 'react-router-dom';
import {getParamsFromUrl} from '../utils/getParamFromUrl';
import {QueryParsers} from '../utils/getQueryFromUrl';

export function useParams<T extends Record<string, unknown>>(paramParsers: QueryParsers<T>) {
    const params = useReactParams<Record<keyof T, string>>();

    return useMemo(() => getParamsFromUrl(paramParsers, params), [params, paramParsers]);
}
