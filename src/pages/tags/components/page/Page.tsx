import React, {Fragment, memo} from 'react';
import {useStream} from '_utils/useStream';
import {commonApi} from '../../../../core/api/commonApi';
import {isNotEmpty} from '../../../../core/referers/common';
import TagList from '../tag-list';

const stream$ = commonApi.tagList.getAll();

const Page: React.FC = () => {
    const tags = useStream(() => stream$, []);
    return (
        <Fragment>
            {isNotEmpty(tags) && (
                <TagList list={tags} space={1} />
            )}
        </Fragment>
    );
};

export default memo(Page);
