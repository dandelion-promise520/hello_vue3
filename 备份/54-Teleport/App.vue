<template>
  <div class="outer">
    <h2>火影忍者</h2>
    <img src="https://game.gtimg.cn/images/hyrz/web202003/logo2.png" alt="" />
    <br />
    <Modal />
  </div>
</template>

<script setup lang="ts" name="App">
import Modal from "./Modal.vue";
</script>

<style>
.outer {
  background-color: #ddd;
  border-radius: 10px;
  box-shadow: 0 0 10px;
  padding: 20px;
  width: 500px;
  height: 500px;
  filter: saturate(200%);
}
</style>
