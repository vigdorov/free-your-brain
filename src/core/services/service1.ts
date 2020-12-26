import {createAdapter} from '@most/adapter';

const arr: Array<number> = [];
let inc = 0;

const [handler, stream$] = createAdapter<Array<number>>();

export const list$ = stream$;
setInterval(() => {
    arr.push(inc += 1);
    handler(arr);
}, 500);

