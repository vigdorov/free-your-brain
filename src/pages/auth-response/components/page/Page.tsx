import {format} from 'date-fns';
import {parse} from 'querystring';
import React, {memo} from 'react';
import {numberParser, QueryParsers, stringParser, useQuery} from '../../../../common/hooks/useQuery';
import {QueryResponse, QueryResponseError} from '../../types';

const enum PersonType {
    One = 'one',
    Two = 'two'
}

type Person = {
    name: string;
    age?: number;
    type: PersonType;
};

console.log('test');

const parsers: QueryParsers<Person> = {
    name: stringParser(''),
    age: numberParser(),
    type: stringParser(PersonType.One),
};

const AuthResponsePage: React.FC = () => {
    const query = useQuery(parsers);
    return (
        <div>Auth Page</div>
    );
};

export default memo(AuthResponsePage);
