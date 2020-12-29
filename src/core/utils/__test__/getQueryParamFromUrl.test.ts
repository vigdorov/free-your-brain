import {PageType} from '_enums/common';
import {getQueryFromUrl, QueryParsers} from '../getQueryFromUrl';
import {arrayParser, booleanParser, numberParser, stringParser} from '../queryParsers';

describe('getQueryFromUrl', () => {
    type Query = {
        name?: string;
        id?: number;
        pageType?: PageType;
        isNew: boolean;
        colors: string[];
    };

    it('Получение параметров', () => {
        const parsers: QueryParsers<Query> = {
            name: stringParser(),
            id: numberParser(),
            pageType: stringParser(),
            isNew: booleanParser(false),
            colors: arrayParser([]),
        };
        expect(getQueryFromUrl(parsers, '?olo=2')).toEqual({isNew: false, colors: []});
        expect(getQueryFromUrl(parsers, '?olo=2&name=t')).toEqual({name: 't', isNew: false, colors: []});
        expect(getQueryFromUrl(parsers, '?name=t&id=6&pageType=tags&isNew=true&colors=red&colors=blue')).toEqual({
            name: 't',
            id: 6,
            pageType: PageType.Tags,
            isNew: true,
            colors: ['red', 'blue'],
        });
    });
});
