import {isNumber, isString} from 'lodash';

export const toNumber = (value: unknown): Undefinable<number> => {
    if (isNumber(value) || isString(value)) {
        const prepareValue = Number(value);
        return Number.isNaN(prepareValue) ? undefined : prepareValue;
    }
};
