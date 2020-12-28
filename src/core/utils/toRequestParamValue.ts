import {isNotEmpty} from '../referers/common';

export function toRequestParamValue<T>(val: T): T;
export function toRequestParamValue<T>(val?: T): Undefinable<T>;
export function toRequestParamValue<T>(val?: T) {
    return isNotEmpty(val) ? val : undefined;
}
