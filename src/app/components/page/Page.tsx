import React, {Fragment, memo} from 'react';
import {Route, Switch} from 'react-router-dom';
import mainPageRouter from '_pages/main/routing';
import chaosBoxPageRouter from '_pages/chaos-box/routing';
import calendarPageRouter from '_pages/calendar/routing';
import informationPageRouter from '_pages/information/routing';
import projectsPageRouter from '_pages/projects/routing';
import settingsPageRouter from '_pages/settings/routing';
import signInPageRouter from '_pages/sign-in/routing';
import tagsPageRouter from '_pages/tags/routing';
import NotFoundPage from '_pages/not-found/components/page';
import TopMenu from '../top-menu';
import './Page.scss';
import BothMenu from '../both-menu';

const Page: React.FC = () => {
    return (
        <Fragment>
            <TopMenu />
            <div>
                <Switch>
                    {mainPageRouter}
                    {chaosBoxPageRouter}
                    {calendarPageRouter}
                    {informationPageRouter}
                    {projectsPageRouter}
                    {settingsPageRouter}
                    {signInPageRouter}
                    {tagsPageRouter}
                    <Route>
                        <NotFoundPage />
                    </Route>
                </Switch>
            </div>
            <BothMenu />
        </Fragment>
    );
};

export default memo(Page);
