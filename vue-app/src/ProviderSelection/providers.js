import providerAPI from './providerAPI'

const state = () => ({
    allProviders : [],
    selectedProvider : {_id : "62d66ba6823f4f78f17dc6e1", 'name' : "Provider 1"},
    displaySubmenu : false
})

const getters = {
    
}

const actions = {
    async apiGetAllProviders ({commit}) {
        const providers = await providerAPI.getProviders();
        commit('setAllProviders', providers);
    },

    changeProvider({commit}, provider) {
        commit('setSelectedProvider', provider)
    },

    changeDisplaySubmenu({commit}, value) {
        commit('setDisplaySubmenu', value)
    }
}

const mutations = {
    setAllProviders (state, providers) {
        state.allProviders = providers
    },

    setSelectedProvider(state, provider) {
        state.selectedProvider = provider
    },

    setDisplaySubmenu(state, value) {
        state.displaySubmenu = value
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
  }