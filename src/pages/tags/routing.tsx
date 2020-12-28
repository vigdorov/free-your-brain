import React, {Fragment} from 'react';
import {Route} from 'react-router-dom';
import {ROUTES} from '_consts/common';
import Page from './components/page';
import User from './components/user';

export default (
    <Fragment>
        <Route component={User} path={`${ROUTES.TAGS}/:id`} exact />
        <Route component={Page} path={ROUTES.TAGS} exact />
    </Fragment>
);
