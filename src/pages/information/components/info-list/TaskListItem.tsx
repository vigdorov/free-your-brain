import {ListItemIcon, ListItem, ListItemText} from '@material-ui/core';
import AssignmentLateIcon from '@material-ui/icons/AssignmentLate';
import React, {FC, memo} from 'react';
import {TaskItem} from '_utils/makeTreeList';

type Props = {
    item: TaskItem;
    className: string;
};

const TaskListItem: FC<Props> = ({item, className}) => {
    return (
        <ListItem button className={className}>
            <ListItemIcon>
                <AssignmentLateIcon />
            </ListItemIcon>
            <ListItemText primary={item.data.title} />
        </ListItem>
    );
};

export default memo(TaskListItem);
