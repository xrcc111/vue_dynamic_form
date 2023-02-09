const state = () => ({
  count: 0
})

// getters
const getters = {}

// action
const actions = {
  incrementCount({ commit }) {
    commit('increment')
  },
  decrementCount({ commit }, data) {
    commit('decrement', data)
  }
}
// mutation
const mutations = {
  increment(state) {
    state.count++
  },
  decrement(state, payload) {
    state.count -= payload
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
