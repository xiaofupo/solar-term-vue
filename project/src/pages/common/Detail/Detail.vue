<template>
    <div class="page detail">
       <div class="detail-header">
          <router-link to="/home">
              <img src="./zuojt.png" alt="" srcset="">
          </router-link>
       </div>
       <div class="detail-nav">
           <p>
               今日大暑
           </p>
       </div>
       <div class="navimg">
           <div class="navimg-conter">

           </div>
       </div>
    </div>
</template>

<script>
export default {

}
</script>


<style lang="scss" scoped>
.detail-header{
    width:100%;
    img{
        width:30px;
        height:30px;
        margin:10px;
    }
}
.detail-nav{
    width:100%;
    height:70px;
    font-size:22px;
    line-height: 70px;
    text-align: center;
    font-weight: 500;
    color: #000;
}
.navimg{
    width:height;
    height:228px;
    margin:10px 0;
    .navimg-conter{
        width:338px;
        height:228px;
        border-radius:8px;
        margin: 0 auto;
        background: #333;
    }
}
</style>
