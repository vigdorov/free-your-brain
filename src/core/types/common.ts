import {FolderType, Icon, TaskStatus} from '_enums/common';

export type Task = {
    /**
     * Идентификатор
     */
    id: string;
    title?: string;
    body?: string;
    created_at: string;
    start_at?: string;
    end_at?: string;
    icon?: Icon;
    /**
     * Контекст выполнения, теги
     */
    tags?: string[];
    /**
     * Папка, проект, список
     */
    folder?: string;
    status: TaskStatus;
};

export type Folder = {
    /**
     * Идентификатор
     */
    id: string;
    name: string;
    type: FolderType;
    /**
     * Папка, проект
     */
    folder?: string;
    removed?: boolean;
};

export type Tag = {
    /**
     * Идентификатор
     */
    id: string;
    name: string;
    /**
     * Цвет тега в формате #FFFFFF
     */
    color?: string;
    removed?: boolean;
};
