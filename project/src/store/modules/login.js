import api  from 'util/api'
import { get } from 'util/request'


const state = {
    loginTip: '发送验证码'
}
const mutations = {
    handleLoginTip(state, params) {
        state.loginTip = params
    }
}
const actions = {
    async getloginTip({ commit, phone }) {
        let data = await get(api.GET_LOGINTIP, { phone });
        console.log(data)
        // 设置显示的信息
        commit('handleLoginTip',data)
    }
}

export default {
    state,
    mutations,
    actions,
    namespaced: true
}