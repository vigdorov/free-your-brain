import {ListItem, ListItemText} from '@material-ui/core';
import React, {memo, useCallback} from 'react';
import {useHistory} from 'react-router-dom';

type PopupListItemProps = {
    item: string;
    url: string;
    setOpen: (isOpen: boolean) => void;
};

const PopupListItem: React.FC<PopupListItemProps> = ({item, url, setOpen}) => {
    const history = useHistory();

    const handleClick = useCallback(() => {
        setOpen(false);
        history.push(url);
    }, [history, setOpen, url]);

    return (
        <ListItem button onClick={handleClick}>
            <ListItemText primary={item} />
        </ListItem>
    );
};

export default memo(PopupListItem);
