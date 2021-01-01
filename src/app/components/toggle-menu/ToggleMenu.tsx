import React, {Fragment, memo} from 'react';
import {Menu, MenuItem} from '@material-ui/core';
import {NavLink} from 'react-router-dom';
import {ROUTES} from '_consts/common';

type Props = {
    anchorEl: null | HTMLElement;
    handleClose: () => void;
}

const ToggleMenu: React.FC<Props> = ({anchorEl, handleClose}) => {
    return (
        <Fragment>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <NavLink to={ROUTES.TAGS}>
                    <MenuItem onClick={handleClose}>Tags</MenuItem>
                </NavLink>
                <NavLink to={ROUTES.SETTINGS}>
                    <MenuItem onClick={handleClose}>Settings</MenuItem>
                </NavLink>
                <NavLink to={ROUTES.INFORMATION}>
                    <MenuItem onClick={handleClose}>Information</MenuItem>
                </NavLink>
            </Menu>
        </Fragment>
    );
};

export default memo(ToggleMenu);
