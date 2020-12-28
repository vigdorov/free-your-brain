import {RemoteData} from '@devexperts/remote-data-ts';
import {Stream} from '@most/types';

export type LiveData<A, B> = Stream<RemoteData<A, B>>;
