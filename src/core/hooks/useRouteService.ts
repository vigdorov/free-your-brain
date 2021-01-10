import {useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import {routeService} from '_services/routeService';

export const useRouteService = () => {
    const location = useLocation();

    useEffect(() => {
        routeService.actions.pushLocation(location);
    }, [location]);
};
