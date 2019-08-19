<template>
    <div class="page pic-group">
        <app-header title=""></app-header>
        <pic :value="imgList" @input="handleAction" v-if="imgList" :key="keyVal"/>
        <div class="bottom-title">
            <h2>
                {{picData.title}}
                <span v-if="imgList"><span>{{keyVal}}</span>/{{imgList.length}}</span>
            </h2>
        </div>
    </div>
</template>

<script>
import Header from "../../../components/Header";
import PicSwiper from "./picSwiper";
import {mapState,mapMutations} from "vuex";
export default {
    data() {
        return {
            keyVal:0
        }
    },
    components:{
        [Header.name]:Header,
        [PicSwiper.name]:PicSwiper
    },
    computed: {
        ...mapState({
            picData:state=>state.detail.picGroupData
        }),
        imgList(){
            return this.picData.img
        }
    },
    methods: {
        handleAction(){
            let ele = this.imgList.shift();
            this.imgList.push(ele);
        }
    },
    created() {
        this.$store.dispatch("detail/requestPicDataAction");
    },
    watch: {
        imgList(){
            //为了让picSwiper组件重新渲染
            if(this.keyVal===this.imgList.length){
                this.keyVal = 0;
            }
            this.keyVal ++; 
        }
    },
}
</script>

<style lang="scss" scoped>
.pic-group{
    background: #fff;
    overflow: hidden;
   
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
