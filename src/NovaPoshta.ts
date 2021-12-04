import { ApiClient } from './api/ApiClient'
import { INovaPoshta, TConstructor } from './NovaPoshta.types'

export default (() => {
    class NovaPoshta implements INovaPoshta {
        private readonly apiKey: string;
        private language: string;
        private apiClient: ApiClient;

        constructor({ apiKey, lang }: TConstructor) {
            this.apiKey = apiKey || '';
            this.language = lang || 'Ua';
            this.apiClient = new ApiClient(this.apiKey);
        }

        async getAddressesByCity(cityName: string) {
            const data: Object = { cityName };

            return this.apiClient.post({data});
        }
    }

    return NovaPoshta;
})();
