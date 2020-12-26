import {useEffect, useState} from 'react';
import {Stream, Sink} from '@most/types';
import {newDefaultScheduler} from '@most/scheduler';
import {pending, RemoteData} from '@devexperts/remote-data-ts';

// eslint-disable-next-line
const emptyFunc = () => {};

export const useStream = <T>(stream$: Stream<T>, defaultValue: T): T => {
    const [state, setState] = useState(defaultValue);

    useEffect(() => {
        const sink: Sink<T> = {
            event: (_, val) => {
                setState(val);
            },
            end: emptyFunc,
            error: emptyFunc
        };

        const effect$ = stream$.run(sink, newDefaultScheduler());
        return () => {
            effect$.dispose();
        };
    }, [stream$]);

    return state;
};

export const useStreamRD = <T, E = Error>(stream$: Stream<RemoteData<E, T>>): RemoteData<E, T> => {
    return useStream(stream$, pending);
};
