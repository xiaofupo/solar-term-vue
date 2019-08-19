import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
<<<<<<< HEAD
import home from './modules/home'
export default new Vuex.Store({
  state: {
    // homeindex:0,
  },
  mutations: {
=======

//引入模块
import detail from "./modules/detail";//详情页的仓库
import api from "../util/api"
import { get } from '../util/request';

>>>>>>> branch/jiangqin

//全局状态
const state = {
    pageData:null,
}

const mutations = {
  setPageData(state,param){
    state.pageData = param;
  }
}

<<<<<<< HEAD
  },
  modules:{
    home,
=======
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
    detail,
>>>>>>> branch/jiangqin
  }
})
