import React, {memo} from 'react';
import {useHistory} from 'react-router-dom';
import {createStyles, makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Slide from '@material-ui/core/Slide';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import SearchIcon from '@material-ui/icons/Search';
import {Avatar} from '@material-ui/core';
import {PageType} from '_enums/common';
import {PAGE_TITLE} from '_consts/common';
import {usePageType} from '_hooks/usePageType';
import {buildPath} from '_utils/buildPath';

type Props = {
    trigger: boolean;
}

const NO_NAME_AVATAR = 'https://d.newsweek.com/en/full/425257/02-10-putin-economy.jpg';

const useStyles = makeStyles(() =>
    createStyles({
        title: {
            flexGrow: 1,
            display: 'flex',
            justifyContent: 'center',
        },
    }),
);

const TopMenu: React.FC<Props> = ({trigger}) => {
    const classes = useStyles();
    const pageType = usePageType();
    const history = useHistory();

    const handleGoRoot = () => {
        history.push(buildPath({pageType: PageType.Main}));
    };

    const title = PAGE_TITLE[pageType];
    return (
        <Slide appear={false} direction="down" in={!trigger}>
            <AppBar position="sticky">
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
        </Slide>
    );
};

export default memo(TopMenu);
