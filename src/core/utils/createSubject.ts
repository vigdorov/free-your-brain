import {createAdapter} from '@most/adapter';
import {Stream} from '@most/types';
import {hold} from '@most/hold';

export type Subject<T> = {
    stream$: Stream<T>;
    next: (val: T) => void;
    getValue: () => T;
}
export const createSubject = <T>(data: T): Subject<T> => {
    let cache = data;

    const [handler, stream$] = createAdapter<T>();

    return {
        next: (val: T) => {
            cache = val;
            handler(val);
        },
        stream$: hold(stream$),
        getValue: () => cache
    };
};
