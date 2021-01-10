import {buildPath, BuildPathOptions} from '_utils/buildPath';
import {createService} from '_utils/createService';

export const routeService = createService(window.location, {
    push: () => (val?: Omit<BuildPathOptions, 'withQuery'>) => {
        history.pushState(null, '', buildPath(val ?? {}));
        return window.location;
    },
    pushWithQuery: () => (val?: Omit<BuildPathOptions, 'withQuery'>) => {
        history.pushState(null, '', buildPath({
            ...(val ?? {}),
            withQuery: true,
        }));
        return window.location;
    },
    pushLocation: () => (val?: any) => {
        return val;
    },
});
