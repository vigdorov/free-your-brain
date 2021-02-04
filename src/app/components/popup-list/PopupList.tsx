import {Dialog, List} from '@material-ui/core';
import React, {Fragment, memo, PropsWithChildren, useCallback} from 'react';
import {useHistory} from 'react-router-dom';
import {PageType} from '_enums/common';
import {buildPath} from '_utils/buildPath';
import {ModalType} from '../../../app/enums';
import {MENU_ADDS} from '../../consts';
import PopupListItem from '../popup-list-item';

type Props = PropsWithChildren<{
    open: boolean;
}>;

const PopupList: React.FC<Props> = ({open, children}) => {
    const history = useHistory();

    const handleClickOpen = useCallback(() => {
        history.push(buildPath({pageType: PageType.Main, query: {modal: ModalType.CreateModal}}));
    }, [history]);

    const handleClose = useCallback(() => {
        history.push(buildPath({pageType: PageType.Main}));
    }, [history]);

    return (
        <Fragment>
            <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
                <List>
                    {MENU_ADDS.map(item => (
                        <PopupListItem item={item.text} url={item.url} key={item.id} />
                    ))}
                </List>
            </Dialog>
            <div onClick={handleClickOpen}>{children}</div>
        </Fragment>
    );
};

export default memo(PopupList);
