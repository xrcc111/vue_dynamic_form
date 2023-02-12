import { getMenu } from '@/api'
import router from '../../router'
import { GET_ROUTES, SET_ROUTES } from '../type/mutation-types'

const state = {
  dynamicRoutes: [],
  routes: []
}

const getters = {
}

const actions = {
  async _getMenu({ commit }) {
    const res = await getMenu()
    if (res.code === 200) {
      commit('GET_ROUTES', res.data)
      commit('SET_ROUTES', router)
    }
  }
}

const mutations = {
  [GET_ROUTES](state, payload) {
    state.dynamicRoutes = [...payload]
  },
  [SET_ROUTES](state, payload) {
    state.routes = state.dynamicRoutes.concat(payload)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
