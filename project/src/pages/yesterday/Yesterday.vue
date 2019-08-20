<template>
 <v-touch v-on:swipeleft="swiperleft" v-on:swiperight="swiperright" class="wrapper">
    <div class="page">
        <app-header></app-header>
        <div class="content">
             
          <!-- <router-link to="/home">
              <img src="./zuojt.png" alt="" srcset="">
          </router-link> -->
            <p>
                <router-link to="/yesterday/detail">候风物详情</router-link>
                <router-link to="/yesterday/pic-group">图组详情</router-link>
            </p>
       </div>
    </div>
    <router-view></router-view>
 </v-touch>
</template>

<script>
import {mapState} from 'vuex';
import Header from "../../components/Header";
export default {
    components:{
        [Header.name]:Header
    },
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
