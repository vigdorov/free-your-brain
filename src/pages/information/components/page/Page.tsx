import {combine} from '@most/core';
import {combine as combineRD, map} from '@devexperts/remote-data-ts';
import {pipe} from 'fp-ts/lib/function';
import React, {Fragment, memo} from 'react';

import {commonApi} from '_api/commonApi';
import {renderAsyncData} from '_utils/asyncDataUtils';
import {makeTreeList} from '_utils/makeTreeList';
import {useStreamRD} from '_utils/useStream';

import InfoList from '../info-list';

const stream$ = combine(
    (taskListRD, folderListRD) => {
        return pipe(
            combineRD(taskListRD, folderListRD),
            map(([taskList, folderList]) => {
                return makeTreeList(folderList, taskList);
            })
        );
    },
    commonApi.taskList.getAll(),
    commonApi.folderList.getAll()
);

const Page: React.FC = () => {
    const treeRD = useStreamRD(() => stream$, []);
    return (
        <Fragment>
            {renderAsyncData(treeRD, tree => (
                <InfoList list={tree} space={1} />
            ))}
        </Fragment>
    );
};

export default memo(Page);
