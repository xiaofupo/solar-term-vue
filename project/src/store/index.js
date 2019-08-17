import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//引入模块
import detail from "./modules/detail";//详情页的仓库


//全局状态
const state = {

}

export default new Vuex.Store({
  state,
  modules:{
    detail,
  }
})
