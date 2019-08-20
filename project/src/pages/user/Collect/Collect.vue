<template>
  <div>
    <Loading v-if="loginOpen" />
    <div
      id="collect"
      style="background: url(../images/collect.png)no-repeat 100% 100%;"
      v-if="!loginOpen"
    >
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
        <div class="collect-image" @click="handleLogin()" style="background:#999;">
          <img src="/images/pic.png" alt="pic" />
        </div>
      </div>
      <div class="collect-content" >
        <div class="collect-content-pic">
          <img src='/images/img_no collect@2x.png' alt="Login" />
        </div>
        <div class="collect-content-title">暂无收藏</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mutations } from "vuex";
export default {
  name: "collect",
  methods: {
    handleLogin() {
        this.$router.push("/login");
    },
    ...mapActions({
      getloginTip: "login/getloginTip"
    }),
    getlogintip() {
      this.$store.dispatch("login/getloginTip");
    },
  },
  computed: {
    ...mapState({
      loginOpen: state => state.login.loginOpen,
      loginTip: state => state.login.loginTip,
      flag: state => state.login.flag,
      collect:state=>state.login.collect
    })
  },
  created() {
    this.getlogintip();
  }
  //得到登陆数据判断收藏用户状态
};
</script>

<style lang="scss" scoped>
#collect {
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  position: absolute;
  .collect-icon {
    width: 100%;
    margin-top: 17px;
    line-height: 34px;
    height: 34px;
    box-sizing: border-box;
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
    box-sizing: border-box;
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
      img{
        width: 100%;
        height: 100%;
      }
    }
    .collect-content-title {
      width: 74px;
      font-size: 18px;
      color: #666666;
    }
  }
}
</style>
