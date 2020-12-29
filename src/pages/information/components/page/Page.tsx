import React, {Fragment, memo} from 'react';
import {isNotEmpty} from '_referers/common';
import {makeTreeList} from '_utils/makeTreeList';
import {FolderList, TaskList} from '../../consts';
import InfoList from '../info-list';

const tree = makeTreeList(FolderList, TaskList);

const Page: React.FC = () => {
    return (
        <Fragment>
            {isNotEmpty(tree) && (
                <InfoList list={tree} space={1} />
            )}
        </Fragment>
    );
};

export default memo(Page);
