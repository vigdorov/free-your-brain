import React, {FC, memo} from 'react';
import {pipe} from 'fp-ts/es6/pipeable';
import {at, chain, periodic, map} from '@most/core';

import {useStream} from '_utils/useStream';
import {usersApi} from '_api/usersTestApi';
import {useParams} from 'react-router-dom';

type Props = {
    id: string;
}

const User: FC<Props> = () => {
    const {id} = useParams<Props>();

    const user = useStream(() => {
        let i = 0;
        return pipe(
            at(3000, undefined),
            chain(() => usersApi.findById(id)),
            chain(data => {
                return pipe(periodic(1000), map(() => {
                    i = i + 1;
                    return {
                        ...data,
                        chainableNumber: i
                    };
                }));
            })
        );
    }, [id]);

    return (
        <div>
            {user ? (
                <div>
                    <div>{user.avatar}</div>
                    <div>{user.email}</div>
                    <div>{user.first_name}</div>
                    <div>{user.id}</div>
                    <div>{user.last_name}</div>
                    <div>{user.chainableNumber}</div>
                </div>
            ) : (
                'Loading...'
            )}
        </div>
    );
};

export default memo(User);
