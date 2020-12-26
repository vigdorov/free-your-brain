import {http} from '../infrastructure/Http';

type QueryRequest = {
    hook: string;
}

type ResponseData<T> = {
    key: string;
    value: T;
    description: string;
    service_name: string;
    author: string;
};

type RequestData<T> = Omit<ResponseData<T>, 'author'>;

type ApiConfig<T> = Omit<ResponseData<T>, 'value' | 'author'> & {
    hook: string;
};

type Api<T> = {
    request: () => Promise<ResponseData<T>>;
    update: (updateValue: T) => Promise<ResponseData<T>>;
};

const ROOT_URL = 'https://api.storage.vigdorov.ru/store';

export const makeStorageApi = <T>({key, hook, ...body}: ApiConfig<T>): Api<T> => {
    const config = {params: {hook}};
    return {
        request: async (): Promise<ResponseData<T>> => {
            const {data} = await http.get<QueryRequest, ResponseData<T>>(`${ROOT_URL}/${key}`, config);
            return data;
        },
        update: async (updateValue: T): Promise<ResponseData<T>> => {
            const {data} = await http.put<QueryRequest, RequestData<T>, ResponseData<T>>(ROOT_URL, {
                ...body,
                key,
                value: updateValue,
            }, config);
            return data;
        },
    };
};
