import {useHistory} from 'react-router-dom';
import {Dialog, List, ListItem, ListItemText} from '@material-ui/core';
import React, {Fragment, memo, PropsWithChildren, useCallback} from 'react';
import {v4} from 'uuid';
import {MENU_ADDS} from '../../consts';
import {PageType} from '../../../core/enums/common';
import {buildPath} from '../../../core/utils/buildPath';
import {ModalType} from '../../../app/enums';

type Props = PropsWithChildren<{}>;

const PopupList: React.FC<Props> = ({children}) => {
    const [open, setOpen] = React.useState(false);
    const history = useHistory();

    const handleClickOpen = useCallback(() => {
        setOpen(true);
    }, [setOpen]);

    const handleClose = useCallback(() => {
        setOpen(false);
    }, [setOpen]);

    const handleAddTicket = useCallback(() => {
        history.push(buildPath({pageType: PageType.Main, query: {modal: ModalType.CreateTask}}));
        setOpen(false);
    }, [history]);

    return (
        <Fragment>
            <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
                <List>
                    {MENU_ADDS.map(item =>
                        item === 'Добавить задачу' ? (
                            <ListItem button onClick={handleAddTicket} key={v4()}>
                                <ListItemText primary={item} />
                            </ListItem>
                        ) : (
                            <ListItem button onClick={handleClose} key={v4()}>
                                <ListItemText primary={item} />
                            </ListItem>
                        )
                    )}
                </List>
            </Dialog>
            <div onClick={handleClickOpen}>{children}</div>
        </Fragment>
    );
};

export default memo(PopupList);
