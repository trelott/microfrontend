import productsAPI from "./productsAPI"

const state = () => ({
    allProducts :[],
    providerProducts : []
})

const getters = {
    getProviderProducts (state) {
        return state.providerProducts
    }
}

const actions = {
    async updateProviderProducts ({commit, rootState}) {
        const searchInput = rootState.search.searchInput
        const provider = rootState.providers.selectedProvider
        const products = await productsAPI.getProducts(provider._id, searchInput)
        commit('setProviderProducts', products)
    },

    async updateAllProducts ({commit}) {
        const products = await productsAPI.getAllProducts()
        commit('setAllProducts', products)
    }
}

const mutations = {
    setProviderProducts (state, products) {
        state.providerProducts = products
    },

    setAllProducts (state, products) {
        state.allProducts = products
    },

    decrementItemQuantity(state, product) {
        const productToDecrement = state.product.find(item => item._id === product._id)
        productToDecrement.quantity--
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
  }