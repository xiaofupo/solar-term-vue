<template>
  <div>
    <div id="collect" style="background: url(../images/collect.png)no-repeat 100% 100%;">
      <div class="collect-icon">
        <div class="left">
          <i class="iconfont icon-back"></i>
        </div>
        <div class="right">
          <i class="iconfont icon-xiaoxi"></i>
          <i class="iconfont icon-shezhi1"></i>
        </div>
      </div>
      <div class="collect-title">
        <h2>我的收藏</h2>
        <div class="collect-image">
          <img src alt="pic" />
        </div>
      </div>
      <CollectDetail :loginData='loginData' v-if="loginTip"/>
      <div class="collect-content" v-if="!loginTip">
        <div class="collect-content-pic">
          <img src alt="Login" />
        </div>
        <div class="collect-content-title">暂无收藏</div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import CollectDetail from "./children/detail";
export default {
  name: "collect",
  data(){
    return{
      loginTip:false
    }
  },
  components: {
    CollectDetail
  },
  //得到登陆数据判断收藏用户状态
  
};
</script>

<style lang="scss" scoped>
#collect {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  .collect-icon {
    width: 100%;
    margin-top: 17px;
    line-height: 34px;
    height: 34px;
    position: relative;
    padding: 0 16px;
    display: flex;
    justify-content: space-between;
    .left {
      .icon-back {
        font-size: 22px;
        color: #878787;
      }
    }
    .right {
      .icon-xiaoxi {
        font-size: 22px;
        color: #878787;
        margin-right: 17px;
      }
      .icon-shezhi1 {
        font-size: 22px;
        color: #878787;
      }
    }
  }
  .collect-title {
    width: 100%;
    height: 50px;
    line-height: 50px;
    padding: 0px 28px 0 30px;
    margin-top: 31px;
    display: flex;
    justify-content: space-between;
    h2 {
      font-size: 23px;
      color: #333333;
      font-weight: inherit;
    }
    .collect-image {
      width: 50px;
      height: 50px;
      border: 1px solid #ccc;
      border-radius: 50%;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .collect-content {
    text-align: center;
    width: 74px;
    margin-left: 40%;
    margin-right: 40%;
    margin-top: 170px;
    .collect-content-pic {
      width: 74px;
      height: 63px;
      background: #fff;
      margin-bottom: 39px;
    }
    .collect-content-title {
      width: 74px;
      font-size: 18px;
      color: #666666;
    }
  }
}
</style>
