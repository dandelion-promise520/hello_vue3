<template>
  <div class="title">
    <h2>火影忍者</h2>
  </div>
  <!-- 导航栏 -->
  <div class="navigate">
    <RouterLink to="/home" active-class="active">首页</RouterLink>
    <RouterLink to="/author" active-class="active">作者</RouterLink>
    <RouterLink :to="{ path: '/person' }" active-class="active">人物</RouterLink>
  </div>
  <!-- 内容栏 -->
  <div class="main-content">
    <RouterView></RouterView>
  </div>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<style scoped>
.title {
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  text-align: center;
  height: 60px;
  background-color: skyblue;
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
  padding-top: 10px;
  border-top: 1px solid gray;
  border-left: 1px solid gray;
  border-right: 1px solid gray;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  text-align: center;
}
</style>
