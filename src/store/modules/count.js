const state = () => ({
  count: 0
})

// getters
const getters = {}

// action
const actions = {
  incrementCount({ commit }) {
    commit('increment')
  }
}
// mutation
const mutations = {
  increment(state) {
    state.count
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}

