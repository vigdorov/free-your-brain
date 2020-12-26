import {useCallback, useState} from 'react';

export const useToggle = (initValue = false): [boolean, () => void] => {
    const [isToggle, onToggle] = useState(initValue);
    const handleToggle = useCallback(() => onToggle(state => !state), [onToggle]);
    return [
        isToggle,
        handleToggle,
    ];
};
