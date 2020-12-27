import {arrayParser, booleanParser, numberParser, stringParser} from '../queryParsers';

describe('stringParser', () => {
    it('Вернет значение', () => {
        expect(stringParser()('trt')).toBe('trt');
    });

    it('Вернет первое значение массива', () => {
        expect(stringParser()(['trt', 'ggt'])).toBe('trt');
    });

    it('Вернет undefined', () => {
        expect(stringParser()()).toBeUndefined();
        expect(stringParser()([])).toBeUndefined();
    });

    it('Вернет дефолт', () => {
        expect(stringParser('def')()).toBe('def');
        expect(stringParser('def')([])).toBe('def');
    });

    it('Вернет значение даже при наличии дефолта', () => {
        expect(stringParser('def')(['trt'])).toBe('trt');
        expect(stringParser('def')('trt')).toBe('trt');
    });
});

describe('numberParser', () => {
    it('Вернет значение', () => {
        expect(numberParser()('45')).toBe(45);
    });

    it('Вернет первое значение массива', () => {
        expect(numberParser()(['45', '44'])).toBe(45);
    });

    it('Вернет undefined', () => {
        expect(numberParser()()).toBeUndefined();
        expect(numberParser()([])).toBeUndefined();
    });

    it('Вернет дефолт', () => {
        expect(numberParser(33)()).toBe(33);
        expect(numberParser(33)([])).toBe(33);
    });

    it('Вернет значение даже при наличии дефолта', () => {
        expect(numberParser(33)(['45'])).toBe(45);
        expect(numberParser(33)('45')).toBe(45);
    });
});

describe('booleanParser', () => {
    it('Вернет значение', () => {
        expect(booleanParser()('true')).toBe(true);
        expect(booleanParser()('false')).toBe(false);
    });

    it('Вернет первое значение массива', () => {
        expect(booleanParser()(['true', 'false'])).toBe(true);
    });

    it('Вернет undefined', () => {
        expect(booleanParser()()).toBeUndefined();
        expect(booleanParser()([])).toBeUndefined();
    });

    it('Вернет дефолт', () => {
        expect(booleanParser(true)()).toBe(true);
        expect(booleanParser(false)([])).toBe(false);
    });

    it('Вернет значение даже при наличии дефолта', () => {
        expect(booleanParser(false)(['true'])).toBe(true);
        expect(booleanParser(false)('true')).toBe(true);
    });
});

describe('arrayParser', () => {
    it('Вернет значение', () => {
        expect(arrayParser()('rtr')).toEqual(['rtr']);
        expect(arrayParser()(['rtr', 'rtr'])).toEqual(['rtr', 'rtr']);
        expect(arrayParser()([])).toEqual([]);
    });

    it('Вернет undefined', () => {
        expect(arrayParser()()).toBeUndefined();
    });

    it('Вернет дефолт', () => {
        expect(arrayParser(['def'])()).toEqual(['def']);
    });

    it('Вернет значение даже при наличии дефолта', () => {
        expect(arrayParser(['def'])('rtr')).toEqual(['rtr']);
        expect(arrayParser(['def'])(['rtr'])).toEqual(['rtr']);
    });
});
