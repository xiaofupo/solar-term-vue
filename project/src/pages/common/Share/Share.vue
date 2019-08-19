<template>
    <div class="page share" :style="{background:'url('+imgUrl+')'}">
        <div class="share-cover">
            <app-header></app-header>
            <div class="imgCon">
                <div class="img">
                    <img :src="imgUrl"  alt="">
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
    },
    computed: {
        imgUrl(){
            return this.$route.params.imgUrl
        }
    },
}
</script>

<style lang="scss">
.share{
    width: 100%;
    background-size: 100% 100%;
    .share-cover{
        width: 100%;
        height: 100%;
        filter: blur(0.8);
        .imgCon{
            position: absolute;
            top: 44px;
            bottom: 60px;
            width: 100%;
            .img{
                width: 100%;
                height: 100%;
                position: absolute;
                top: 5px;
                z-index:20;
                img{
                    border: 1px solid #000;
                    width: 65%;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%,-50%);
                }
            }
        }
    }
   
}
</style>
