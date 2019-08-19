<template>
    <div class="app-tab">
        <ul>
            <li>
                <router-link to="/comment/1">评论</router-link>
            </li>
            <li>
                <router-link to="/share/1">分享</router-link>
            </li>
            <li>
                <router-link to="/collect">头像</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:"app-tab"
}
</script>

<style lang="scss">
    .app-tab{
        width: 100%;
        height: 60px;
        line-height: 60px;
        background: transparent;
        position: absolute;
        bottom: 0;
        left: 0;
        ul{
            display: flex;
            li{
                flex:1;
                border: 1px solid #eee;
                a{
                    display: block;
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
</style>
