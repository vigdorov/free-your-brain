import {useMemo} from 'react';
import {useLocation} from 'react-router-dom';
import {routeService} from '_services/routeService';
import {getQueryFromUrl, QueryParsers} from '_utils/getQueryFromUrl';
import {makeHashLocation} from '_utils/hashUtils';
import {useStream} from '_utils/useStream';

export function useQuery<T extends Record<string, unknown>>(queryParsers: QueryParsers<T>): T {
    const hashLocation = useLocation();

    const location = useStream(() => routeService.stream$, []) ?? window.location;
    const fff = makeHashLocation(location);

    console.log({hashLocation, fff})
    return useMemo(() => getQueryFromUrl(queryParsers, fff.search), [fff.search, queryParsers]);
}
