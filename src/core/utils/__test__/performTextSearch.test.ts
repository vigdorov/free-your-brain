import {performTextSearch} from '../performTextSearch';

describe('performTextSearch', () => {
    it('Проверка отфильтрованных значений', () => {
        const items = [
            {name: 'Иван', age: 6, color: 'red'},
            {name: 'Сергей', age: 12, color: 'white'},
            {name: 'John', age: 33, color: 'black'},
            {name: 'James', age: 43, color: 'yellow'},
        ];

        expect(performTextSearch(items, 'ива', ['name'])).toEqual([
            {name: 'Иван', age: 6, color: 'red'},
        ]);
        expect(performTextSearch(items, 'cth', ['name'])).toEqual([
            {name: 'Сергей', age: 12, color: 'white'},
        ]);
        expect(performTextSearch(items, 'utq', ['name'])).toEqual([
            {name: 'Сергей', age: 12, color: 'white'},
        ]);
        expect(performTextSearch(items, 'о', ['name'])).toEqual([
            {name: 'John', age: 33, color: 'black'},
            {name: 'James', age: 43, color: 'yellow'},
        ]);
        expect(performTextSearch(items, 'e', ['name', 'color'])).toEqual([
            {name: 'Иван', age: 6, color: 'red'},
            {name: 'Сергей', age: 12, color: 'white'},
            {name: 'James', age: 43, color: 'yellow'},
        ]);
        expect(performTextSearch(items, '3', ['age'])).toEqual([
            {name: 'John', age: 33, color: 'black'},
            {name: 'James', age: 43, color: 'yellow'},
        ]);
        expect(performTextSearch(items, '', ['age'])).toEqual([
            {name: 'Иван', age: 6, color: 'red'},
            {name: 'Сергей', age: 12, color: 'white'},
            {name: 'John', age: 33, color: 'black'},
            {name: 'James', age: 43, color: 'yellow'},
        ]);
        expect(performTextSearch(items, 'sdfsse23', ['age'])).toEqual([]);
        expect(performTextSearch([], 'sdfsse23', ['age'])).toEqual([]);
    });
});
