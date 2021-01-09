import {AppBar, createStyles, Fab, IconButton, makeStyles, Theme, Toolbar} from '@material-ui/core';
import Slide from '@material-ui/core/Slide';
import React, {memo} from 'react';
import MoreIcon from '@material-ui/icons/MoreVert';
import AddIcon from '@material-ui/icons/Add';
import MoveToInboxIcon from '@material-ui/icons/MoveToInbox';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import ListAltIcon from '@material-ui/icons/ListAlt';
import {NavLink} from 'react-router-dom';
import {ROUTES} from '_consts/common';
import ToggleMenu from '../toggle-menu';
import {BOTH_MENU_LINKS} from '../../consts';
import PopupList from '../popup-list/PopupList';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        iconRight: {
            marginRight: theme.spacing(2),
        },
        appBar: {
            top: 'auto',
            bottom: 0,
        },
        grow: {
            flexGrow: 1,
        },
        fabButton: {
            position: 'absolute',
            zIndex: 1,
            top: -30,
            left: 0,
            right: 0,
            margin: '0 auto',
        },
    }),
);

type Props = {
    trigger: boolean;
};

const BothMenu: React.FC<Props> = ({trigger}) => {
    const classes = useStyles();

    return (
        <Slide appear={false} direction="up" in={!trigger}>
            <AppBar
                position="fixed"
                color="primary"
                className={classes.appBar}
            >
                <Toolbar>
                    <IconButton
                        className={classes.iconRight}
                        edge="start"
                        color="inherit"
                    >
                        <NavLink to={ROUTES.CHAOS_BOX}>
                            <MoveToInboxIcon />
                        </NavLink>
                    </IconButton>
                    <IconButton
                        edge="end"
                        color="inherit"
                    >
                        <NavLink to={ROUTES.PROJECTS}>
                            <ListAltIcon />
                        </NavLink>
                    </IconButton>
                    <PopupList>
                        <Fab
                            color="secondary"
                            className={classes.fabButton}
                        >
                            <AddIcon />
                        </Fab>
                    </PopupList>
                    <div className={classes.grow} />
                    <IconButton
                        className={classes.iconRight}
                        edge="start"
                        color="inherit"
                    >
                        <NavLink to={ROUTES.CALENDAR}>
                            <CalendarTodayIcon />
                        </NavLink>
                    </IconButton>
                    <ToggleMenu items={BOTH_MENU_LINKS}>
                        <IconButton
                            edge="end"
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </ToggleMenu>
                </Toolbar>
            </AppBar>
        </Slide >
    );
};

export default memo(BothMenu);
