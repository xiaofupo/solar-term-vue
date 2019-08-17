<template>
    <div class="app-header">
        <h2>{{title}}</h2>
        <div class="header-btn header-left-btn">
            <i class="iconfont goback"></i>
        </div>
    </div>
</template>

<script>
export default {
    name:"app-header",
    props:{
        title:String,
    }
}
</script>

<style lang="scss" scoped>
.app-header{
    width: 100%;
    height: 44px;
    position: absolute;
    top: 0;
    left: 0;
    h2{
        font-weight: normal;
        font-size: 15px;
        color: #333;
        text-align: center;
    }
    .header-btn{
        width: 24px;
        height: 24px;
        position: absolute;
        top: 10px;
        left: 5px;
        &.header-left-btn{
            background: url(../../../assets/back-icon.png);
            background-size: 100% 100%;
        }
    }
}
</style>
