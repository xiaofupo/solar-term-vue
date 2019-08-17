<template>
    <div class="page pic-group">
        <app-header title="" class="border-bottom"></app-header>
        <div class="pic-group-content">
            <div class="img" v-for=" (item,index) in imgList " :key="index">
                <img :src="item.url" alt="">
            </div>
        </div>
        <div class="bottom-title border-top">
            <h2>
                {{picData.title}}
                <span>{{imgList.length}}</span>
            </h2>
        </div>

        <div>
            <router-link to="">
                <span>应用评分</span>
                <span>箭头</span>
            </router-link>
        </div>
    </div>




</template>

<script>
import Header from "./Header";
import {mapState,mapMutations} from "vuex";
export default {
    components:{
        [Header.name]:Header
    },
    computed: {
        ...mapState({
            picData:state=>state.detail.picGroupData
        }),
        imgList(){
            return this.picData.img
        }

    },
    created() {
        this.$store.dispatch("detail/requestPicDataAction");
    },
}
</script>

<style lang="scss" scoped>
.pic-group{
    background: #fff;

    .pic-group-content{
        width: 100%;
        position: absolute;
        top:44px;
        bottom: 49px;
        .img{
            width: 85%;
            height: 85%;
            position: absolute;
            background: transparent;
            z-index: 20;
            @for $i from 1 through 5{
                 &:nth-of-type(#{$i}){
                    right: 10px * $i;
                    top: 15px * $i;
                    z-index: 20 - (2*$i);
                }
            }
            img{
                width: 90%;
                margin: 0 auto;
                height: 100%;
                border-radius: 10px;
                box-shadow: 0 0 20px #e4e0e0; 
                position: relative;
                
            }
        }
    }
    .bottom-title{
        width: 100%;
        height: 49px;
        position: absolute;
        bottom: 0;
        left: 0;
        line-height: 49px;
        h2{
            font-family: "PingFang-SC-Bold","cursive","fantasy","monospace";
            font-weight: bold;
            font-size: 16px;
            color: #666;
            padding-left: 20px;
            span{
                position: absolute;
                top: 0;
                right: 20px;
                font-weight: normal;
                font-size: 14px;
            }
        }
    }
}
</style>
