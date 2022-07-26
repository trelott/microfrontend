const baseURL = 'http://localhost:3001'

import axios from "axios"

export default {
    async getAllProducts() {
        const response = await axios.get(`${baseURL}/products`);
        if (response.status === 200) {
            return response.data;
        } else {
            return []
        }
    },

    async getProducts(providerId, searchInput) {
        //await wait(100)
        var providerProducts = []
        const products = await this.getAllProducts()
        products.forEach(product => {
            if (product._idProvider === providerId) {
                if (product.nameProduct.includes(searchInput)) {
                    providerProducts.push(product)
                }
            }
        });
        return providerProducts
    }
}