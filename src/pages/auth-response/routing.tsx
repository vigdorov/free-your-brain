import React from 'react';
import {Route} from 'react-router-dom';

import {ROUTES} from '../../common/consts';
import Page from './components/page/Page';

export default (
    <Route
        component={Page}
        path={ROUTES.AUTH_RESPONSE}
        exact
    />
);
