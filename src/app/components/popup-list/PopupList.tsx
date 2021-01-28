import {Dialog, List} from '@material-ui/core';
import React, {Fragment, memo, PropsWithChildren, useCallback} from 'react';
import {MENU_ADDS} from '../../consts';
import PopupListItem from '../popup-list-item';

type Props = PropsWithChildren<{}>;

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
                        <PopupListItem item={item.text} url={item.url} setOpen={setOpen} key={item.id} />
                    ))}
                </List>
            </Dialog>
            <div onClick={handleClickOpen}>{children}</div>
        </Fragment>
    );
};

export default memo(PopupList);
