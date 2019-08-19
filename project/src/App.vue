<template>
  <div v-cloak>
    <div id="app">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style>
body,html,#app,.page{
    width: 100%;
    height: 100%;
}
[v-cloak] {
  display: none;
}
</style>
