const baseURL = 'http://localhost:3000'

import axios from "axios"

export default {
    async getProviders() {
        const response = await axios.get(`${baseURL}/providers`);
        if (response.status === 200) {
            return response.data;
        } else {
            return []
        }
    }
}