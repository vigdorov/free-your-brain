import {useMemo} from 'react';
import {useLocation} from 'react-router-dom';
import {getQueryFromUrl, QueryParsers} from '../utils/getQueryFromUrl';

export function useQuery<T extends Record<string, unknown>>(queryParsers: QueryParsers<T>): T {
    const {search} = useLocation();

    return useMemo(() => getQueryFromUrl(queryParsers, search), [search, queryParsers]);
}
