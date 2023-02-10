import { getMenu } from '@/api'
import { GET_ROUTES } from '../type/mutation-types'

const state = {
  menu: []
}

const getters = {
}

const actions = {
  async _getMenu({ commit }) {
    const res = await getMenu()
    if (res.code === 200) {
      commit('GET_ROUTES', res.data)
    }
  }
}

const mutations = {
  [GET_ROUTES](state, payload) {
    state.menu = [...payload]
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
