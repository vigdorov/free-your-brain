import {Sink, Stream} from '@most/types';
import {noop} from 'lodash';
import {useEffect, useState} from 'react';
import {newDefaultScheduler} from '@most/scheduler';

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
            end: noop,
            error: noop
        };
        const unsub = effect$.run(sink, newDefaultScheduler());

        return () => {
            unsub.dispose();
        };
    // eslint-disable-next-line
    }, props);

    return state;
}
