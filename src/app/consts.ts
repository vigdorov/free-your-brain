import {ROUTES} from '_consts/common';

export const LABELS = {
    SEACRH: 'Поиск',
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

export const MENU_ADDS = ['Добавить задачу', 'Добавить папку', 'Добавить тег'];
