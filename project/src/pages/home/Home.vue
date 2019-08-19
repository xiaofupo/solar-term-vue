<template>
    <v-touch v-on:swipeleft="swiperleft" v-on:swiperight="swiperright" class="wrapper">
        <keep-alive>
            <div class="page"  ref="imgDom"
            v-bind:style="{backgroundImage:'url(' + HomeNav + ')'}"  
            >
                
                <!-- <img :src="HomeNav" alt=""> -->
                <router-link to="detail">
                    <img class="detailImg" src='../startPage/images/today_eye_icon@3x.png'>
                </router-link>
                <app-tab :pageId="pageId"></app-tab>
            </div>
        </keep-alive>
    </v-touch>
</template>

<script>
import Tab from "../../components/Tab";
import html2canvas from "html2canvas";
import {mapState,mapMutations} from 'vuex'
export default {
  name: 'Queue',
  data () {
    return {
       canvasImg:"",
       pageId:1
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
    },
    shareImgAction(){
        console.log(this.$refs.imgDom.ownerDocument);
        html2canvas(this.$refs.imgDom,{backgroundColor:null,allowTaint: true,useCORS:true,proxy:"http://dummyimage.com"}).then(canvas => {
            console.log("截图成功");
            let url = canvas.toDataURL('image/png');
            this.canvasImg = url;
            this.$router.push({name:"share",params:{imgUrl:this.canvasImg}})
        }).catch((err)=>{
            console.log(err);
        })
    }
  },
    components:{
        [Tab.name]:Tab
    },
   created(){
       this.getStartInitData();
   },
   destroyed(){
    //    this.homeindex--
   }
}
</script>


<style lang="scss" scoped>
.page{
    background-size: 100% 100%;
    .detailImg{
        width:20px;
        height:17px;
        position: absolute;
        bottom:155px;
        right:40px;
    }
}

</style>
