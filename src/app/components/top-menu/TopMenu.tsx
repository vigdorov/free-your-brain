import React, {memo} from 'react';
import {useHistory} from 'react-router-dom';
import {createStyles, makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import SearchIcon from '@material-ui/icons/Search';
import {Avatar} from '@material-ui/core';
import {useParams} from '_hooks/useParams';
import {PageType} from '_enums/common';
import {PAGE_TITLE} from '_consts/common';
import {buildPath} from '../../../core/utils/buildPath';

const NO_NAME_AVATAR = 'https://d.newsweek.com/en/full/425257/02-10-putin-economy.jpg';

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        title: {
            flexGrow: 1,
            display: 'flex',
            justifyContent: 'center',
        },
    }),
);

const TopMenu: React.FC = () => {
    const classes = useStyles();
    const {pageType} = useParams();
    const history = useHistory();

    const handleGoRoot = () => {
        history.push(buildPath({pageType: PageType.Main}));
    };

    const title = PAGE_TITLE[pageType];
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    {pageType === PageType.Main && (
                        <IconButton
                            edge="start"
                            color="inherit"
                        >
                            <SearchIcon />
                        </IconButton>
                    )}
                    {pageType !== PageType.Main && (
                        <IconButton
                            onClick={handleGoRoot}
                            edge="start"
                            color="inherit"
                        >
                            <ArrowBackIosIcon />
                        </IconButton>
                    )}

                    <Typography
                        variant="h6"
                        className={classes.title}
                    >
                        {title}
                    </Typography>

                    <Avatar src={NO_NAME_AVATAR} />
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default memo(TopMenu);
