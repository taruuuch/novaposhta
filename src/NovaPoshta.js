import ApiClient from './api/ApiClient';
import config from './config/config.json';

export default (() => {
    class NovaPoshta {
        constructor(options = {}) {
            this.apiKey = options.apiKey || '';
            this.language = options.responseLang || 'Ua';
            this.apiClient = new ApiClient(this.apiKey);
        }

        log(message, params = {}, type = 'info') {}

        async getAddressesByCity(cityName) {
            return this.apiClient.request(this.apiKey, cityName);
        }
    }

    NovaPoshta.version = config.version;

    return NovaPoshta;
})();
