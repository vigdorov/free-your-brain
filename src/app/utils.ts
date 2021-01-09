import {QueryParsers} from '_utils/getQueryFromUrl';
import {stringParser} from '_utils/queryParsers';
import {QueryParams} from './types';

export const queryParsers: QueryParsers<QueryParams> = {
    modal: stringParser(),
};
