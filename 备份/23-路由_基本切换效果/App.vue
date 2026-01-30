<template>
    <div class="title">
        <h2>火影忍者</h2>
    </div>
    <!-- 导航栏 -->
    <div class="navigate">
        <RouterLink to="/home">首页</RouterLink>
        <RouterLink to="/author">作者</RouterLink>
        <RouterLink to="/person">人物</RouterLink>
    </div>
    <!-- 内容栏 -->
    <div class="main-content">
        <RouterView></RouterView>
    </div>
</template>

<script setup lang='ts'>
import { RouterLink, RouterView } from 'vue-router';
</script>

<style scoped>
.title {
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    text-align: center;
    height: 60px;
    background-color: brown;
    padding-top: 1px;
    padding-bottom: 10px;
}

.navigate {
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    background-color: pink;
    padding-left: 80px;
    padding-right: 80px;
    display: flex;
    line-height: 45px;
    justify-content: space-between;
}

.navigate a {
    display: block;
    height: 40px;
    width: 100px;
    color: rgb(129, 84, 92);
    margin: 25px;
    background-color: skyblue;
    border-radius: 15px;
    text-align: center;
    text-decoration: none;
}

.navigate a.active {
    background-color: rgb(122, 231, 122);
}

.main-content {
    margin-top: 20px;
    height: 350px;
    border: 1px solid gray;
    border-radius: 10px;
    text-align: center;
}
</style>