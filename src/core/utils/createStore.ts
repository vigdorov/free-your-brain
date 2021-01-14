import {startWith} from '@most/core';
import {createAdapter} from '@most/adapter';
import {pipe} from 'fp-ts/es6/pipeable';

type ServiceAction<State, ValType> = (data: State, val?: ValType) => State;

type ServiceActions<State, T extends Record<string, ServiceAction<State, unknown>>> = {
    [Key in keyof T]: T[Key] extends ServiceAction<State, infer D>
        ? D extends void | undefined
            ? () => State
            : (val: D) => State
        : never;
};

// eslint-disable-next-line
export const createStore = <State, Actions extends Record<string, ServiceAction<State, any>>>(
    initData: State,
    actions: Actions
) => {
    const [handler, adapterStream$] = createAdapter<State>();
    let currValue = initData;
    const currStream$ = pipe(adapterStream$, startWith(initData));
    const currActions = Object.entries(actions).reduce((acc, [key, func]) => {
        // eslint-disable-next-line
        (acc as any)[key] = (val: unknown) => {
            currValue = func(currValue, val);
            handler(currValue);
        };
        return acc;
    }, {} as ServiceActions<State, Actions>);
    return {
        stream$: currStream$,
        actions: currActions,
        initialState: initData
    };
};
