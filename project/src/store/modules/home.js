import {get} from '../../util/request'
import api from '../../util/api'
export default{
  namespaced: true,
  state:{
    StateNav:"",
    HomeNav:"",
    homeindex:0,
  },
  mutations:{
    setStartnav(state,params){
      state.StateNav = params;
    },
    setHomenav(state,params){
      state.HomeNav = params;
    },
    increment(state){
      state.homeindex++
    }
  },
  actions:{
      // 请求启动页面背景图
      async requestStartnav(context){
        let data = await get(api.START_NAV_URL);
        let newData = data.data.url
        // console.log(newData);
        context.commit('setStartnav', newData);
    },
    async requestHomenav(context){
      let data = await get(api.HOME_NAV_URL);
      let newData = data.data.url
      // console.log(newData);
      context.commit('setHomenav', newData);
  },
  }
}