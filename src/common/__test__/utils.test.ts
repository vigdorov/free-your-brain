import {numberToString} from '../utils';

describe('test numberToString', () => {
    it('success convert', () => {
        expect(numberToString(56)).toBe('56');
    });
});
