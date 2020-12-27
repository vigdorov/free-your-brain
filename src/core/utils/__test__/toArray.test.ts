import {toArray} from '../toArray';

describe('toArray', () => {
    it('Должен вернуть пустой массив', () => {
        expect(toArray(undefined)).toEqual([]);
        expect(toArray([])).toEqual([]);
    });

    it('Должен вернуть массив', () => {
        expect(toArray('hji')).toEqual(['hji']);
        expect(toArray(null)).toEqual([null]);
        expect(toArray(0)).toEqual([0]);
        expect(toArray([0, null, 'gh'])).toEqual([0, null, 'gh']);
        expect(toArray([0, [null], 'gh'])).toEqual([0, [null], 'gh']);
    });
});
