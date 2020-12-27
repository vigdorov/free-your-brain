import {toRequestParamValue} from '../toRequestParamValue';

describe('toRequestParamValue', () => {
    it('Возвращает простые значения', () => {
        expect(toRequestParamValue('trt')).toBe('trt');
        expect(toRequestParamValue(0)).toBe(0);
        expect(toRequestParamValue(false)).toBe(false);
    });

    it('Простые пустые значения возвращают undefined', () => {
        expect(toRequestParamValue('')).toBeUndefined();
        expect(toRequestParamValue(null)).toBeUndefined();
        expect(toRequestParamValue(undefined)).toBeUndefined();
    });

    it('Возвращает заполненные объекты', () => {
        expect(toRequestParamValue({foo: undefined})).toMatchObject({foo: undefined});
        expect(toRequestParamValue({foo: 'bar'})).toMatchObject({foo: 'bar'});
        expect(toRequestParamValue(['rtt'])).toEqual(['rtt']);
    });

    it('Пустые объекты возвращают undefined', () => {
        expect(toRequestParamValue({})).toBeUndefined();
        expect(toRequestParamValue([])).toBeUndefined();
    });
});
