import {PageType} from '../../enums/common';
import {buildPath, BuildPathOptions} from '../buildPath';

describe('buildPath', () => {
    it('Путь до страницы', () => {
        const options: BuildPathOptions = {
            pageType: PageType.Tags
        };
        expect(buildPath(options)).toBe(`/${PageType.Tags}`);
    });

    it('Путь с route параметрами', () => {
        const options: BuildPathOptions = {
            pageType: PageType.Tags,
            params: ['mode', '/id', 'fine'],
        };
        expect(buildPath(options)).toBe(`/${PageType.Tags}/mode/id/fine`);
    });

    it('Путь c query', () => {
        const options: BuildPathOptions = {
            pageType: PageType.Tags,
            query: {
                foo: 'bar',
            },
        };
        expect(buildPath(options)).toBe(`/${PageType.Tags}?foo=bar`);
    });

    it('Путь c query значениями undefined', () => {
        const options: BuildPathOptions = {
            pageType: PageType.Tags,
            query: {
                foo: undefined,
            },
        };
        expect(buildPath(options)).toBe(`/${PageType.Tags}?foo=`);
    });

    it('Старые query должны быть затерты', () => {
        const options: BuildPathOptions = {
            pageType: PageType.Tags,
        };
        history.pushState(null, '', '/name?like=true');
        expect(buildPath(options)).toBe(`/${PageType.Tags}`);
    });

    it('Старые query должны остаться в url', () => {
        const options: BuildPathOptions = {
            pageType: PageType.Tags,
            withQuery: true,
        };
        history.pushState(null, '', '/name?like=true');
        expect(buildPath(options)).toBe(`/${PageType.Tags}?like=true`);
    });
});
