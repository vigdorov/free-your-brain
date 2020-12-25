import {ListItem} from './types';

export const ROUTES = {
    MAIN: '/',
    QUEUES: '/queues',
    TASKS: '/tasks',
    SETTINGS: '/settings',
    AUTH_RESPONSE: '/auth-response',
};

export const MENU: Record<string, ListItem[]> = {
    COMMON: [
        {
            title: 'Главная',
            url: ROUTES.MAIN,
        },
        {
            title: 'Очереди',
            url: ROUTES.QUEUES,
        },
        {
            title: 'Задачи',
            url: ROUTES.TASKS,
        },
    ],
    PERSONAL: [
        {
            title: 'Настройки',
            url: ROUTES.SETTINGS,
        },
    ]
};
