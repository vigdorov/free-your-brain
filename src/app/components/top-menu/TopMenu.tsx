import React, {memo, useState} from 'react';
import {useHistory} from 'react-router-dom';
import {createStyles, makeStyles, Theme, fade} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Slide from '@material-ui/core/Slide';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import SearchIcon from '@material-ui/icons/Search';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import {Avatar, InputBase} from '@material-ui/core';
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
        inputRoot: {
            color: 'inherit',
        },
        inputInput: {
            padding: theme.spacing(1, 1, 1, 0),
            paddingLeft: `calc(1em + ${theme.spacing(0)}px)`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('md')]: {
                width: '20ch',
            },
        },
        search: {
            position: 'relative',
            borderRadius: theme.shape.borderRadius,
            backgroundColor: fade(theme.palette.common.white, 0.15),
            '&:hover': {
                backgroundColor: fade(theme.palette.common.white, 0.25),
            },
            marginRight: theme.spacing(2),
            marginLeft: 0,
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                marginLeft: theme.spacing(3),
                width: 'auto',
            },
        },
    })
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
                                    <div className={classes.search}>
                                        <InputBase
                                            placeholder={LABELS.SEACRH}
                                            classes={{
                                                root: classes.inputRoot,
                                                input: classes.inputInput,
                                            }}
                                            inputProps={{'aria-label': 'search'}}
                                        />
                                    </div>
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
