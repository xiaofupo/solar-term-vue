import api from '../../util/api'
import { get } from '../../util/request'


const state = {
    loginTip: [],
}
const mutations = {
    handleLoginTip(state, params) {
        state.loginTip = params
    }
}
const actions = {
    async getloginTip({commit}) {
        let data = await get(api.GET_LOGINTIP);
        let newData = data.data
        // 设置显示的信息
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