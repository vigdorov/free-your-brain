import {useCallback, useState} from 'react';

export const useToggle = (initValue = false): [boolean, (value?: boolean) => void] => {
    const [isToggle, onToggle] = useState(initValue);
    const handleToggle = useCallback((value?: boolean) => onToggle(state => {
        return value === undefined ? !state : value;
        }), [onToggle]);
    return [
        isToggle,
        handleToggle,
    ];
};
