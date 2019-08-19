<template>
  <div class="collect-item">
    <ul class="collet-list">
      <li
        class="collect-detail"
        style="background: url(../images/Gradient.png)no-repeat 100% 100%;"
      >
        <div class="detail-item">
          <div class="calendar">
            <span class="month">07</span>
            <span class="day">12</span>
          </div>
          <div class="detail-title">
            <p>我还有改变的可能...</p>
            <p class="name">北野武</p>
          </div>
          <div class="detail-img">
            <img src='' alt='icon' />
          </div>
        </div>
      </li>
    </ul>
    <div class="detail-more">
      <div class="collect-content-pic">
        <img src alt="Login" />
      </div>
      <div class="collect-content-title">没有更多了</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "collect-detail"
};
</script>

<style lang='scss'scoped>
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
    }
    .collect-content-title {
      width: 92px;
      font-size: 18px;
      color: #666666;
    }
  }
}
</style>