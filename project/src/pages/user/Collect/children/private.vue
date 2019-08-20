<template>
  <div id="private" style="background: #fff;" v-if="!loginOpen">
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
        <img :src="this.loginTip.url" alt="pic" />
      </div>
    </div>
    <div class="collect-item">
      <ul class="collet-list">
        <li
          class="collect-detail"
          style="background: url(../images/Gradient.png)no-repeat 100% 100%;"
          v-for="(item,index) in collect"
          :key="index"
        >
          <div class="detail-item">
            <div class="calendar">
              <span class="month">{{item.time.month}}</span>
              <span class="day">{{item.time.day}}</span>
            </div>
            <div class="detail-title">
              <p>{{item.matter}}</p>
              <p class="name">{{item.writer}}</p>
            </div>
            <div class="detail-img">
              <img :src="item.url" :alt="item.classify" />
            </div>
          </div>
        </li>
      </ul>
      <div class="detail-more">
        <div class="collect-content-pic">
          <img src="/images/img_nomore@2x.png" alt="Login" />
        </div>
        <div class="collect-content-title">没有更多了</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "private",
  created() {
    this.getlogintip();
    console.log(this.collect);
  },
  methods: {
    handleLogin() {
      this.$router.push("/datum");
    },
    ...mapActions({
      getloginTip: "login/getloginTip"
    }),
    getlogintip() {
      this.$store.dispatch("login/getloginTip");
    }
  },
  computed: {
    ...mapState({
      loginOpen: state => state.login.loginOpen,
      loginTip: state => state.login.loginTip,
      flag: state => state.login.flag,
      collect: state => state.login.collect
    })
  }
};
</script>

<style lang='scss'scoped>
#private {
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
        border-radius: 50%;
      }
    }
  }
  .collect-item {
    width: 100%;
    margin-top: 35px;
    overflow: hidden;
    .collet-list {
      display: flex;
      flex-direction: column;
      .collect-detail {
        width: 100%;
        height: 64px;
        margin-bottom: 1px;
        .detail-item {
          display: flex;
          width: 100%;
          height: 100%;
          align-items: center;
          padding: 0 38px 0 30px;
          color: #fff;
          position: relative;
          .calendar {
            width: 31px;
            height: 31px;
            position: relative;
            span {
              display: block;
              position: absolute;
              font-size: 12px;
            }
            .month {
              top: 0;
              left: 0;
            }
            .day {
              bottom: 0;
              right: 0;
            }
          }
          .calendar::before {
            content: "";
            width: 40px;
            height: 1px;
            background: #fff;
            position: absolute;
            top: 16px;
            left: -5.5px;
            transform: rotate(135deg);
          }
          .detail-title {
            margin-right: 86px;
            margin-left: 21px;
            p {
              width: 148px;
              font-size: 16px;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
            .name {
              font-size: 14px;
            }
          }
          .detail-img {
            width: 22px;
            height: 22px;
            border: 1px solid #333;
            img {
              width: 100%;
              height: 100%;
              display: block;
            }
          }
        }
      }
    }
    .detail-more {
      text-align: center;
      width: 92px;
      margin-left: 40%;
      margin-right: 40%;
      margin-top: 56px;
      .collect-content-pic {
        width: 60px;
        height: 100px;
        background: #fff;
        margin-bottom: 39px;
        margin-left: 24px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .collect-content-title {
        width: 92px;
        font-size: 18px;
        color: #666666;
      }
    }
  }
}
</style>