import {PageType} from '_enums/common';
import {isPageType} from '_referers/common';

export const numberToString = (num: number): string => num.toString();

export const getPageType = (pathname?: string): PageType => {
    const path = pathname?.startsWith('/') ? pathname.slice(1) : pathname ?? '';
    return isPageType(path) ? path : PageType.Main;
};
