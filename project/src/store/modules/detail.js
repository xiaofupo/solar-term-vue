/* 引入api和封装的请求方法 */
import api from "../../util/api";
import {get} from "../../util/request";

//状态
const state = {
    picGroupData:[],//图组的数据
    commentData:[],//评论页面的数据
    userInfo:null,
}

//修改状态方法
const mutations = {
    //设置图组的数据
    setPicGroupData(state,param){
        state.picGroupData = param;
    },
    //设置评论页面的数据
    setCommentData(state,param){
        state.commentData = param;
    },
    //设置用户信息数据
    setUserInfoData(state,param){
        state.userInfo = param;
    }
}

//异步请求数据
const actions = {
    //请求图组数据
    async requestPicDataAction(context,param){
        //请求数据
        let res = await get(api.GET_PIC_GROUP_API,{pageId:1});
        
        context.commit("setPicGroupData",res.data)
    },
    //请求评论页面的数据
    async requestCommentDataAction(context,param){
        let res = await get(api.GET_COMMENT_API,{pageId:1});
        console.log(res.data)
        context.commit("setCommentData",res.data)
    },
    //请求用户信息
    async requestUserInfoAction(context,param){
        let res = await get(api.GET_USER_INFO_API);
        context.commit("setUserInfoData",res.data);
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
