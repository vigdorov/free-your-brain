import React, {memo} from 'react';

import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {Divider, Drawer} from '@material-ui/core';

import {useToggle} from '../../../common/hooks/useToggle';
import {MENU} from '../../../common/consts';
import MenuList from './MenuList';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
    }),
);

const TopMenu: React.FC = () => {
    const classes = useStyles();
    const [isToggle, handleToggle] = useToggle();
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={handleToggle}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Tracker App
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer anchor="top" open={isToggle} onClose={handleToggle}>
                <div
                    role="presentation"
                    onClick={handleToggle}
                    onKeyDown={handleToggle}
                >
                    <MenuList list={MENU.COMMON} />
                    <Divider />
                    <MenuList list={MENU.PERSONAL} />
                </div>
            </Drawer>
        </div>
    );
};

export default memo(TopMenu);
