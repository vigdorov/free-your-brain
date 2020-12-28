import React, {memo} from 'react';
import {Link} from 'react-router-dom';
import {usersApi} from '_api/usersTestApi';
import {useStream} from '_utils/useStream';

const userList$ = usersApi.request();

const Page: React.FC = () => {
    const users = useStream(() => userList$, []);

    return (
        <div>
            tags
            {users?.map(user => (
                <div key={user.id}>
                    {user.first_name}, {user.last_name}
                    <span><Link to={`/tags/${user.id}`}> More info...</Link></span>
                </div>
            ))}
        </div>
    );
};

export default memo(Page);
