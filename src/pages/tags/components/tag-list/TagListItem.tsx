import {ListItem, ListItemIcon, ListItemText} from '@material-ui/core';
import React, {FC, memo} from 'react';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import {Tag} from '../../../../core/types/common';

type Props = {
    item: Tag;
    className: string;
};

const TaskListItem: FC<Props> = ({item, className}) => {
    return (
        <ListItem button className={className}>
            <ListItemIcon>
                <FiberManualRecordIcon style={{color: `${item.color}`}} />
            </ListItemIcon>
            <ListItemText primary={item.name}/>
        </ListItem>
    );
};

export default memo(TaskListItem);
