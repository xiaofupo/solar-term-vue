import api from '../../util/api'
import { get } from '../../util/request'


const state = {
    loginTip: [],
    getlogin:17695772185,
    loginTel:'',
    isLogin:false
}
const mutations = {
    handleLoginTip(state, params) {
        state.loginTip = params
    },
    handleLoginTel(state,params){
        state.loginTel = params
    },
    changeIsLogin(state,param){
        state.isLogin = param
    }
}
const actions = {
    async getloginTip({commit},tel) {
        let data = await get(api.GET_LOGINTIP);
        // console.log(data);
        let {name,birthday} = data
        // 设置显示的信息
        // console.log(tel)
        commit('handleLoginTip',{name,birthday})
        // console.log(newData)
    }
}

export default {
    state,
    mutations,
    actions,
    namespaced: true
}