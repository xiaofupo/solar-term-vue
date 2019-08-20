import Vue from "vue";
import Loading from "./Loading"
Vue.component("Loading",Loading)
//处理vue引入图片是的路径可设置宽高。
Vue.filter("toImg",(url,params)=>{
    if(url){
        return url.replace(/w\.h/,params);
    }
    
})