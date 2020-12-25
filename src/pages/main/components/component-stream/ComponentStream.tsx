import React, {FC, memo} from 'react';
import {chain, fromPromise, map} from '@most/core';
import {pipe} from 'fp-ts/lib/pipeable';
import {useStream} from '../../../../utils/useStream';
import {list$} from '../../../../services/service1';

const promise1: (id: number) => Promise<string> = (id: number) => new Promise(res => {
    setTimeout(() => res(`${id}  123123`), 6000);
});

const getStreamFromPromise = (id: number) => fromPromise(promise1(id));

const ComponentStream: FC = () => {
    const data = useStream(
        pipe(
            list$,
            map(arr => {
                return arr.length;
            }),
            chain(id => getStreamFromPromise(id))
        ),
        ''
    );

    return (
        <div>
            <div>{data}</div>
        </div>
    );
};

export default memo(ComponentStream);
