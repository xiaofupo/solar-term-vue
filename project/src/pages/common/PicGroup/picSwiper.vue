<template>
    <div class="pic-group-content">
        <div class="img-container"  
        v-for=" (item,index) in value " :key="index"
            @touchstart.stop="handleTouchstart" 
            @touchmove.stop="handleTouchmove" 
            @touchend.stop="handleTouchend"
        >
            <div class="img">
                <img :src="item.url" alt="">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"pic",
    props:{
        value:Array
    },
    data() {
        return {
            flag:false,//touchstart事件发生的标志位
            touch: {}, // 保存着起始位置x1和变化的位置x2
            elWidth:0,
            elHeight:0,
            targetPoint:{},//目标位置的坐标
        }
    },

    methods: {
        handleTouchstart(ev){
            this.flag = true;//标志touchstart是事件已经发生
            let touch = ev.changedTouches[0];
            //记录点击的位置坐标
            this.touch.startX = touch.pageX;
            this.touch.startY = touch.pageY;
            
            //点击在元素内部的偏移量
            // this.touch.offsetX = this.touch.startX - ev.target.offsetLeft;
            console.log(ev.target);
        },
        handleTouchmove(ev){
            if(this.flag){
                //touchstart事件发生了再发生move才移动图片
                let touch = ev.changedTouches[0];
                //保存移动的位置坐标
                this.touch.moveX = touch.pageX;
                this.touch.moveY = touch.pageY;
                //计算出move的位置和start位置的差值
                this.touch.diffDisX = this.touch.moveX - this.touch.startX;//横坐标
                this.touch.diffDisY = this.touch.moveY - this.touch.startY;//纵坐标


                if(ev.target.nodeName === "IMG"){
                    this.elWidth = ev.target.parentNode.parentNode.offsetWidth;
                    this.elHeight = ev.target.parentNode.parentNode.offsetWidth;
                    ev.target.parentNode.parentNode.style.left = this.touch.diffDisX + "px";
                    ev.target.parentNode.parentNode.style.top = this.touch.diffDisY + "px";
                }else if(ev.target.className==="img"){
                    this.elWidth = ev.target.parentNode.offsetWidth;
                    this.elHeight = ev.target.parentNode.offsetWidth;
                    ev.target.parentNode.style.left = this.touch.diffDisX + "px";
                    ev.target.parentNode.style.top = this.touch.diffDisY + "px";
                }else if(ev.target.className==="img-container"){
                    this.elWidth = ev.target.offsetWidth;
                    this.elHeight = ev.target.offsetWidth;
                    ev.target.style.left = this.touch.diffDisX + "px";
                    ev.target.style.top = this.touch.diffDisY + "px";
                }
            }else{
                return;
            }
        },
        handleTouchend(ev){
            //松手后将flag置为false
            this.flag = false;
            let isMove = false;
            // console.log(this.touch.diffDisX,this.touch.diffDisY);
            //计算移动的距离
            if(this.touch.diffDisX>110 && this.touch.diffDisY<-160){
                this.targetPoint.x = this.elWidth;
                this.targetPoint.y = -this.elHeight;
                isMove = true;
            }else{
                this.targetPoint.x = 0;
                this.targetPoint.y = 0;
                isMove = false;
            }
            //移动
            if(ev.target.nodeName === "IMG"){
                ev.target.parentNode.parentNode.style.left = this.targetPoint.x + "px";
                ev.target.parentNode.parentNode.style.top = this.targetPoint.y + "px";

            }else if(ev.target.className==="img"){
                ev.target.parentNode.style.left =this.targetPoint.x + "px";
                ev.target.parentNode.style.top =this.targetPoint.y + "px";

            }else if(ev.target.className==="img-container"){
                ev.target.style.left =this.targetPoint.x + "px";
                ev.target.style.top =this.targetPoint.y + "px";
            }
            //是否重新渲染组件
            if(isMove){
                let that = this;
                setTimeout(function(){
                    that.$emit('input');
                },400);
                
            }
        }
    },
}
</script>

<style lang="scss">
 .pic-group-content{
        width: 100%;
        position: absolute;
        top:44px;
        bottom: 49px;
        .img-container{
            width: 100%;
            height: 100%;
            background: transparent;
            position: absolute;
            z-index: 30;
            left: 0;
            top: 0;
            transition: all .5s;
            .img{
                width: 85%;
                height: 85%;
                position: absolute;
                background: transparent;
                img{
                    width: 90%;
                    margin: 0 auto;
                    height: 100%;
                    border-radius: 10px;
                    box-shadow: 0 0 20px #d2cfcf; 
                    position: relative;
                    
                }
            }
            @for $i from 1 through 5{
                &:nth-of-type(#{$i}){
                     z-index: 30 - (4*$i);
                    .img{
                        right: 10px * $i;
                        top: 15px * $i;
                        z-index: 28 - (4*$i);
                        img{
                            z-index: 27-(4*$i);
                        }
                    }
                }
            }
        }
        
    }
</style>
