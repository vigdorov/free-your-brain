import {head} from 'lodash';
import {QueryParser} from './getQueryFromUrl';
import {toNumber} from './parsers';

export function stringParser<T extends string>(): QueryParser<Undefinable<T>>;
export function stringParser<T extends string>(defaultValue: T): QueryParser<T>;
export function stringParser<T extends string>(defaultValue?: T) {
    return (val?: string | string[]) => {
        const value = Array.isArray(val) ? head(val) : val;

        return value ?? defaultValue;
    };
}

export function numberParser(): QueryParser<Undefinable<number>>;
export function numberParser(defaultValue?: number): QueryParser<number>;
export function numberParser(defaultValue?: number) {
    return (val?: string | string[]) => {
        const value = Array.isArray(val) ? head(val) : val;

        return toNumber(value) ?? defaultValue;
    };
}

export function booleanParser(): QueryParser<Undefinable<boolean>>;
export function booleanParser(defaultValue: boolean): QueryParser<boolean>;
export function booleanParser(defaultValue?: boolean) {
    return (val?: string | string[]) => {
        const value = Array.isArray(val) ? head(val) : val;

        if (value === 'true') {
            return true;
        }

        if (value === 'false') {
            return false;
        }

        return defaultValue;
    };
}

export function arrayParser<T extends string>(): QueryParser<Undefinable<T[]>>;
export function arrayParser<T extends string>(defaultValue: T[]): QueryParser<T[]>;
export function arrayParser<T extends string>(defaultValue?: T[]) {
    return (val?: string | string[]) => {
        if (Array.isArray(val)) {
            return val;
        }

        return val === undefined ? defaultValue : [val];
    };
}
