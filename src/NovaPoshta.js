import ApiClient from './api/ApiClient';
import config from './config/config'

export default (() => {
    class NovaPoshta {
        constructor(options = {}) {
            this.apiKey = options.apiKey || ''
            this.language = options.responseLang || 'Ua'
            this.apiClient = new ApiClient(this.apiKey)
        }

        log(message, params = {}, type = 'info') {}

        getAddressesByCity = async (cityName) => await this.apiClient.request(this.apiKey, cityName)
    }

    NovaPoshta.version = config.version

    return NovaPoshta
})();

