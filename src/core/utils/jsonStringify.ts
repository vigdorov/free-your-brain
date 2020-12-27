export const jsonStringify = <T>(obj: T, space = 4): string => (
    JSON.stringify(obj, null, space)
);
