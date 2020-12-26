import {PageType} from '../enums/common';

export const isPageType = (value?: string): value is PageType => (
    Object.values(PageType).some(pageType => pageType === value)
);
