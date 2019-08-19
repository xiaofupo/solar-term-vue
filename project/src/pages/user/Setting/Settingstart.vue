<template>
<!-- 已登录状态 -->
    <div class="page" id="setting">
        <Seeting-start-head></Seeting-start-head>
     <Seeting-startnav></Seeting-startnav>
    </div>
</template>

<script>

import SeetingStartHead from "./Children/Seetingheadstart.vue";
import SeetingStartnav from "./Children/Settingnavstart.vue";


export default {
  components: {
    SeetingStartHead,
    SeetingStartnav 
  },

};
</script>

<style lang="scss" scoped>
#setting {
  width: 100%;
  height: 100%;
  position: absolute;
  background: #cccccc;
  top: 0;
  left: 0;
  z-index: 10;


}
</style>