import api from '../../util/api'
import { get } from '../../util/request'


const state = {
    loginTip: [],
    getlogin:17695772185,
    loginTel:'',
    isLogin:false,
    flag:true,
    loginOpen:true ,
    collect:[]
}
const mutations = {
    handleLoginTip(state, params) {
        state.loginTip = params,
        state.flag = false,
        state.loginOpen=false,
        state.collect = params.collect
    },
    handleLoginTel(state,params){
        state.loginTel = params
    },
    changeIsLogin(state,param){
        state.isLogin = param
    }
}
const actions = {
    async getloginTip(context,param) {
        let data = await get(api.GET_LOGINTIP);
        let newData = data.data
        // 设置显示的信息
        context.commit('handleLoginTip',newData)
    }
}

export default {
    state,
    mutations,
    actions,
    namespaced: true
}