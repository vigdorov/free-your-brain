import axios, {AxiosRequestConfig} from 'axios';

enum Method {
    Get = 'get',
    Delete = 'delete',
    Head = 'head',
    Options = 'options',
    Post = 'post',
    Put = 'put',
    Patch = 'patch',
}

type RequestConfig<Q, B> = Omit<AxiosRequestConfig, 'params' | 'data'> & {
    params?: Q;
    data?: B;
};

const requestMiddleware = async <Q, B, R>(config: RequestConfig<Q, B>): Promise<R> => {
    const axiosResponse = await axios.request<R>(config);
    // Добавить обработку ошибок
    return axiosResponse.data;
};

const request = <Q, B, R>(config: RequestConfig<Q, B>) => requestMiddleware<Q, B, R>(config);

const requestWithoutBody = (method: Method) => <Q, R>(url: string, query?: Q) => {
    return request<Q, never, R>({
        method,
        url,
        params: query,
    });
};

const requestWithBody = (method: Method) => <Q, B, R>(url: string, query?: Q, body?: B) => {
    return request<Q, B, R>({
        method,
        url,
        params: query,
        data: body,
    });
};

export const http = {
    get: requestWithoutBody(Method.Get),
    delete: requestWithoutBody(Method.Delete),
    head: requestWithoutBody(Method.Head),
    options: requestWithoutBody(Method.Options),
    post: requestWithBody(Method.Post),
    put: requestWithBody(Method.Put),
    patch: requestWithBody(Method.Patch),
};
