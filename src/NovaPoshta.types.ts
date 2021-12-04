import { AxiosResponse } from 'axios'
import { ApiClient } from './api/ApiClient'

export type TConstructor = {
    apiKey: string;
    lang : string;
}

export interface INovaPoshta {
    apiKey: string;
    language: string;
    apiClient: ApiClient;
    getAddressesByCity(cityName: string): Promise<AxiosResponse<any, any>>;
}