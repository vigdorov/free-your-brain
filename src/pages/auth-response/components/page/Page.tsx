import {parse} from 'querystring';
import React, {memo} from 'react';
import {QueryParsers, useQuery} from '../../../../common/hooks/useQuery';
import {QueryResponse, QueryResponseError} from '../../types';

type Person = {
    name: string;
    age: number;
};

const parsers: QueryParsers<Person> = {
    name: name => name ? name.toString() : '',
    age: age => age ? Number(age) : undefined,
};

const AuthResponsePage: React.FC = () => {
    const query = useQuery(parsers);
    return (
        <div>Auth Page</div>
    );
};

export default memo(AuthResponsePage);
