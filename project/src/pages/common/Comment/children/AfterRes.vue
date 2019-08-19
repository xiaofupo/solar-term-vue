<template>
    <div class="res-result page">
        <app-header title="用户评论"></app-header>
        <app-scroll class="content">
            <div class="hot-comment">
                <h3>最新评论</h3>
                <div class="comment-item res-item border-bottom">
                    <div class="user-info">
                        <img :src="userInfo.avater" alt="">
                    </div>
                    <div class="comment-content">
                        <p class="user-name">{{userInfo.uname}}</p>
                        <div class="user-content">
                            {{txt}}
                            <div class="target-ele target">
                                <div class="user-info">
                                    <img :src="targetInfo.avater" alt="">
                                </div>
                                <div class="target-content">
                                    <p class="user-name">{{targetInfo.uname}}</p>
                                    <div class="user-comment ell">
                                        {{targetInfo.content}}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="time">
                            <span>{{date}}</span>
                            <span class="del">删除</span>
                        </div>
                    </div>
                </div>
                <comment-item v-for=" item in data " :key="item.id" :data="item"></comment-item>
            </div>
        </app-scroll>
    </div>
</template>

<script>
import Header from "../../../../components/Header";
import Scroll from "../../../../components/Scroll";
import Item from "./Item";
export default {
    name:"after-res",
    props:{
        targetInfo:Object,
        data:Array,
        txt:String,
        userInfo:Object,
        date:String
    },
    components:{
        [Header.name]:Header,
        [Item.name]:Item,
        [Scroll.name]:Scroll
    }
}
</script>

<style lang="scss">
.res-result.page{
    z-index: 50;
    background: #fff;
    .target-ele{
        display: flex;
        background: #E4E4E4;
        border-radius: 5px;
        padding: 10px;
        margin: 5px 0 0;
        width: 100%;
        box-sizing: border-box;
        .user-info{
            width: 24px;
            img{
                width: 100%;
                border-radius: 50%;
            }
        }
        .target-content{
            flex: 1;
            padding-left: 10px;
            .user-name{
                line-height: 24px;
            }
            .user-comment{
                width: 90%;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                margin-top: 20px;
            }
        }
    }
    .time{
        margin-top: 10px;
        .del{
            float: right;
        }
    }
}
</style>
