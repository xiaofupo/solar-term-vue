<template>
<!-- 应用评分页面 -->
       <div id="garde">
             <div class="w-heard">
                 <router-link to='/collect/settingstart'>返回</router-link>
             </div>
             <div class="w-title">
               <h1>应用评分</h1>
             </div>
                <div class="input-one">
                  <p>标题</p>
                  <input/>
                </div>
            <div class="input-tow">
                  <p>评论&nbsp;&nbsp;(选填)</p>
                  <textarea/>
                </div>
            <div class="footer">
                    <div class="footer-map">
                        <van-rate
                                    v-model="value"
                                    allow-half
                                    void-icon="star"
                                    void-color="#eee"
                                    :size="35"
                                    gutter='4px'
                                  />
                    </div>
                  <p>轻点星型来评分</p>
            </div>
            <!-- <van-rate
              v-model="value"
              allow-half
              void-icon="star"
              void-color="#eee"
              :size="35"
            /> -->
       </div>
</template>

<script>
import Vue from 'vue';
import { Rate } from 'vant';

Vue.use(Rate);
export default {
  data() {
    return {
      value: 2.5,
    };
  }
}
</script>

<style lang='scss' scoped>
#garde {
  width: 100%;
  height: 100%;
  position: absolute;
  background:linear-gradient(#ffffff,#e6acb8); /* 标准的语法 */;
  top: 0;
  left: 0;
  z-index: 10;
         .w-heard {
      height: 18px;
      padding-top: 15px;
      padding-left: 10px;
      & span {
        color: #cccccc;
      }
    }
       .w-title{
              height: 30px;
            margin-left: 20px;
            margin-top: 50px;
              & h1{
                 font-size: 24px;
                 font-weight: normal;
              }
       }
    .input-one{
          height: 50px;
          margin-left: 20px;
          margin-top: 50px;
            & p{
               color: #cccccc;
               padding-bottom: 10px;
            }
            & input{
                  height: 38px;
                  width: 315px;
                  border: 1px solid #cccccc;
                  background: #ffffff;
            }
    }
      .input-tow{
          height: 150px;
          margin-left: 20px;
          margin-top: 50px;
            & p{
               color: #cccccc;
               padding-bottom: 10px;
            }
            & textarea{
                  height: 101px;
                  width: 315px;
                  border: 1px solid #cccccc;
                  background: #ffffff;
            }
    }
      .footer{
         height: 100px;
          margin-left: 20px;
          margin-top: 50px;
          // background: #000;
          text-align: center;
            .footer-map{
                  height: 47px;
          margin-left: 40px;
         padding: 0px 0px 0px 4px;
         width: 259px;
      
            }
      }
}
</style>
