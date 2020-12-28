import {decode, ParsedUrlQueryInput, stringify} from 'querystring';
import {PageType} from '_enums/common';

export type BuildPathOptions = {
    pageType: PageType;
    params?: Array<string>;
    query?: ParsedUrlQueryInput;
    withQuery?: boolean,
};

const makePath = (params: Array<string>) => params.map(param => {
    return param.startsWith('/') ? param.slice(1) : param;
}).join('/');

export const buildPath = ({pageType, params, query, withQuery}: BuildPathOptions) => {
    const path = makePath([pageType, ...(params ?? [])]);
    const previousQuery = decode(location.search.slice(1));
    const stringifyQuery = stringify({
        ...(withQuery ? previousQuery : {}),
        ...query,
    });
    return [`/${path}`, stringifyQuery].filter(Boolean).join('?');
};
