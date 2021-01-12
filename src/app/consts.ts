import {ROUTES} from '_consts/common';

export const LABELS = {
    SEACRH: 'Поиск',
    ADD_TASK: 'Добавить задачу',
    ADD_FOLDER: 'Добавить папку',
    ADD_TAG: 'Добавить тег',
    CREATE_TASK: 'Создание задачи',
    CREATE_TAG: 'Создание тега',
    CREATE: 'Создать',
    CANCEL: 'Отмена',
    TITLE: 'Заголовок',
    TAG: 'Тэг',
    COLOR: 'Цвет',
    DESCRIPTION: 'Описание',
    START_AT: 'Начало',
    END_AT: 'Окончание',
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

export const MENU_ADDS = [LABELS.ADD_TASK, LABELS.ADD_FOLDER, LABELS.ADD_TAG];
