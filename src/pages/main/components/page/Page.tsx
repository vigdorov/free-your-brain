import React, {memo} from 'react';
import {AuthService} from '_services/AuthService';
import {useStream} from '_utils/useStream';
import {createService} from '_utils/createService';
import ComponentStream from '../component-stream/ComponentStream';

const service = createService(1, {
    changeWithStr: (state: number, val: string) => {
        const parsedNumber = Number(val);
        if (Number.isNaN(val)) {
            return state;
        }

        return parsedNumber;
    },
    add: (state: number) => {
        return state + 1;
    },
    sub: (state: number) => {
        return state - 1;
    }
});

const MainPage: React.FC = () => {
    const {isAuth} = useStream(AuthService.state$, AuthService.initState);
    const toggle = () => AuthService.handleChangeAuth(!isAuth);
    const data = useStream(service.stream$, 0);

    return (
        <div>
            Main Page
            Auth: {isAuth ? 'yes' : 'no'}
            <button onClick={toggle}>click</button>
            <ComponentStream />
            <div>{data}</div>
            <button onClick={service.actions.add}>Add</button>
            <button onClick={service.actions.sub}>Sub</button>
        </div>
    );
};

export default memo(MainPage);
