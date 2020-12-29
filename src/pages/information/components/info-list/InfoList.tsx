import {createStyles, makeStyles, Theme, List} from '@material-ui/core';
import {xor} from 'lodash';
import React, {Fragment, memo, useCallback, useState} from 'react';
import {isFolderItem, isTaskItem, TreeList} from '_utils/makeTreeList';
import FolderListItem from './FolderListItem';
import TaskListItem from './TaskListItem';

type Props = {
    list: Undefinable<TreeList>;
    space: number;
};

const useStyles = makeStyles<Theme, {space: number}>((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
            maxWidth: 360,
            backgroundColor: theme.palette.background.paper,
        },
        nested: ({space}) => ({
            paddingLeft: theme.spacing(4 * space),
        }),
    }),
);

const InfoList: React.FC<Props> = ({list, space}) => {
    const [openFolderIds, setOpenFolder] = useState<string[]>([]);

    const handleSetOpenFolder = useCallback((id: string) => {
        setOpenFolder(xor(openFolderIds, [id]));
    }, [setOpenFolder, openFolderIds]);

    const classes = useStyles({space});

    return (
        <List component="div" className={classes.root}>
            {list?.map(item => (
                <Fragment key={item.data.id}>
                    {isFolderItem(item) && (
                        <FolderListItem
                            item={item}
                            className={classes.nested}
                            space={space}
                            openFolderIds={openFolderIds}
                            onFolderClick={handleSetOpenFolder}
                        />
                    )}
                    {isTaskItem(item) && (
                        <TaskListItem
                            item={item}
                            className={classes.nested}
                        />
                    )}
                </Fragment>
            ))}
        </List>
    );
};

export default memo(InfoList);
