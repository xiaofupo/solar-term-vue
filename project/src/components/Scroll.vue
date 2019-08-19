<template>
  <div class="wrapper" ref="wrapper">
    <div class="scroll-content">
      <slot/>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "app-scroll",
  data() {
    return {};
  },
  mounted() {
    let scroll = this.scroll = new BScroll(this.$refs.wrapper, {
      probeType: 1,
      tap:true,
      click:true,
      pullUpLoad:true
    });    
     // 监听滚动开始前的事件
    scroll.on('beforeScrollStart', ()=>{
        scroll.refresh();
    })
  },
  methods:{
     handleScrollTo(y){
       this.scroll.scrollTo(0,y,300)
     },
     handleScrollStart(cb){
       this.scroll.on("scroll",({x,y})=>{
         if(y>30){
           cb()
         }
       })
     },
     handleScrollEnd(cb){
       this.scroll.on("scrollEnd",()=>{
          setTimeout(()=>{
             cb();
          },2000)
       })
     },
     handlepullingUp(cb){
       this.scroll.on("pullingUp",()=>{
          cb()
       })
     }
  }
};
</script>

<style scoped>
.wrapper {
  height: 100%;
  overflow: hidden;
}
</style>
