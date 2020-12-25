import {List, ListItem as MaterialListItem, ListItemIcon, ListItemText} from '@material-ui/core';
import React, {memo} from 'react';
import {Link} from 'react-router-dom';

import InboxIcon from '@material-ui/icons/MoveToInbox';

import {ListItem} from '../../../common/types';

type Props = {
    list: ListItem[];
};

const MenuList: React.FC<Props> = ({list}) => {
    return (
        <List>
            {list.map(({title, url}) => (
                <Link to={url} key={url}>
                    <MaterialListItem button key={url}>
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary={title} />
                    </MaterialListItem>
                </Link>
            ))}
        </List>
    );
};

export default memo(MenuList);
