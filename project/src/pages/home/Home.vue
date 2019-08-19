<template>
<<<<<<< HEAD
    <v-touch v-on:swipeleft="swiperleft" v-on:swiperight="swiperright" class="wrapper">
        <keep-alive>
            <div class="page" 
            v-bind:style="{backgroundImage:'url(' + HomeNav + ')'}"   
            >
                <router-link to="detail">
                    <img src='../startPage/images/today_eye_icon@3x.png'>
                </router-link>
                <app-tab></app-tab>
            </div>
        </keep-alive>
    </v-touch>
</template>

<script>
import Tab from "../../components/Tab"
import {mapState,mapMutations} from 'vuex'
=======
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
>>>>>>> branch/jiangqin
export default {
  name: 'Queue',
  data () {
    return {
      
    }
  },
  computed:{
       ...mapState({
           HomeNav: state=>state.home.HomeNav,
           homeindex: state=>state.home.homeindex
       }),
  },
  methods: {
    ...mapMutations(['increment']),
    swiperleft: function () {
    },
    swiperright: function () {
       this.$router.push({
              path:"/yesterday"
          })
        // this.increment()
        console.log(1)
    },
      getStartInitData(){
           this.$store.dispatch('home/requestHomenav')
       }
  },
    components:{
        [Tab.name]:Tab
    },
<<<<<<< HEAD
   created(){
       this.getStartInitData();
   },
   destroyed(){
    //    this.homeindex--
   }
=======
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
>>>>>>> branch/jiangqin
}
console.log(2)
</script>

<<<<<<< HEAD

<style lang="scss" scoped>
img{
    width:20px;
    height:17px;
    position: absolute;
    bottom:155px;
    right:40px;
=======
<style lang="scss">
.home{
    background: pink;
    img{
        width: 200px;
    }
>>>>>>> branch/jiangqin
}
</style>
