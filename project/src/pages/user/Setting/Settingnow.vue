<template>
    <div class="page" id="setting">
      <!-- 未登录状态 -->
      <div v-if="!(isLogin)">
        <Seeting-head></Seeting-head>
        <Seetingnav></Seetingnav>
      </div>
      <div v-else>
        <SeetingHeadStart></SeetingHeadStart>
        <SeetingnavStart></SeetingnavStart>
      </div>
      <!-- <div class="nav-herad">
       
            <p>
                推送通知
            </p>
   
           <div>
                    <van-switch
                                    v-model="checked"
                                    active-color="#ccc"
                                    inactive-color="#f44"
                                    />
           </div>
           
  
          
      </div>
          <div class="nav-two">
       
            <p>
                推送通知
            </p>
   
           <div>
                    <img src="./img/logo4.png" alt="">
           </div>
           
  
          
      </div> -->
     
    </div>
</template>

<script>
import {mapState} from "vuex";
import SeetingHead from "./Children/Seetinghead.vue";
import Seetingnav from "./Children/Settingnav.vue";
import SeetingHeadStart from "./Children/Seetingheadstart.vue";
import SeetingnavStart from "./Children/Settingnavstart.vue";


export default {
  components: {
    SeetingHead,
    Seetingnav,
    SeetingHeadStart,
    SeetingnavStart
  },
  computed: {
    ...mapState({
      isLogin:state=>state.login.isLogin
    })
  },

};
</script>

<style lang="scss" scoped>
#setting {
  width: 100%;
  height: 100%;
  position: absolute;
  background: #cccccc;
  top: 0;
  left: 0;
  z-index: 10;
//   .nav-herad {
//     height: 65px;
//     background: #ffffff;
//     margin-top: 4px;
//     line-height: 65px;
//     //    display: inline-block;
//     & p {
//       font-size: 14px;
//       padding-left: 20px;
//       display: inline-block;
//     }
//     & div {
//       float: right;
//     }
//   }
//   .nav-two {
//     height: 65px;
//     background: #ffffff;
//     border-top: 1px solid #cccccc;
//     line-height: 65px;
//     //    display: inline-block;
//     & p {
//       font-size: 14px;
//       padding-left: 20px;
//       display: inline-block;
//     }
//     & div {
//       font-size: 14px;
//       padding-right: 20px;
//       display: inline-block;
//     //   float: right;
//     margin-left: 246px;
//       & img {
//         height: 14px;
//         width: 14px;
//       }
//     }
//   }
}
</style>
