import {createStyles, List, makeStyles, Theme} from '@material-ui/core';
import React, {FC, memo} from 'react';
import {TagList} from '../../../../core/utils/makeTagList';
import TagListItem from './TagListItem';

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

type Props = {
    list: Undefinable<TagList>;
    space: number;
};

const TagList: FC<Props> = ({list, space}) => {
    const classes = useStyles({space});
    return (
        <List component="div" className={classes.root}>
            {list?.map(item => (
                <TagListItem key={item.id} item={item} className={classes.nested} />
            ))}
        </List>
    );
};

export default memo(TagList);
