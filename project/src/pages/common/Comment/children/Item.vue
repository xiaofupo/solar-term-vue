<template>
    <div class="comment-item border-bottom" ref="item">
        <div class="user-info">
            <img :src="data.avater" alt="">
        </div>
        <div class="comment-content">
            <p class="user-name">{{data.uname}}</p>
            <div class="user-content">
                {{data.content}}
            </div>
            <div class="time">
                <span>{{data.date}} </span>
                <span>{{data.time}}</span>
            </div>
        </div>
        
        <div class="handle">
            <p><span class="eyes"></span><span class="dianzan"></span></p>
            <span class="response" @click="handleResponse">回复</span>
        </div>
    </div>
</template>

<script>
export default {
    name:"comment-item",
    props:{
        data:Object,
        value:Object
    },
    methods: {
        handleResponse(ev){
            let info = {
                avater:this.data.avater,
                uname:this.data.uname,
                content:this.data.content
            };
            this.$emit("input",info)//获取点击的DOM对象
        }
    },
}
</script>

<style lang="scss">
.border-bottom::before, .border-topbottom::after, .border-rightbottom::after, .border-bottomleft::before{
    border-bottom: 1px solid #999;
}
.comment-item{
    width: 90%;
    min-height: 120px;
    margin: 0 auto;
    padding: 10px;
    box-sizing: border-box;
    display: flex;
    .user-info{
        width: 30px;
        img{
            width: 100%;
            border-radius: 50%;
        }
    }
    .comment-content{
        flex: 1;
        padding-left: 10px;
        padding-right: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .user-name{
            line-height: 30px;
        }
        .user-content{
            font-size: 12px;
            display: -webkit-box;
             -webkit-box-orient: vertical;
             -webkit-line-clamp: 2;
             overflow: hidden;
        }
        .time{
            color: #999;
            font-size: 10px;
        }
    }
    .handle{
        width: 60px;
        margin-right: 10px;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        p{
            span{
                display: inline-block;
                width: 20px;
                height: 20px;
                &.eyes{
                    background: url(../../../../assets/pingbi-icon.png);
                    background-size: 100% auto;
                    margin-right: 10px;
                }
                &.dianzan{
                    background: url(../../../../assets/dianzan-icon.png);
                    background-size: 100% auto;
                }
            }
        }
        
        .response{
            margin-top: 20px;
            color: #666;
            font-size: 12px;
            text-align: right;
            padding-right: 12px;
        }
    }
}
</style>
