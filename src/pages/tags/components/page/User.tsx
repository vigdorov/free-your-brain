import {pending, success} from '@devexperts/remote-data-ts';
import {map} from '@most/core';
import {pipe} from 'fp-ts/lib/function';
import React, {FC, Fragment, memo} from 'react';
import {Link} from 'react-router-dom';

import {usersApi} from '_api/usersTestApi';
import {renderAsyncData} from '_utils/asyncDataUtils';
import {useStream} from '_utils/useStream';
import {userEntityStore} from './utils';

type Props = {
    userId: number;
};

const User: FC<Props> = ({userId}) => {
    const data =
        useStream(() => {
            const userStringId = userId.toString();

            return userEntityStore.get(userStringId, () =>
                pipe(
                    usersApi.findById(userStringId),
                    map(val => success(val))
                )
            );
        }, [userId]) ?? pending;

    return (
        <Fragment>
            {renderAsyncData(data, user => (
                <div key={user.id}>
                    {user.first_name}, {user.last_name}
                    <span>
                        <Link to={`/tags/${user.id}`}> More info...</Link>
                    </span>
                </div>
            ))}
        </Fragment>
    );
};

export default memo(User);
