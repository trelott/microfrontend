import { createStore, createLogger } from 'vuex'
import cart from './Cart/cart.js'
import products from './ProductsList/products.js'
import providers from './ProviderSelection/providers.js'
import search from './SearchBar/search.js'

const debug = process.env.NODE_ENV !== 'production'

const project = {
  state: {}
}

export default createStore({
  getters: {
    
  },

  actions: {
    
  },

  mutations: {
    
  },

  modules: {
    cart,
    products,
    providers,
    search
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})