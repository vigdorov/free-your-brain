export const jsonParse = <T>(str?: string, defaultValue?: T): Undefinable<T> => {
    const trimStr = str?.trim();
    try {
        const parsedValue = JSON.parse(trimStr ?? '');

        return parsedValue === undefined ? defaultValue : parsedValue;
    } catch (e) {
        return defaultValue;
    }
};
