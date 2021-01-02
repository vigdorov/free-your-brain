import {AppBar, createStyles, Fab, IconButton, makeStyles, Theme, Toolbar} from '@material-ui/core';
import React, {memo} from 'react';
import MoreIcon from '@material-ui/icons/MoreVert';
import AddIcon from '@material-ui/icons/Add';
import MoveToInboxIcon from '@material-ui/icons/MoveToInbox';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import ListAltIcon from '@material-ui/icons/ListAlt';

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
                    <MoveToInboxIcon />
                </IconButton>
                <IconButton
                    edge="end"
                    color="inherit"
                >
                    <ListAltIcon />
                </IconButton>
                <Fab
                    color="secondary"
                    className={classes.fabButton}
                >
                    <AddIcon />
                </Fab>
                <div className={classes.grow} />
                <IconButton
                    className={classes.iconRight}
                    edge="start"
                    color="inherit"
                >
                    <CalendarTodayIcon />
                </IconButton>
                <IconButton
                    edge="end"
                    color="inherit"
                >
                    <MoreIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

export default memo(BothMenu);
