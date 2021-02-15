import axios from 'axios'

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

    async request({ method = 'get', url, headers = {}, data = {} }) {
        const response = await this.axiosInstance({
            method,
            url,
            headers,
            data : JSON.stringify({
                ...data,
                apiKey: this.apiKey
            })
        })

        return response;
    }
}
