export const makeLocalStorageService = <T>(init: T, stateName: string) => {
    if (!localStorage.getItem(stateName)) {
        localStorage.setItem(stateName, JSON.stringify(init));
    }

    return {
        set: (updatedState: T) => {
            localStorage.setItem(stateName, JSON.stringify(updatedState));
            return updatedState;
        },
        get: (): T => {
            const stringValue = localStorage.getItem(stateName) || '';

            try {
                return JSON.parse(stringValue);
            } catch (e) {
                return init;
            }
        },
    };
};
