/* 引入api和封装的请求方法 */
import api from "../../util/api";
import {get} from "../../util/request";

//状态
const state = {
    picGroupData:[]//图组的数据
}

//修改状态方法
const mutations = {
    //设置图组的数据
    setPicGroupData(state,param){
        state.picGroupData = param;
    }
}

//异步请求数据
const actions = {
    //请求图组数据
    async requestPicDataAction(context,param){
        //请求数据
        let res = await get(api.GET_PIC_GROUP_API,{pageId:1});
         console.log(res.data);
        context.commit("setPicGroupData",res.data)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
