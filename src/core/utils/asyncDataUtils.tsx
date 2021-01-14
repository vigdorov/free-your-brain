import React, {ReactNode} from 'react';
import {RemoteData, fold, map as remoteDataMap, isSuccess} from '@devexperts/remote-data-ts';
import {Stream} from '@most/types';
import {chain, map, now, tap} from '@most/core';
import {pipe} from 'fp-ts/lib/pipeable';
import {LiveData} from '_types/LiveData';

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
            map(val => remoteDataMap(mapper)(val))
        );
    };
};

export const tapRD = <E, A>(mapper: (val: A) => void) => {
    return (stream$: Stream<RemoteData<E, A>>) => {
        return pipe(
            stream$,
            tap(val => remoteDataMap(mapper)(val))
        );
    };
};

export const chainRD = <E, A, R>(chainer: (val: A) => Stream<RemoteData<E, R>>) => {
    return (stream$: Stream<RemoteData<E, A>>) => {
        return pipe(
            stream$,
            chain(rVal => {
                if (isSuccess(rVal)) {
                    return chainer(rVal.value);
                }
                const res: LiveData<E, R> = now(rVal);

                return res;
            })
        );
    };
};
