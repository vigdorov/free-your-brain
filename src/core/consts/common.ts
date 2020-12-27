import {PageType} from '../enums/common';

export const ROUTES = {
    MAIN: '/',
    CHAOS_BOX: '/chaos-box',
    PROJECTS: '/projects',
    INFORMATION: '/information',
    TAGS: '/tags',
    CALENDAR: '/calendar',
    SETTINGS: '/settings',
    SIGN_IN: '/sign-in',
};

export const PAGE_TITLE = {
    [PageType.Main]: 'Free your brain',
    [PageType.ChaosBox]: 'Chaos box',
    [PageType.Calendar]: 'Calendar',
    [PageType.Information]: 'Information',
    [PageType.Tags]: 'Tags',
    [PageType.Projects]: 'Projects',
    [PageType.Settings]: 'Settings',
    [PageType.SigIn]: 'SigIn',
};

export const UTC_DATE_FORMAT = '';
