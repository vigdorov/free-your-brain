import React, {memo} from 'react';
import {useStream} from '_utils/useStream';
import {tasksService} from '_services/TasksService';

import {List, ListItem, ListItemIcon, ListItemText} from '@material-ui/core';
import InboxIcon from '@material-ui/icons/Inbox';

const MainPage: React.FC = () => {
    const taskList = useStream(() => tasksService.stream$, []);
    return (
        <List component="nav" aria-label="main mailbox folders">
            {taskList?.map(task => (
                <ListItem button key={task.id}>
                    <ListItemIcon>
                        <InboxIcon />
                    </ListItemIcon>
                    <ListItemText
                        primary={task.title ?? 'Нет темы'}
                        secondary={task.body ?? 'Нет Описания'}
                    />
                </ListItem>
            ))}
        </List>
    );
};

export default memo(MainPage);
