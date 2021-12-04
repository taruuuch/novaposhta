import axios, { AxiosInstance } from 'axios'
import queryString from 'query-string'

import { IApiClient, TRequest, TMethod } from './ApiClient.types'

export class ApiClient implements IApiClient {
    private readonly apiKey: string
    private axiosInstance: AxiosInstance

    constructor(apiKey: string) {
        this.apiKey = apiKey
        this.axiosInstance = axios.create({
            baseURL : 'https://api.novaposhta.ua/v2.0/json/',
            headers : {
                'Content-Type' : 'application/json'
            }
        })
    }

    async request({ method = 'get', endpoint, headers = {}, params = [], data = {} }: TRequest) {
        const query = `?${queryString.stringify(params)}`
        const url = `${endpoint}${query}`

        if (method === 'get') {
            return this.axiosInstance.get(url, { headers })
        }

        return this.axiosInstance[method](url, {
            headers,
            data : {
                ...data,
                apiKey: this.apiKey
            }
        })
    }

    get(endpoint: string, params: Array<string>, headers: string) {
        return this.request({ endpoint, params, method: 'get', headers })
    }

    post({ endpoint, params, data = {}, headers = undefined }: TMethod) {
        return this.request({ endpoint, params, method: 'post', data, headers })
    }

    patch({ endpoint, params, data = {}, headers = undefined }: TMethod) {
        return this.request({ endpoint, params, method: 'patch', data, headers })
    }

    put(endpoint: string, params: Array<string>, data = {}, headers: Object | undefined) {
        return this.request({ endpoint, params, method: 'put', data, headers })
    }

    delete(endpoint: string, params: Array<string>, data = {}, headers: Object | undefined) {
        return this.request({ endpoint, params, method: 'delete', data, headers })
    }
}
