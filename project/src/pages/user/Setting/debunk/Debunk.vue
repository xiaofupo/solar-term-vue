<template>
<!-- 我要吐槽 -->
       <div id="debunk">
             <div class="w-heard">
                 <router-link to='/collect/settingstart'>返回</router-link>
             </div>
             <div class="w-title">
               <h1>我要吐槽</h1>
             </div>
                <div class="input-one">
                  <p>请输入你的邮箱</p>
                  <input/>
                </div>
            <div class="input-tow">
                  <p>留下你宝贵的意见</p>
                  <textarea/>
                </div>
       </div>
</template>

<script>

export default {
 
}
</script>

<style lang='scss' scoped>
#debunk{
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
}
</style>