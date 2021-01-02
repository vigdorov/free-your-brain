import React, {memo, useState} from 'react';
import {useHistory} from 'react-router-dom';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Slide from '@material-ui/core/Slide';
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
import {LABELS} from '../../consts';

type Props = {
    trigger: boolean;
}

const NO_NAME_AVATAR = 'https://d.newsweek.com/en/full/425257/02-10-putin-economy.jpg';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        title: {
            flexGrow: 1,
            display: 'flex',
            justifyContent: 'center',
        },
        searchInput: {
            backgroundColor: theme.palette.background.default,
        },
    }),
);

const TopMenu: React.FC<Props> = ({trigger}) => {
    const [isShowSearch, setShowSearch] = useState(false);
    const classes = useStyles();
    const pageType = usePageType();
    const history = useHistory();

    const handleGoRoot = () => {
        history.push(buildPath({pageType: PageType.Main}));
    };

    const handleToggleSearch = () => {
        setShowSearch(!isShowSearch);
    };

    const handleClickAway = () => {
        setShowSearch(false);
    };

    const title = PAGE_TITLE[pageType];
    return (
        <Slide appear={false} direction="down" in={!trigger}>
            <AppBar position="sticky">
                <Toolbar>
                    {pageType === PageType.Main && (
                        <>
                            {isShowSearch ? (
                                <ClickAwayListener onClickAway={handleClickAway}>
                                    <TextField
                                        label={LABELS.SEACRH}
                                        id="outlined-size-small"
                                        defaultValue=""
                                        variant="outlined"
                                        size="small"
                                        className={classes.searchInput}
                                    />
                                </ClickAwayListener>
                            ) : (
                                    <IconButton
                                        edge="start"
                                        color="inherit"
                                    >
                                        <SearchIcon onClick={handleToggleSearch} />
                                    </IconButton>
                                )
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
                        {isShowSearch ? '' : title}
                    </Typography>
                    <Avatar src={NO_NAME_AVATAR} />
                </Toolbar>
            </AppBar>
        </Slide>
    );
};

export default memo(TopMenu);
