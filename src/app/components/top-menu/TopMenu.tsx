import React, {memo, SyntheticEvent, useState} from 'react';
import {useHistory} from 'react-router-dom';
import {createStyles, makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import SearchIcon from '@material-ui/icons/Search';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import {Avatar} from '@material-ui/core';
import {PageType} from '_enums/common';
import {PAGE_TITLE} from '_consts/common';
import {usePageType} from '_hooks/usePageType';
import {buildPath} from '_utils/buildPath';

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
        input: {
            backgroundColor: 'white',
        },
    }),
);

const TopMenu: React.FC = () => {
    const [isSearch, setIsSearch] = useState(false);
    const classes = useStyles();
    const pageType = usePageType();
    const history = useHistory();

    const handleGoRoot = () => {
        history.push(buildPath({pageType: PageType.Main}));
    };

    const handleToggleSearch = () => {
        setIsSearch(!isSearch);
    };

    const handleClickAway = () => {
        setIsSearch(false);
    };

    const title = PAGE_TITLE[pageType];
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    {pageType === PageType.Main && (
                        <>
                            {
                                isSearch ?
                                    <ClickAwayListener onClickAway={handleClickAway}>
                                        <TextField
                                            label="Search"
                                            id="outlined-size-small"
                                            defaultValue=""
                                            variant="outlined"
                                            size="small"
                                            className={classes.input}
                                        />
                                    </ClickAwayListener>
                                    :
                                    <IconButton
                                        edge="start"
                                        color="inherit"
                                    >
                                        <SearchIcon onClick={handleToggleSearch} />
                                    </IconButton>
                            }
                        </>
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
                           {isSearch ? '' : title }
                        </Typography>
                    <Avatar src={NO_NAME_AVATAR} />
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default memo(TopMenu);
