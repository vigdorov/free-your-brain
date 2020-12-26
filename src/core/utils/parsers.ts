export const toNumber = (val: unknown): Undefinable<number> => {
    const prepareValue = Number(val);
    return Number.isNaN(prepareValue) ? undefined : prepareValue;
};
