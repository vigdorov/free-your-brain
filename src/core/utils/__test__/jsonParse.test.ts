import {jsonParse} from '../jsonParse';

describe('jsonParse', () => {
    it('Должен вернуть значение', () => {
        expect(jsonParse('{}')).toEqual({});
        expect(jsonParse('null')).toBeNull();
        expect(jsonParse('0')).toBe(0);
        expect(jsonParse(' 1  ')).toBe(1);
    });

    it('Должен вернуть значение при наличии дефолта', () => {
        expect(jsonParse('{}', {str: 9})).toEqual({});
        expect(jsonParse('null', {str: 9})).toBeNull();
        expect(jsonParse('0', {str: 9})).toBe(0);
        expect(jsonParse(' 1  ', {str: 9})).toBe(1);
    });

    it('Должен вернуть undefined для не корректных значений', () => {
        expect(jsonParse()).toBeUndefined();
        expect(jsonParse('')).toBeUndefined();
        expect(jsonParse('    ')).toBeUndefined();
        expect(jsonParse('{"9')).toBeUndefined();
    });

    it('Должен вернуть дефолтное значение', () => {
        expect(jsonParse(undefined, 'to')).toBe('to');
        expect(jsonParse('', 'to')).toBe('to');
        expect(jsonParse('      ', 'to')).toBe('to');
        expect(jsonParse('./6dh', 9)).toBe(9);
    });
});
