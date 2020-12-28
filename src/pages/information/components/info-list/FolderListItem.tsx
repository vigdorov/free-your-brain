import {Collapse, ListItemIcon, ListItem, ListItemText} from '@material-ui/core';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import FolderIcon from '@material-ui/icons/Folder';
import React, {FC, Fragment, memo, useCallback, useMemo} from 'react';
import {isNotEmpty} from '_referers/common';
import {FolderItem} from '_utils/makeTreeList';
import InfoList from './InfoList';

type Props = {
    item: FolderItem;
    className: string;
    space: number;
    openFolderIds: string[];
    onFolderClick: (folderId: string) => void;
};

const FolderListItem: FC<Props> = ({item, className, space, openFolderIds, onFolderClick}) => {
    const isOpen = useMemo(() => {
        return openFolderIds.some(id => id === item.data.id);
    }, [openFolderIds, item.data.id]);

    const isNotEmptyChildren = useMemo(() => isNotEmpty(item.children), [item.children]);

    const handleItemClick = useCallback(() => {
        onFolderClick(item.data.id);
    }, [onFolderClick, item.data.id]);

    return (
        <Fragment>
            <ListItem
                className={className}
                button
                onClick={handleItemClick}
            >
                <ListItemIcon>
                    <FolderIcon />
                </ListItemIcon>
                <ListItemText primary={item.data.name} />
                {isNotEmptyChildren && (
                    isOpen ? <ExpandLess /> : <ExpandMore />
                )}
            </ListItem>
            {isNotEmptyChildren && (
                <Collapse in={isOpen} timeout="auto" unmountOnExit>
                    <InfoList list={item.children} space={space + 1} />
                </Collapse>
            )}
        </Fragment>
    );
};

export default memo(FolderListItem);
