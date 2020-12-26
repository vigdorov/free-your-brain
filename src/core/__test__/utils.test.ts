import {numberToString} from '_utils/common';

describe('test numberToString', () => {
    it('success convert', () => {
        expect(numberToString(56)).toBe('56');
    });
});
