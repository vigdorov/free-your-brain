import {Tag} from '_types/common';

export type TagItem = {
    data: Tag;
    children?: TagList;
};

export type TagList = Array<Tag>;
