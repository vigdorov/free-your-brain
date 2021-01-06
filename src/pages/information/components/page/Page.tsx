import {combine} from '@most/core';
import React, {Fragment, memo} from 'react';
import {isNotEmpty} from '_referers/common';
import {makeTreeList} from '_utils/makeTreeList';
import {commonApi} from '_api/commonApi';
import {useStream} from '_utils/useStream';
import InfoList from '../info-list';

const stream$ = combine((taskList, folderList) => {
    return makeTreeList(folderList, taskList);
}, commonApi.taskList.getAll(), commonApi.folderList.getAll());

const Page: React.FC = () => {
    const tree = useStream(() => stream$, []);
    return (
        <Fragment>
            {isNotEmpty(tree) && (
                <InfoList list={tree} space={1} />
            )}
        </Fragment>
    );
};

export default memo(Page);
