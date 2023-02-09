import Vue from 'vue'
import Vuex from 'vuex'
import count from './modules/count'
import menu from './modules/menu'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    count,
    menu
  }
})
