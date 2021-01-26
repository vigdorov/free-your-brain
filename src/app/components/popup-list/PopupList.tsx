import {Dialog, List} from '@material-ui/core';
import React, {Fragment, memo, PropsWithChildren, useCallback} from 'react';
import {PageType} from '_enums/common';
import {buildPath} from '_utils/buildPath';
import {MENU_ADDS} from '../../consts';
import {AddMenu, ModalType} from '../../../app/enums';
import PopupListItem from '../popup-list-item';

type Props = PropsWithChildren<{}>;

const PopupList: React.FC<Props> = ({children}) => {
    const [open, setOpen] = React.useState(false);
    const url = buildPath({pageType: PageType.Main, query: {modal: ModalType.CreateTask}});

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
                    {MENU_ADDS.map((item, index) =>
                        item.type === AddMenu.AddTask ? (
                            <PopupListItem item={item.text} url={url} setOpen={setOpen} key={index} />
                        ) : (
                            <PopupListItem item={item.text} setOpen={setOpen} key={index} />
                        )
                    )}
                </List>
            </Dialog>
            <div onClick={handleClickOpen}>{children}</div>
        </Fragment>
    );
};

export default memo(PopupList);
