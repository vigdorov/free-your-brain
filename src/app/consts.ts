import {ROUTES} from '_consts/common';
import {AddMenu} from './enums';

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
    {text: LABELS.ADD_TASK, type: AddMenu.AddTask},
    {text: LABELS.ADD_FOLDER, type: AddMenu.AddFolder},
    {text: LABELS.ADD_TAG, type: AddMenu.AddTag}
];
