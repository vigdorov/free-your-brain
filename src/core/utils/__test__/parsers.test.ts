import {toNumber} from '../parsers';

describe('toNumber', () => {
    it('Возвращает число', () => {
        expect(toNumber(0)).toBe(0);
        expect(toNumber('  0 ')).toBe(0);
        expect(toNumber('0')).toBe(0);
        expect(toNumber('56')).toBe(56);
        expect(toNumber(' 56  ')).toBe(56);
        expect(toNumber(' 5.6  ')).toBe(5.6);
        expect(toNumber(' .9  ')).toBe(0.9);
        expect(toNumber(1.4)).toBe(1.4);
        expect(toNumber(.4)).toBe(0.4);
    });

    it('Возвращает undefined', () => {
        expect(toNumber(' g')).toBeUndefined();
        expect(toNumber(null)).toBeUndefined();
        expect(toNumber(undefined)).toBeUndefined();
        expect(toNumber({})).toBeUndefined();
        expect(toNumber([])).toBeUndefined();
        expect(toNumber('   4  5 ')).toBeUndefined();
        expect(toNumber('   4  .5 ')).toBeUndefined();
    });
});
