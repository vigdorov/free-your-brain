import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter} from 'react-router-dom';
import App from './components/page';

ReactDOM.render(
    /*
     * Выключаем стрикт мод, пока не починят
     * https://github.com/mui-org/material-ui/issues/13394
     */
    // <React.StrictMode>
    <HashRouter >
        <App />
    </HashRouter>,
    // </React.StrictMode>
    document.getElementById('root')
);
