import {Dialog, List, ListItem, ListItemText} from '@material-ui/core';
import React, {Fragment, memo, PropsWithChildren, useCallback} from 'react';
import {v4} from 'uuid';
import {MENU_ADDS} from '../../consts';

type Props = PropsWithChildren<{
}>;

const PopupList: React.FC<Props> = ({children}) => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = useCallback(() => {
        setOpen(true);
    }, [setOpen]);

    const handleClose = useCallback(() => {
        setOpen(false);
    }, [setOpen]);

    return (
        <Fragment>
            <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
                <List>
                    {MENU_ADDS.map(item => (
                        <ListItem button onClick={handleClose} key={v4()}>
                            <ListItemText primary={item} />
                        </ListItem>
                    ))}
                </List>
            </Dialog>
            <div onClick={handleClickOpen}>
                {children}
            </div>
        </Fragment>
    );
};

export default memo(PopupList);
