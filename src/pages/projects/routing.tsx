import React from 'react';
import {Route} from 'react-router-dom';
import {ROUTES} from '_consts/common';
import Page from './components/page';

export default (
    <Route component={Page} path={ROUTES.PROJECTS} exact />
);
