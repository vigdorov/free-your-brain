import {ListItem, ListItemText} from '@material-ui/core';
import React, {memo, useCallback} from 'react';
import {useHistory} from 'react-router-dom';

type PopupListItemProps = {
    item: string;
    url: string;
};

const PopupListItem: React.FC<PopupListItemProps> = ({item, url}) => {
    const history = useHistory();

    const handleClick = useCallback(() => {
        history.push(url);
    }, [history, url]);

    return (
        <ListItem button onClick={handleClick}>
            <ListItemText primary={item} />
        </ListItem>
    );
};

export default memo(PopupListItem);
