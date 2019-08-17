import Vue from 'vue';
import BScroll from './Scroll.vue';
import Loading from "./Loading.vue";

Vue.component("BScroll",BScroll)
Vue.component("Loading",Loading)
Vue.filter("toImg",(url,params)=>{
    if(url){
        return url.replace(/w\.h/,params);
    }
    
})