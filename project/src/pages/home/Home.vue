<template>
    <div class="page">
        <h1>今天的节气</h1>
        <app-tab></app-tab>
    </div>
</template>

<script>
import Tab from "../../components/Tab"
export default {
    components:{
        [Tab.name]:Tab
    }
}
</script>

<style>

</style>
