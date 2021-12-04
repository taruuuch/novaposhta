import {
    AxiosInstance,
    AxiosResponse,
    AxiosPromise
} from 'axios'

export type TRequest = {
    method: 'get' | 'post' | 'patch' | 'put' | 'delete';
    endpoint: string;
    headers: Object;
    params?: Array<string>;
    data?: Object;
}

export type TMethod = {
    endpoint: string;
    params: Array<string>;
    data?: Object;
    headers: Object | undefined;
}

export interface IApiClient {
    apiKey: string;
    axiosInstance: AxiosInstance;
    request(args: TRequest): AxiosPromise<any>;
    get(args: TMethod): Promise<AxiosResponse<any, any>>;
    post(args: TMethod): Promise<AxiosResponse<any, any>>;
    patch(args: TMethod): Promise<AxiosResponse<any, any>>;
    put(args: TMethod): Promise<AxiosResponse<any, any>>;
    delete(args: TMethod): Promise<AxiosResponse<any, any>>;
}