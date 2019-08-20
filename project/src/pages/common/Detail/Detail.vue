<template>
    <div class="page detail">
       <!-- <div class="detail-header"> -->
          <app-header></app-header>
       <!-- </div> -->
       <div class="content">
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
       
    </div>
</template>

<script>
import Header from "../../../components/Header";
export default {
    components:{
        [Header.name]:Header
    }
}
</script>


<style lang="scss" scoped>
.detail{
    background: #fff;
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
        width:90%;
        height:228px;
        border-radius:8px;
        margin: 0 auto;
        background: #333;
    }
}
</style>
