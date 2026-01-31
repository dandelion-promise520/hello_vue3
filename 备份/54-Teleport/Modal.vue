<template>
  <button @click="isShow = true">显示弹框</button>
  <teleport to="body">
    <div class="modal" v-show="isShow">
      <h2>温馨提示</h2>
      <p>您的黄猿体验卡快过期了</p>
      <button @click="isShow = false">关闭弹窗</button>
    </div>
  </teleport>
</template>

<script script setup lang="ts" name=" Modal">
import { ref } from "vue";
let isShow = ref(false);
</script>

<style>
.modal {
  background-color: skyblue;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px;
  width: 300px;
  height: 200px;
  position: fixed;
  left: 50%;
  margin-left: -200px;
  top: 10%;
  text-align: center;
}
</style>
