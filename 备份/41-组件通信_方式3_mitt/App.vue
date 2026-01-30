<template>
    <div class="container-fluid wraper">
        <h1 class="title">Vue3组件间通信</h1>
        <hr>
        <div class="row">
            <div class="col-xs-3 col-md-3 col-lg-3 col-xl-3">
                <!-- 导航区 -->
                <RouterLink class="list-group-item" active-class="active" to="/props">1.props</RouterLink>
                <RouterLink class="list-group-item" active-class="active" to="/event">2.自定义事件</RouterLink>
                <RouterLink class="list-group-item" active-class="active" to="/mitt">3.mitt</RouterLink>
                <RouterLink class="list-group-item" active-class="active" to="/model">4.v-model</RouterLink>
                <RouterLink class="list-group-item" active-class="active" to="/attrs">5.$attrs</RouterLink>
                <RouterLink class="list-group-item" active-class="active" to="/ref-partent">6.$ref、$partent</RouterLink>
                <RouterLink class="list-group-item" active-class="active" to="/provide">7.provide、inject</RouterLink>
                <RouterLink class="list-group-item" active-class="active" to="/pinia">8.pinia</RouterLink>
                <RouterLink class="list-group-item" active-class="active" to="/slot">9.slot</RouterLink>
            </div>
            <div class="col-xs-9 col-md-9 col-lg-9 col-xl-9">
                <div class="panel-body">
                    <!-- 展示一个展位区 -->
                    <RouterView></RouterView>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang='ts'>
import { RouterLink, RouterView } from 'vue-router';
</script>

<style scoped>
.title {
    margin: 30px 0;
    text-align: center;
}

.panel-body {
    padding-top: 30px;
}

.list-group-item.active {
    background-color: rgb(81, 120, 184);
}
</style>