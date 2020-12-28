import React, {Fragment, memo} from 'react';

import {usersApi} from '_api/usersTestApi';
import {useStream} from '_utils/useStream';

import UserComponent from './User';

const Page: React.FC = () => {
    const users = useStream(() => usersApi.request(), []);
    return (
        <Fragment>
            <div>
                tags
                {users?.map(user => (
                    <UserComponent userId={user.id} key={user.id}/>
                ))}
            </div>
            <div>
                tags
                {users?.map(user => (
                    <UserComponent userId={user.id} key={user.id}/>
                ))}
            </div>
        </Fragment>
    );
};

export default memo(Page);
