import React, {FC, Fragment, memo} from 'react';
import {Link} from 'react-router-dom';

import {usersApi} from '_api/usersTestApi';
import {renderAsyncData} from '_utils/asyncDataUtils';
import {useStreamRD} from '_utils/useStream';
import {userEntityStore} from './utils';

type Props = {
    userId: number;
};

const User: FC<Props> = ({userId}) => {
    const data =
        useStreamRD(() => {
            const userStringId = userId.toString();

            return userEntityStore.get(userStringId, () =>
                usersApi.findById(userStringId)
            );
        }, [userId]);

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
