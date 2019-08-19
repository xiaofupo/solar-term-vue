<template>
<!-- 未登录状态组件 下面四栏-->
<div>
      <div class="nav-herad" id="settingnav">
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
                清空缓存
            </p>
           <div>
                    <img src="../img/logo4.png" alt="">
           </div>
      </div>
          <div class="nav-three">
            <p>
                我要吐槽
            </p>
           <div>
                 <img src="../img/logo4.png" alt="">
           </div>
      </div>
    <div class="nav-two">
            <p>
                应用评分
            </p>
           <div>
                    <img src="../img/logo4.png" alt="">
           </div>
      </div>
</div>
 
  
</template>

<script>
import { Switch } from "vant";
import "vant/lib/switch/style";
import Vue from "vue";
Vue.use(Switch);
export default {
  data() {
    return {
      checked: true
    };
  }
}
</script>

<style lang="scss" scoped>

  .nav-herad {
    height: 65px;
    background: #ffffff;
    margin-top: 4px;
    line-height: 65px;
    //    display: inline-block;
    & p {
      font-size: 14px;
      padding-left: 20px;
      display: inline-block;
    }
    & div {
      float: right;
    }
  }
    .nav-three {
    height: 65px;
    background: #ffffff;
    margin-top: 4px;
    line-height: 65px;
    //    display: inline-block;
    & p {
      font-size: 14px;
      padding-left: 20px;
      display: inline-block;
    }
    & div {
      font-size: 14px;
      padding-right: 20px;
      display: inline-block;
    //   float: right;
    margin-left: 246px;
      & img {
        height: 14px;
        width: 14px;
      }
    }
  }
  .nav-two {
    height: 65px;
    background: #ffffff;
    border-top: 1px solid #cccccc;
    line-height: 65px;
    //    display: inline-block;
    & p {
      font-size: 14px;
      padding-left: 20px;
      display: inline-block;
    }
    & div {
      font-size: 14px;
      padding-right: 20px;
      display: inline-block;
    //   float: right;
    margin-left: 246px;
      & img {
        height: 14px;
        width: 14px;
      }
    }
  }
  
</style>
