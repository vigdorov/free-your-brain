import {success} from '@devexperts/remote-data-ts';
import {at, chain, periodic, map} from '@most/core';
import {pipe} from 'fp-ts/es6/pipeable';
import React, {FC, memo} from 'react';
import {useParams} from 'react-router-dom';

import {usersApi} from '_api/usersTestApi';
import {chainRD, renderAsyncData} from '_utils/asyncDataUtils';
import {useStreamRD} from '_utils/useStream';

type Props = {
    id: string;
};

const User: FC<Props> = () => {
    const {id} = useParams<Props>();

    const userRD = useStreamRD(() => {
        let i = 0;
        return pipe(
            at(3000, undefined),
            chain(() => usersApi.findById(id)),
            chainRD(data => {
                const res = pipe(
                    periodic(1000),
                    map(() => {
                        i = i + 1;
                        return success({
                            ...data,
                            chainableNumber: i
                        });
                    })
                );
                return res;
            })
        );
    }, [id]);

    return (
        <div>
            {renderAsyncData(userRD, user => (
                <div>
                    <div>{user.avatar}</div>
                    <div>{user.email}</div>
                    <div>{user.first_name}</div>
                    <div>{user.id}</div>
                    <div>{user.last_name}</div>
                    <div>{user.chainableNumber}</div>
                </div>
            ))}
        </div>
    );
};

export default memo(User);
