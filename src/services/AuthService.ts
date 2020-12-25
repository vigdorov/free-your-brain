import {createAdapter} from '@most/adapter';
import {state} from 'fp-ts/lib/State';

export namespace AuthService {
    type State = {
        isAuth: boolean;
    };

    export const initState: State = {
        isAuth: false,
    };

    const [changeState, stream$] = createAdapter<State>();

    export const handleChangeAuth = (isAuth: boolean): void => changeState({
        ...state,
        isAuth,
    });
    export const state$ = stream$;
}
