import api from '../../util/api'
import { get } from '../../util/request'


const state = {
    loginTip: [],
    getlogin:17695772185,
    loginTel:''
}
const mutations = {
    handleLoginTip(state, params) {
        state.loginTip = params
    },
    handleLoginTel(state,params){
        state.loginTel = params
    }
}
const actions = {
    async getloginTip({commit},tel) {
        let data = await get(api.GET_LOGINTIP);
        let newData = data.data.map(({name,birthday})=>({name,birthday}))
        // 设置显示的信息
        console.log(tel)
        commit('handleLoginTip',newData)
        console.log(newData)
    }
}

export default {
    state,
    mutations,
    actions,
    namespaced: true
}