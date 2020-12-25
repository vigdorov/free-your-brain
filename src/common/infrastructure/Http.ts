import axios, {AxiosRequestConfig, AxiosResponse} from 'axios';

type RequestConfig<Q> = Omit<AxiosRequestConfig, 'params'> & {
    params: Q;
};

export const http = {
    get: <Query, Response>(
        url: string,
        config: RequestConfig<Query>
    ): Promise<AxiosResponse<Response>> => {
        return axios.get<Response>(url, config);
    },
    delete: <Query, Response>(
        url: string,
        config: RequestConfig<Query>
    ): Promise<AxiosResponse<Response>> => {
        return axios.delete<Response>(url, config);
    },
    head: <Query, Response>(
        url: string,
        config: RequestConfig<Query>
    ): Promise<AxiosResponse<Response>> => {
        return axios.head<Response>(url, config);
    },
    options: <Query, Response>(
        url: string,
        config: RequestConfig<Query>
    ): Promise<AxiosResponse<Response>> => {
        return axios.options<Response>(url, config);
    },
    post: <Query, Body, Response>(
        url: string,
        body: Body,
        config: RequestConfig<Query>
    ): Promise<AxiosResponse<Response>> => {
        return axios.post<Response>(url, body, config);
    },
    put: <Query, Body, Response>(
        url: string,
        body: Body,
        config: RequestConfig<Query>
    ): Promise<AxiosResponse<Response>> => {
        return axios.post<Response>(url, body, config);
    },
    patch: <Query, Body, Response>(
        url: string,
        body: Body,
        config: RequestConfig<Query>
    ): Promise<AxiosResponse<Response>> => {
        return axios.post<Response>(url, body, config);
    },
};
