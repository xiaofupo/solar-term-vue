<template>
  <div id="datum" style="background: url(../images/datum.png)no-repeat 100% 100%;">
    <div class="collect-icon">
      <div class="left" @click="handleBack()">
        <i class="iconfont icon-back"></i>
      </div>
      <div class="right" @click="handleSubmit()">
        <i class="iconfont icon-xuanze2"></i>
      </div>
      <van-popup v-model="submit">
        <div class="reminder">
          <i class="iconfont icon-xuanze2"></i>
          <span>保存成功</span>
        </div>
      </van-popup>
    </div>
    <div class="datum-content">
      <h1>完善资料</h1>
      <div class="datum-from">
        <div class="title">
          <label class="from-label">修改头像</label>
          <div class="image">
            <img src alt="datum" />
          </div>
        </div>
        <div class="datum-name from-item">
          <label class="from-label">修改昵称</label>
          <input type="text" class="nickname" placeholder="LADYDOG" />
        </div>
        <div class="from-item">
          <label class="from-label">性别</label>
          <select class="label">
            <option value="保密">保密</option>
            <option value="男">男</option>
            <option value="女">女</option>
          </select>
        </div>
        <div class="from-item">
          <label class="from-label">生日</label>
          <div class="birthday" @click="showPopup">
            <span>{{currentDate.years}}</span>/
            <span>{{currentDate.month}}</span>/
            <span>{{currentDate.day}}</span>
          </div>
          <van-popup v-model="show">
            <van-datetime-picker
              :min-date="minDate"
              :max-date="maxDate"
              v-model="currentDate"
              type="date"
            />
          </van-popup>
        </div>
        <div class="from-item">
          <label class="from-label">电话号码</label>
          <input type="tel" class="location" placeholder="15955555555" />
        </div>
        <div class="from-item">
          <label class="from-label">所在地区</label>
          <input type="text" class="location" placeholder="广东省深圳市宝安区" />
        </div>
        <div class="from-item">
          <label class="from-label">详细地址</label>
          <input class="location" type="text" placeholder=" 请填写真实有效的地址" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "datum",
  data() {
    return {
      minDate: new Date(1980, 1, 1),
      maxDate: new Date(2020, 12, 12),
      currentDate: { years: 1999, month: 1, day: 1 },
      show: false,
      submit: false
    };
  },
  methods: {
    showPopup() {
      this.show = true;
    },
    handleSubmit() {
      this.submit = true;
    },
    handleBack() {
      this.$router.back();
    }
  }
};
</script>

<style lang='scss' scoped>
#datum {
  width: 100%;
  height: 100%;
  overflow: hidden;
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
      .icon-xuanze2 {
        font-size: 22px;
        color: #878787;
      }
    }
    .van-popup {
      width: 90px;
      top: 50%;
    }
    .reminder {
      width: 90px;
      padding: 16px;
      font-size: 14px;
      line-height: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      .icon-xuanze2 {
        font-size: 30px;
        width: 30px;
        height: 30px;
        line-height: 30px;
        color: #07c160;
      }
      span {
        margin-top: 8px;
        display: inline-block;
      }
    }
  }
  .datum-content {
    padding: 0 30px;
    width: 100%;
    h1 {
      font-size: 24px;
      color: #333333;
      text-align: left;
      line-height: 48px;
      height: 48px;
      margin: 25px 0;
    }
    .datum-from {
      height: 392px;
      background: #fff;
      box-shadow: 0px 3px 4px #888888;
      border-radius: 4px;
      padding: 2px 15px 12px 15px;
      .from-label {
        color: #666666;
        font-size: 14px;
      }
      .title {
        height: 73px;
        width: 100%;
        padding: 15px 0;
        border-bottom: 1px solid #e4e4e4;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .image {
          width: 43px;
          height: 43px;
          border: 1px solid #333333;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
      .from-item {
        width: 285px;
        height: 50px;
        line-height: 50px;
        border-bottom: 1px solid #e4e4e4;
        display: flex;
        justify-content: space-between;
        position: relative;
        .location {
          color: #333333;
          font-size: 14px;
          text-align: right;
        }
        .label {
          font-size: 14px;
          position: absolute;
          right: -15px;
          top: 5px;
          height: 38px;
        }
        .nickname {
          text-align: right;
        }
      }
      .from-item:last-of-type {
        border: none;
      }
    }
  }
}
.van-popup {
  width: 80%;
}
.van-popup--center {
  top: 77%;
}
</style>