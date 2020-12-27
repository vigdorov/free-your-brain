export const objectEntries = <T extends Record<string, unknown>, R extends keyof T>(obj: T) => (
    Object.entries(obj) as Array<[R, T[R]]>
);
