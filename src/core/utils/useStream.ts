import {Sink, Stream} from '@most/types';
import {useEffect, useState} from 'react';
import {newDefaultScheduler} from '@most/scheduler';

// eslint-disable-next-line
const emptyFunc = () => {
};

export function useStream<T extends Array<unknown>, R>(
    piping: () => Stream<R>,
    props: T,
) {
    const [state, setState] = useState<R>();
    useEffect(() => {
        setState(undefined);
    // eslint-disable-next-line
    }, props);
    useEffect(() => {
        const effect$ = piping();
        const sink: Sink<R> = {
            event: (_, val) => {
                setState(val);
            },
            end: emptyFunc,
            error: emptyFunc
        };
        const unsub = effect$.run(sink, newDefaultScheduler());

        return () => {
            unsub.dispose();
        };
    // eslint-disable-next-line
    }, props);

    return state;
}
