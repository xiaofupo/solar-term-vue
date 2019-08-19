<template>
    <div class="page">
        <img  v-bind:style="{backgroundImage:'url(' + StateNav + ')'}"
            v-cloak>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
   computed:{
       ...mapState({
           StateNav: state=>state.home.StateNav
       })
   },
   methods:{
       getStartInitData(){
           this.$store.dispatch('home/requestStartnav')
       }
   },
   created(){
       setTimeout(() => {
          this.$router.push({
              path:"/home"
          })
       }, 5000);
       this.getStartInitData();
   },
}
</script>

<style lang="scss" scoped>
img{
    width:100%;
    height:100%;
}
[v-cloak] {
  display: none;
}
</style>
