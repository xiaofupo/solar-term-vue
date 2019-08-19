<template>
    <div class="page user" id="collect">
        <h1>用户收藏页面</h1>
        <router-link to='/collect/message'>通知中心</router-link>
        <router-link to='/collect/setting'>未登录设置中心</router-link>
        <router-link to='/collect/settingstart'>已登录设置中心</router-link>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#collect {
  position: absolute;
  height: 100%;
  width: 100%;
}
</style>
