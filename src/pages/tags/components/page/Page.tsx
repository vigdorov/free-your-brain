import React, {Fragment, memo} from 'react';
import {renderAsyncData} from '_utils/asyncDataUtils';

import {usersApi} from '_api/usersTestApi';
import {useStreamRD} from '_utils/useStream';

import UserComponent from './User';

const Page: React.FC = () => {
    const users = useStreamRD(() => usersApi.request(), []);

    return (
        <Fragment>
            <div>
                tags
                {renderAsyncData(users, successData =>
                    successData?.map(user => <UserComponent userId={user.id} key={user.id} />)
                )}
            </div>
            <div>
                tags
                {renderAsyncData(users, successData =>
                    successData?.map(user => <UserComponent userId={user.id} key={user.id} />)
                )}
            </div>
        </Fragment>
    );
};

export default memo(Page);
