<template>
  <div>
    <Loading v-if="flag" />
    <div id="Login" style="background: url(../images/login.png)no-repeat 100% 100%;" v-if="!flag">
      <div class="login-image" @click="handleBack()">
        <i class="iconfont icon-back"></i>
      </div>
      <h1 class="login-title">验证码登录</h1>
      <div class="login-phone">
        <div class="phone-item">
          <div class="item-center border-bottom">
            <label class="phone-label">手机号</label>
            <input type="tel" class="phone" v-model="loginForm.tel" />
          </div>
          <button class="btn btn-submit" @click="ClickSubmit()">发送验证码</button>
          <button class="close_tel2" v-show="!show">重新获取({{count}}s)</button>
        </div>

        <div class="phone-code border-bottom">
          <label class="phone-label">验证码</label>
          <input type="number" class="tel" v-model="loginForm.msg" />
        </div>
        <button class="phone-submit" @click="submitClick()">登录</button>
        <div class="login-deal">
          <i
            @click="handleAction()"
            :class="loginForm.check?'iconfont icon-circle':'iconfont icon-circle1'"
          ></i>
          <span class="deal-text">
            已完成阅读并同意
            <a href="#">《用户协议》</a>
          </span>
        </div>
        <div class="login-switch">或使用快速登录</div>
        <div class="login-scan">
          <span>
            <i class="iconfont icon-qq"></i>
          </span>
          <span>
            <i class="iconfont icon-weixin"></i>
          </span>
          <span>
            <i class="iconfont icon-weibo"></i>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations,mapActions } from "vuex";
export default {
  name: "login",
  data() {
    return {
      count: "",
      show: true,
      loginForm: {
        tel: "",
        seat: "",
        check: false,
        msg: ""
      }
    };
  },
  methods: {
    handleBack() {
      this.$router.back();
    },
    handleAction() {
      this.loginForm.check = true;
    },
    //基础判断手机验证状态
    ClickSubmit() {
      const TIME_COUNT = 30;
      var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/; // 验证是不是以13,15,18,17开头的数字
      if (this.loginForm.tel === "") {
        return alert("手机号不能为空！");
      } else if (this.loginForm.tel.length !== 11) {
        return alert("请输入11位的手机号码！");
      } else if (!myreg.test(this.loginForm.tel)) {
        return alert("请输入有效的手机号码！");
      } else {
        this.$store.commit("login/getloginTip");
      }
      if (!this.timer) {
        this.count = TIME_COUNT;
        this.show = false;
        this.timer = setInterval(() => {
          if (this.count > 0 && this.count <= TIME_COUNT) {
            this.count--;
          } else {
            this.show = true;
            clearInterval(this.timer);
            this.timer = null;
          }
        }, 1000);
      }
    },
    submitClick() {
      var num = /^\d{6}$/; // 验证是否6位数字
      if (this.loginForm.tel === "") {
        return alert("手机号不能为空！");
      } else if (this.loginForm.msg === "") {
        alert("请填写验证码！");
      } else if (!num.test(this.loginForm.msg)) {
        alert("请填写正确的验证码！");
      } else if (this.loginForm.check === false) {
        alert("请确认勾选《用户协议》");
      } else {
        this.$router.push("/private");
      }
    },
    ...mapActions({
      getloginTip:'login/getloginTip'
    }),
    getlogintip() {
      this.$store.dispatch("login/getloginTip");
    }
  },
  //得到数据相应的数据
  computed: {
    ...mapState({
    loginTip:state=>state.login.loginTip,
    flag:state=>state.login.flag
    })
  },
  created() {
    this.getlogintip();
  }
  //监听手机号码 触发验证码发送到手机上
};
</script>

<style lang="scss" scoped>
#Login {
  width: 100%;
  height: 100%;
  position: absolute;
  overflow: hidden;
  .login-image {
    width: 16px;
    height: 18px;
    position: absolute;
    top: 33px;
    left: 21px;
    .icon-back {
      display: block;
      color: #fff;
    }
  }
  .login-title {
    position: absolute;
    top: 109px;
    left: 31px;
    font-size: 23.5px;
    color: #fff;
  }
  .login-phone {
    padding: 50px 28px;
    margin-top: 173px;
    text-align: left;
    display: flex;
    flex-direction: column;
    position: relative;
    color: #666;
    .phone-label {
      font-size: 16px;
      margin-right: 6px;
    }
    input {
      border: 0;
      background: transparent;
    }
    .phone-item {
      display: flex;
      justify-content: flex-start;
      padding: 10px 0;
      line-height: 32px;
      font-size: 16px;
      .close_tel2 {
        font-size: 12px;
        width: 93px;
        line-height: 32px;
        border-radius: 5px;
        background-color: rgb(211, 211, 211);
        color: white;
        position: absolute;
        right: 8px;
        top: 60px;
        outline: none;
        border: 0;
        font-weight: 400;
        cursor: pointer;
      }
      .item-center {
        width: 244px;
        .phone {
          width: 190px;
          line-height: 24px;
          font-size: 14px;
        }
      }
      .btn-submit {
        color: #999;
        border: 1px solid #999;
        box-sizing: border-box;
        background: transparent;
        position: absolute;
        right: 8px;
        top: 60px;
        width: 93px;
        font-size: 11px;
        line-height: 30px;
        border-radius: 5px;
      }
    }
    .phone-code {
      line-height: 32px;
      .tel {
        line-height: 24px;
        font-size: 14px;
      }
    }
    .phone-submit {
      width: 100%;
      height: 46px;
      background: #ff856f;
      margin-top: 57px;
      font-size: 16px;
      color: #fff;
      line-height: 46px;
      border-radius: 6px;
      border: none;
    }
    .login-deal {
      text-align: center;
      margin-top: 43px;
      color: #b9b9b9;
      position: relative;
      .iconfont {
        font-size: 11px;
        &.icon-circle {
          color: #ff9a88;
        }
      }
      .deal-text {
        font-size: 11px;
        a {
          color: #b9b9b9;
          text-decoration: underline;
        }
      }
    }
    .login-switch {
      text-align: center;
      color: #878787;
      margin-top: 60px;
      font-size: 13px;
    }
    .login-scan {
      padding: 0 70px;
      line-height: 30px;
      margin-top: 46px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      span {
        display: block;
        line-height: 30px;
        .iconfont {
          font-size: 30px;
          color: #878787;
        }
      }
    }
  }
}
</style>
