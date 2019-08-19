<template>
    <div class="page">
<<<<<<< HEAD
        <h1>启动页</h1>
=======
            <img  v-bind:style="{backgroundImage:'url(' + StateNav + ')'}"
             v-cloak>
>>>>>>> duqiyu
    </div>
</template>

<script>
<<<<<<< HEAD
export default {

}
</script>

<style>

</style>
=======
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
>>>>>>> duqiyu
