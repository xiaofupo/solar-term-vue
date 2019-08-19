<template>
    <div class="app-tab" >
        <ul class="tab-list" v-if="info">
            <li class="tab-dianzan tab-item">
                <span class="iconfont " :class="select1===1?'icon-thumbup-fill-copy':'icon-dianzan1'" @click="handleClick1"></span>
                <span class="num">{{info.dianzan}}</span>
            </li>
            <li class="tab-collect tab-item">
                <span class="iconfont"  :class="select2===1?'icon-danseshixintubiao-':'icon-iconfront-'" @click="handleClick2"></span>
                <span class="num">{{info.collect}}</span>
            </li>
            <li class="tab-comment tab-item" @click="goComment">
                <span class="iconfont icon-pinglun"></span>
                <span class="num">{{info.comment}}</span>
            </li>
            <li class="tab-share tab-item">
                <span class="iconfont icon-fenxiang" @click="shareImg"></span>
            </li>
        </ul>
        <div class="tab-avater" v-if="info">
            <router-link to="/collect">
                <img :src="info.avater" alt="">
            </router-link>
        </div>
    </div>
</template>

<script>
import {mapState} from "vuex";
export default {
    name:"app-tab",
    props:{
        pageId:{
            type:Number,
            default:1
        }
    },
    data() {
        return {
            select1:-1,
            select2:-1,
            flag1:true,
            flag2:true
        }
    },
    methods: {
        handleClick1(){
            if(this.flag1){
                this.select1 = 1;
                this.info.dianzan++;
                this.flag1 = false
            }else{
                this.select1 = -1;
                this.info.dianzan--;
                this.flag1 = true;
            }
        },
        handleClick2(){
            if(this.flag2){
                this.select2 = 1;
                this.info.collect ++;
                this.flag2 = false
            }else{
                this.select2 = -1;
                this.info.collect--;
                this.flag2 = true;
            }
        },
        shareImg(){
            // console.log(this.$parent.$parent.shareImgAction);
             this.$parent.$parent.shareImgAction();
        },
        goComment(){
            this.$router.push({path:"/comment/"+this.pageId})
        }
    },
    computed: {
        ...mapState({
            info:state=>state.pageData
        })
    },
    created() {
        this.$store.dispatch("requestGetPageDataAction");
    },
}
</script>

<style lang="scss">
    .app-tab{
        width: 100%;
        height: 60px;
        line-height: 60px;
        background: transparent;
        position: absolute;
        bottom: 0;
        left: 0;
        display: flex;
        justify-content: space-around;
        .tab-list{
            width: 70%;
            display: flex;
            align-items: center;
            .tab-item{
                flex: 1;
                text-align: center;
                .iconfont{
                    vertical-align: middle;
                    font-size: 22px;
                    margin-right: 3px;
                    &.icon-thumbup-fill-copy{
                        color: #fff;
                    }
                    &.icon-danseshixintubiao-{
                        color: #fff;
                    }
                }
                .num{
                    font-size: 10px;
                    line-height: 15px;
                }
            }
        }
        .tab-avater{
            width: 40px;
            height: 40px;
            padding-top: 5px;
            img{
                width: 100%;
                border-radius: 50%;
            }
        }
        
    }
</style>
