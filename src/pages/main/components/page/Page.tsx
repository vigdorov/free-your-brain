import React, {memo} from 'react';
import {AuthService} from '../../../../services/AuthService';
import {useStream} from '../../../../utils/useStream';
import ComponentStream from '../component-stream/ComponentStream';

const MainPage: React.FC = () => {
    const {isAuth} = useStream(AuthService.state$, AuthService.initState);
    const toggle = () => AuthService.handleChangeAuth(!isAuth);
    return (
        <div>
            Main Page
            Auth: {isAuth ? 'yes' : 'no'}
            <button onClick={toggle}>click</button>
            <ComponentStream />
        </div>
    );
};

export default memo(MainPage);
