<template>
    <div class="page home" ref="imgDom">
        <h1></h1>
        <app-tab></app-tab>
        <div>
            <img :src="canvasImg" alt="">
        </div>
    </div>
</template>

<script>
import Tab from "../../components/Tab";
import html2canvas from "html2canvas"
export default {
    components:{
        [Tab.name]:Tab
    },
    data() {
        return {
            canvasImg:''
        }
    },
    methods: {
        shareImgAction(){
            console.log(this.$refs.imgDom.ownerDocument);
            html2canvas(this.$refs.imgDom).then(canvas => {
                console.log("截图成功");
                let url = canvas.toDataURL('image/png');
                this.canvasImg = url;
                this.$router.push({name:"share",params:{imgUrl:this.canvasImg}})
            }).catch((err)=>{
                console.log(err);
            })
        }
    },
}
</script>

<style lang="scss">
.home{
    background: pink;
    img{
        width: 200px;
    }
}
</style>
