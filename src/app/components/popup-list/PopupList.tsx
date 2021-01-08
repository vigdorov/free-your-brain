import {Dialog, List, ListItem, ListItemText, makeStyles} from '@material-ui/core';
import React, {Fragment, memo} from 'react';
import {v4} from 'uuid';
import {MENU_ADDS} from '../../consts';

const useStyles = makeStyles({

});

type Props = {
    open: boolean;
    selectedValue: string;
    onClose: (value: string) => void;
};

const PopupList: React.FC<Props> = ({onClose, selectedValue, open}) => {
    const handleClose = () => {
        onClose(selectedValue);
    };

    const handleListItemClick = (value: string) => {
        onClose(value);
    };

    return (
        <Fragment>
            <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
                <List>
                    {
                        MENU_ADDS.map(item => (
                            <ListItem button onClick={() => handleListItemClick(item)} key={v4()}>
                                <ListItemText primary={item} />
                            </ListItem>
                        ))
                    }
                </List>
            </Dialog>
        </Fragment>
    );
};

export default memo(PopupList);
