import React, {FC, memo} from 'react';
import {pipe} from 'fp-ts/es6/pipeable';
import * as M from '@most/core';

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
            M.at(3000, undefined),
            M.chain(() => usersApi.findById(id)),
            M.chain(data => {
                return pipe(M.periodic(1000), M.map(() => {
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
