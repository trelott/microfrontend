const state = () => ({
    searchInput : '',
})

const getters = {

}

const actions = {
    updateSearchInput({commit}, input) {
        commit('setSearchInput', input)
    }
}

const mutations = {
    setSearchInput(state, input) {
        state.searchInput = input
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
  }