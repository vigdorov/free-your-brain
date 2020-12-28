import React, {memo} from 'react';
import {usersApi} from '../../../../core/api/usersTestApi';
import {useStream} from '../../../../core/utils/useStream';

const userList$ = usersApi.request();

const Page: React.FC = () => {
    const users = useStream(userList$, []);
    return (
        <div>
            tags
            {users.map(user => (
                <div key={user.id}>{user.first_name}, {user.last_name}</div>
            ))}
        </div>
    );
};

export default memo(Page);
