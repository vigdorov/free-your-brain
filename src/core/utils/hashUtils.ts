export const makeHashLocation = (location: Location = window.location) => {
    const hash = location.hash.slice(location.hash.startsWith('#') ? 1 : 0);
    const [pathname, search] = hash.split('?');
    return {
        hash: '',
        pathname,
        search: `?${search}`,
    };
};
