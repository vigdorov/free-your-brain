import React, {ReactNode} from 'react';
import {RemoteData, fold, map} from '@devexperts/remote-data-ts';
import {Stream} from '@most/types';
import * as M from '@most/core';
import {pipe} from 'fp-ts/lib/pipeable';

export const renderAsyncData = <E, A>(
    data: RemoteData<E, A>,
    renderSuccessData: (successData: A) => ReactNode
): ReactNode => {
    return fold<E, A, ReactNode>(
        () => <div>Initial</div>,
        () => <div>Pending</div>,
        error => <div>{`${error}`}</div>,
        successData => renderSuccessData(successData),
    )(data);
};

export const mapRD = <E, A, R>(mapper: (val: A) => R) => {
    return (stream$: Stream<RemoteData<E, A>>): Stream<RemoteData<E, R>> => {
        return pipe(
            stream$,
            M.map(val => map(mapper)(val))
        );
    };
};
