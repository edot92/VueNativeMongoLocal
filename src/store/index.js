import Vue from 'vue-native-core'
import Vuex from 'vuex'
import mongo from './module/mongo'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 1
  },
  mutations: {
    increment (state) {
      // mutate state
      state.count++
    }
  },
  actions: {
    increment (context) {
      context.commit('increment')
    }
  },
  getters: {},
  modules: {
    mongo
  }
})
export default store
