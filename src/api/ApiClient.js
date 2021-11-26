import axios from 'axios'
import queryString from 'query-string'

export class ApiClient {
    constructor(apiKey) {
        this.apiKey = apiKey
        this.axiosInstance = axios.create({
            baseURL : 'https://api.novaposhta.ua/v2.0/json/',
            headers : {
                'Content-Type' : 'application/json'
            }
        })
    }

    async request({ method = 'get', endpoint, headers = {}, params = [], data = {} }) {
        const query = `?${queryString.stringify(queryParams)}`;
        const url = `${endpoint}${query}`;

        return this.axiosInstance({
            method,
            url,
            headers,
            data : JSON.stringify({
                ...data,
                apiKey: this.apiKey
            })
        })
    }

    get(endpoint, params, headers) {
        return this.request({ endpoint, method: 'get', params, headers })
    }

    post({ endpoint, data = {}, headers = undefined }) {
        return this.request({ endpoint, method: 'post', data, headers })
    }

    patch({ endpoint, data = {}, headers = undefined }) {
        return this.request({ endpoint, method: 'patch', data, headers })
    }

    put(endpoint, data = {}, headers = undefined) {
        return this.request({ endpoint, method: 'put', data, headers })
    }

    delete(endpoint, data = {}, headers) {
        return this.request({ endpoint,  method: 'delete', data, headers })
    }
}
