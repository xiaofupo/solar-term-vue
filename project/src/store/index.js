import Vue from 'vue'
import Vuex from 'vuex'
<<<<<<< HEAD

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    
=======
Vue.use(Vuex)
import home from './modules/home'
export default new Vuex.Store({
  state: {
    // homeindex:0,
>>>>>>> duqiyu
  },
  mutations: {

  },
  actions: {

<<<<<<< HEAD
=======
  },
  modules:{
    home,
>>>>>>> duqiyu
  }
})
