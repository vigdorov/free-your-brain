import React from 'react';
import {Route} from 'react-router-dom';
import {ROUTES} from '_consts/common';
import Page from './components/page/Page';

export default (
    <Route component={Page} path={ROUTES.SIGN_IN} exact />
);
