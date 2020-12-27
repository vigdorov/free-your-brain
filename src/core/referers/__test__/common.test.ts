import {noop} from 'lodash';
import {isEmptyObject, isNotEmpty, isObject} from '../common';

describe('isObject', () => {
    it('Должен вернуть true', () => {
        expect(isObject({})).toBeTruthy();
        expect(isObject({go: 8})).toBeTruthy();
        expect(isObject(Object.create(null))).toBeTruthy();
        expect(isObject(Object.create({}))).toBeTruthy();
    });

    it('Должен вернуть false', () => {
        expect(isObject(null)).toBeFalsy();
        expect(isObject([])).toBeFalsy();
        expect(isObject(NaN)).toBeFalsy();
        expect(isObject(noop)).toBeFalsy();
        expect(isObject(0)).toBeFalsy();
        expect(isObject('')).toBeFalsy();
    });
});

describe('isEmptyObject', () => {
    it('Должен вернуть true', () => {
        expect(isEmptyObject({})).toBeTruthy();
        expect(isEmptyObject(Object.create(null))).toBeTruthy();
    });

    it('Должен вернуть false', () => {
        expect(isEmptyObject({g: 'g'})).toBeFalsy();
        expect(isEmptyObject({g: undefined})).toBeFalsy();
    });
});

describe('isNotEmpty', () => {
    it('Должен вернуть true', () => {
        expect(isNotEmpty(['3'])).toBeTruthy();
        expect(isNotEmpty({f: 'f'})).toBeTruthy();
        expect(isNotEmpty({f: undefined})).toBeTruthy();
        expect(isNotEmpty(0)).toBeTruthy();
        expect(isNotEmpty(12)).toBeTruthy();
        expect(isNotEmpty('fd')).toBeTruthy();
        expect(isNotEmpty('0')).toBeTruthy();
    });

    it('Должен вернуть false', () => {
        expect(isNotEmpty([])).toBeFalsy();
        expect(isNotEmpty({})).toBeFalsy();
        expect(isNotEmpty('')).toBeFalsy();
        expect(isNotEmpty('    ')).toBeFalsy();
        expect(isNotEmpty()).toBeFalsy();
        expect(isNotEmpty(null)).toBeFalsy();
        expect(isNotEmpty(NaN)).toBeFalsy();
    });
});
