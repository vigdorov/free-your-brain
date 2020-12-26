import React, {memo} from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';

import mainPageRouter from '../../../pages/main/routing';
import queuesPageRouter from '../../../pages/queues/routing';
import tasksPageRouter from '../../../pages/tasks/routing';
import authResponsePageRouter from '../../../pages/auth-response/routing';
import NotFoundPage from '../../../pages/not-found/components/page/Page';
import TopMenu from '../top-menu/TopMenu';
import './Page.scss';

const Page: React.FC = () => {
    return (
        <HashRouter>
            <TopMenu />
            <Switch>
                {mainPageRouter}
                {queuesPageRouter}
                {tasksPageRouter}
                {authResponsePageRouter}
                <Route>
                    <NotFoundPage />
                </Route>
            </Switch>
        </HashRouter>
    );
};

export default memo(Page);
