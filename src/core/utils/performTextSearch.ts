import ru from 'convert-layout/ru';
import {isEmpty, isNotEmpty} from '../referers/common';

export function performTextSearch<T, K extends keyof T>(items: T[], searchText: string, searchProperties: K[]) {
    if (isEmpty(items) || isEmpty(searchText)) {
        return items;
    }

    const query = searchText.toLowerCase();
    const queryToEn = ru.toEn(query);
    const queryToRu = ru.fromEn(query);

    const hasQuery = (itemText: string) => {
        const text = itemText.toLowerCase();

        /**
         * Т.к. convert-layout заменяет не все символы верно,
         * ищем так же по первоначальной строке
         * https://github.com/ai/convert-layout/issues/22
         */
        return text.includes(query) || text.includes(queryToEn) || text.includes(queryToRu);
    };

    return items.filter(item => searchProperties.some(property => {
        const propertyValue = item[property];
        const text = isNotEmpty(propertyValue) ? `${propertyValue}` : undefined;
        return text && hasQuery(text);
    }));
}
