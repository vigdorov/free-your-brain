import {useMemo} from 'react';
import {useLocation} from 'react-router-dom';
import {getPageType} from '_utils/common';

export const usePageType = () => {
    const location = useLocation();
    return useMemo(() => getPageType(location.pathname), [location.pathname]);
};
