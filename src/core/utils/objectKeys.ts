export const objectKeys = <T extends Record<string, unknown>>(obj: T) => (
    Object.keys(obj) as Array<keyof T>
);
