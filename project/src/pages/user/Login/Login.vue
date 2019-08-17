<template>
  <div id="Login" style="background: url(../images/login.png)no-repeat 100% 100%;">
    <div class="login-image">
      <i class="iconfont icon-back"></i>
    </div>
    <h1 class="login-title">验证码登录</h1>
    <div class="login-phone">
      <div class="phone-item">
        <div class="item-center border-bottom">
          <label class="phone-label">手机号</label>
          <input type="tel" class="phone" @input="search($event)" @keyup.enter="search" />
        </div>
        <button class="btn btn-submit" @click="ClickSubmit()">发送验证码</button>
      </div>

      <div class="phone-code border-bottom">
        <label class="phone-label">验证码</label>
        <input type="tel" class="tel" />
      </div>
      <button class="phone-submit">登录</button>
      <div class="login-deal">
        <i
          @click="handleAction()"
          :class="iconIndex?'iconfont icon-circle':'iconfont icon-circle1'"
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
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: "login",
  data() {
    return {
      iconIndex: false,
      value: 17695772185
    };
  },
  methods: {
    handleAction() {
      this.iconIndex = true;
    },
    ClickSubmit() {
      console.log('发送验证码')
    },
    search(event) {
      // console.log(event)
      if (!/^1[3|4|5|8][0-9]\d{4,8}$/.test(event)) {
        console.log("格式不正确!", 1.5);
      } else {
        // 正确就执行action事件请求code
        console.log("正在执行");
      }
    }
  },
  computed: {
    ...mapState({
      loginTip:state=>state.login.loginTip
    })
    
  }
};
</script>

<style lang="scss" scoped>
#Login {
  width: 100%;
  height: 100%;
  position: relative;
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
      .item-center {
        width: 249px;
        .phone {
          width: 190px;
          line-height: 24px;
          font-size: 14px;
        }
      }
      .btn-submit {
        color: #999;
        border: 1px solid #999;
        background: transparent;
        position: absolute;
        right: 16px;
        top: 60px;
        width: 76px;
        font-size: 11px;
        line-height: 32px;
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
