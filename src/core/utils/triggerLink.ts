type Options = {
    download?: boolean | string;
    target?: '_self' | '_blank';
};

const DEFAULT_OPTIONS = {
    target: '_self',
    download: false,
} as const;

/**
 * Использование этой функции требуется для открытия ссылок в новых
 * вкладках из методов сервиса. Внутри компонентов его не используем.
 */
export const triggerLink = (link: string, options?: Options) => {
    const finalOptions = {
        ...DEFAULT_OPTIONS,
        ...options
    };

    const a = document.createElement('a');
    a.href = link;
    a.target = finalOptions.target;

    if (finalOptions.download === true) {
        a.download = 'yes';
    } else if (typeof finalOptions.download === 'string') {
        a.download = finalOptions.download;
    }

    a.dispatchEvent(new MouseEvent('click'));
    document.removeChild(a);
};
