<template>
<!-- 未登录状态组件 背景图部分-->
          <div class="logo1">
           <div class="logo2">
             <div class="w-heard">
                 <router-link to='/collect'>返回</router-link>
             </div>
             <div class="logo-text">
                    <img src="../img/logohost.png" alt="">
                    <p>请登录</p>
            </div>           
              <div class="logo-footer">
                    <p>我的收藏</p>
                    <span>我的评论</span>
              </div>
           </div>
        </div>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
 .logo1 {
    background-image: url(../img/images/logo1_01.png);
    background-repeat: no-repeat;
    height: 45%;
    background-size: 100% 100%;
    .logo2 {
      background-image: url(../img/logo2.png);
      background-repeat: no-repeat;
      height: 100%;
      background-size: 100% auto;
      background-position-y: 200px;
      .w-heard {
        height: 18px;
        padding-top: 15px;
        padding-left: 10px;
        & span {
          color: #ffffff;
        }
      }
      .logo-text {
        height: 100px;
        text-align: center;
        width: 75px;
        margin: 0 auto;
        & img {
          width: 75px;
          height: 75px;
        }
        & p {
          color: #ffffff;
          padding-top: 5px;
        }
      }
      .logo-footer {
        height: 77px;
        line-height: 77px;
        margin-top: 90px;
        & p {
          height: 50px;
          margin-top: 14px;
          float: left;
          line-height: 50px;
          width: 49%;
          text-align: center;
          border-right: 2px dashed #000000;
        }
        & span {
          float: right;
          width: 49%;
          text-align: center;
        }
      }
    }
  }
</style>
