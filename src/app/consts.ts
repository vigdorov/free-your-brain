import {v4} from 'uuid';
import {ROUTES} from '_consts/common';
import {PageType} from '../core/enums/common';
import {buildPath} from '../core/utils/buildPath';
import {AddMenu, ModalType} from './enums';

export const LABELS = {
    SEACRH: 'Поиск',
    ADD_TASK: 'Добавить задачу',
    ADD_FOLDER: 'Добавить папку',
    ADD_TAG: 'Добавить тег',
    CREATE_TASK: 'Создание задачи',
    CREATE: 'Создать',
    CANCEL: 'Отмена',
    TITLE: 'Заголовок',
    DESCRIPTION: 'Описание',
    START_AT: 'Начало',
    END_AT: 'Окончание'
} as const;

export const BOTH_MENU_LINKS = [
    {
        name: 'Tags',
        url: ROUTES.TAGS
    },
    {
        name: 'Settings',
        url: ROUTES.SETTINGS
    },
    {
        name: 'Information',
        url: ROUTES.INFORMATION
    }
];

export const MENU_ADDS = [
    {
        id: v4(),
        text: LABELS.ADD_TASK,
        type: AddMenu.AddTask,
        url: buildPath({pageType: PageType.Main, query: {modal: ModalType.CreateTask}})
    },
    {
        id: v4(),
        text: LABELS.ADD_FOLDER,
        type: AddMenu.AddFolder,
        url: buildPath({pageType: PageType.Main, query: {modal: ModalType.CreateFolder}})
    },
    {
        id: v4(),
        text: LABELS.ADD_TAG,
        type: AddMenu.AddTag,
        url: buildPath({pageType: PageType.Main, query: {modal: ModalType.CreateTag}})
    }
];
