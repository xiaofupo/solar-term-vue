<template>
    <div class="page comment">

        <app-header title="用户评论"></app-header>
        <app-scroll class="content" v-if="hotComment">
            <div class="hot-comment">
                <h3>热门评论</h3>
                <comment-item v-for=" item in hotComment " :key="item.id" :data="item" class="item" @input="handleShow"/>
            </div>
            <comment-item v-for=" (item,index) in comData " :key="index" :data="item"  @input="handleShow"/>
        </app-scroll>
        <div class="comment-bottom">
            <input type="text" placeholder="说说你的想法...">
        </div>


        <div class="res-detail" v-if="isShow">
            <div class="res-header">
                <div class="header-left-btn" @click="closeAction"></div>
                <div class="header-right-btn" @click="showResult">发送</div>
            </div>
            <div class="target-item">
                <div class="target-avater">
                    <img :src="targetInfo.avater" alt="">
                </div>
                <div class="target-other-info">
                    <p class="target-uname">{{targetInfo.uname}}</p>
                    <div class="target-content">
                        {{targetInfo.content}}
                    </div>
                    <div class="target-ipt">
                        <input type="text" v-model="responseTxt" :placeholder="targetStr">
                    </div>
                </div>  
            </div>
            <after-res v-if="show" :data="comData" :targetInfo="targetInfo" 
            :txt="responseTxt" :userInfo="userInfo" :date="dateStr"
            ></after-res>
        </div>
    </div>
</template>

<script>
import Header from "../../../components/Header";
import Scroll from "../../../components/Scroll";
import AfterRes from "./children/AfterRes";
import Item from "./children/Item";
import {mapState} from "vuex";
export default {
    data() {
        return {
            targetInfo:null,
            responseTxt:"",
            show:false,
            dateStr:""
        }
    },
    components:{
        [Header.name]:Header,
        [Item.name]:Item,
        [Scroll.name]:Scroll,
        [AfterRes.name]:AfterRes
    },
    methods: {
        handleShow(e){
            this.targetInfo = e;
        },
        closeAction(){
            this.targetInfo = null;
        },
        showResult(){
            console.log(this.userInfo);
            this.dateStr = this.formateDate(new Date());
            this.show = true;
        },
        formateDate(date) {  
            var y = date.getFullYear();  
            var m = date.getMonth() + 1;  
            m = m < 10 ? ('0' + m) : m;  
            var d = date.getDate();  
            d = d < 10 ? ('0' + d) : d;  
            var h = date.getHours();  
            h=h < 10 ? ('0' + h) : h;  
            var minute = date.getMinutes();  
            minute = minute < 10 ? ('0' + minute) : minute;  
            var second=date.getSeconds();  
            second=second < 10 ? ('0' + second) : second;  
            return y + '/' + m + '/' + d+' '+h+':'+minute+':'+second;  
        }
    },
    computed: {
        ...mapState({
            pageId:state=>state.detail.commentData.pageId,
            comData:state=>state.detail.commentData.comment,
            hotComment:state=>state.detail.commentData.hotCom,
            userInfo:state=>state.detail.userInfo
        }),
        //决定是否显示回复时的页面
        isShow(){
            if(this.targetInfo){
                return true
            }else{
                return false
            }
        },
        targetStr(){
            return "回复 "+this.targetInfo.uname
        }
    },
    created() {
        this.$store.dispatch("detail/requestCommentDataAction");
        this.$store.dispatch("detail/requestUserInfoAction");
    },
}
</script>

<style lang="scss">
.comment{
    .content{
        bottom: 49px;
        .hot-comment{
            padding: 10px 0;
            border-bottom: 1px dotted #eae5e5;
        }
        h3{
            font-size: 14px;
            font-weight: normal;
            color: #333;
            line-height: 30px;
            padding-left: 25px;
        }
    }

    .comment-bottom{
        background:#E4E4E4;
        position: absolute;
        bottom: 0;
        left: 0;
        height: 49px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        input{
            width: 85%;
            border: none;
            outline: none;
            border-radius: 8px;
            height: 28px;
            padding-left: 15px;
            box-sizing: border-box;
            color: #666;
        }
    }
    
    .res-detail{
        width: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        z-index: 20;
        background: #fff;
        .res-header{
            height: 44px;
            position: absolute;
            top: 0;
            left: 50%;
            width: 90%;
            transform: translateX(-50%);
            .header-left-btn{
                width: 24px;
                height: 24px;
                background: url(../../../assets/back-icon.png) -5px center;
                background-size: 100% auto;
                float: left;
                margin-top: 10px;
            }
            .header-right-btn{
                width: 42px;
                height: 22px;
                background: #4d4d4d;
                color: #fff;
                text-align: center;
                float: right;
                font-size: 10px;
                margin-top: 10px;
                line-height: 22px;
            }
        }
        .target-item{
            width: 90%;
            position: absolute;
            top: 44px;
            left: 50%;
            transform: translateX(-50%);
            padding-top: 30px;
            display: flex;
            .target-avater{
                width: 30px;
                margin-right: 2px;
                img{
                    width: 100%;
                    border-radius: 50%;
                }
            }
            .target-other-info{
                flex: 1;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                align-items: flex-start;
                .target-uname{
                    padding-left: 5px;
                    line-height: 30px;
                }
                .target-content{
                    background: #e4e4e4;
                    border-radius: 6px;
                    padding: 15px 8px;
                    color: #333;
                }
                .target-ipt{
                    width: 100%;
                    margin-top: 20px;
                    input{
                        height: 30px;
                        width: 100%;
                        border: none;
                        border-radius: 8px;
                        background: #fafafa;
                        padding-left: 10px;
                        color: #4d4d4d;
                        font-size: 10px;
                        box-sizing: border-box;
                        outline: none;
                    }
                }
            }
        }
    }

}
</style>
