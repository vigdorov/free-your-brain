import React, {Fragment, memo, PropsWithChildren, useCallback, useMemo, useState} from 'react';
import {v4} from 'uuid';
import {Menu, MenuItem} from '@material-ui/core';
import {NavLink} from 'react-router-dom';
import {BOTH_MENU_LINKS} from '../../consts';

type Props = PropsWithChildren<{
}>;

const ToggleMenu: React.FC<Props> = ({children}) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleClick = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
        setAnchorEl(event.currentTarget);
    }, [setAnchorEl]);

    const handleClose = useCallback(() => {
        setAnchorEl(null);
    }, [setAnchorEl]);

    const isOpenMenu = useMemo(() => Boolean(anchorEl), [anchorEl]);

    return (
        <Fragment>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={isOpenMenu}
                onClose={handleClose}
            >
                {
                    BOTH_MENU_LINKS.map(item => <NavLink to={item.url} key={v4()}>
                        <MenuItem onClick={handleClose}>{item.name}</MenuItem>
                    </NavLink>)
                }
            </Menu>
            <div onClick={handleClick}>
                {children}
            </div>
        </Fragment>
    );
};

export default memo(ToggleMenu);
