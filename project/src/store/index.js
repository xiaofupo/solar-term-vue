import Vue from 'vue'
import Vuex from 'vuex'
<<<<<<< HEAD
Vue.use(Vuex)

//引入模块
import detail from "./modules/detail";//详情页的仓库
import api from "../util/api"
import { get } from '../util/request';
import home from './modules/home';


//全局状态
const state = {
    pageData:null,
}

const mutations = {
  setPageData(state,param){
    state.pageData = param;
  }
}

const actions = {
  //请求页面数据
  async requestGetPageDataAction(context,param){
    let res = await get(api.GET_PAGE_INFO_API,{pageId:param});
    context.commit("setPageData",res.data);
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules:{
    home,
    detail,
=======
import login from './modules/login'
Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    login
>>>>>>> prokerface
  }
})
