<template>
 <v-touch v-on:swipeleft="swiperleft" v-on:swiperight="swiperright" class="wrapper">
    <div class="page">
         <div class="day-header">
          <router-link to="/home">
              <img src="./zuojt.png" alt="" srcset="">
          </router-link>
       </div>
    </div>
 </v-touch>
</template>

<script>
import {mapState} from 'vuex'
export default {
     computed:{
       ...mapState({
           homeindex: state=>state.home.homeindex
       }),
  },
    methods: {
    swiperleft: function () {
    },
    swiperright: function () {  
      
      }
    },
//     created(){
//       this.homeindex++
//    },
}
</script>


<style lang="scss" scoped>
.day-header{
    width:100%;
    img{
        width:30px;
        height:30px;
        margin:10px;
    }
}
</style>
