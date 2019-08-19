<template>
<<<<<<< HEAD
    <div class="page">
        <h1>今天的节气</h1>
        <app-tab></app-tab>
    </div>
=======
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
>>>>>>> duqiyu
</template>

<script>
import Tab from "../../components/Tab"
<<<<<<< HEAD
export default {
    components:{
        [Tab.name]:Tab
    }
}
</script>

<style>

=======
import {mapState,mapMutations} from 'vuex'
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
   created(){
       this.getStartInitData();
   },
   destroyed(){
    //    this.homeindex--
   }
}
console.log(2)
</script>


<style lang="scss" scoped>
img{
    width:20px;
    height:17px;
    position: absolute;
    bottom:155px;
    right:40px;
}
>>>>>>> duqiyu
</style>
