import isEqual from 'lodash/isEqual';
import {DependencyList, useEffect, useState} from 'react';

const emptyDependency: DependencyList = [];

export function useEqualMemo<T>(func: () => T, args: DependencyList = emptyDependency): T {
    const [memoized, memo] = useState<T>(func());
    useEffect(() => {
        const data = func();
        if (!isEqual(memoized, data)) {
            memo(data);
        }
    }, [memoized, func, args]);

    return memoized;
}
