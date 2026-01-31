<template>
  <div class="app">
    <h2>{{ msg }}</h2>
    <input type="text" v-model="msg" />
    <button @click="reset">重置</button>
  </div>
</template>

<script setup lang="ts" name="App">
import { customRef, ref } from "vue";
import useMsgRef from "./hooks/useMsgRef";

// 使用vue提供的默认ref定义响应式数据，数据一变，页面就更新
// let msg = ref('你好')

let { msg } = useMsgRef("蒲公英的约定", 200);

function reset() {
  msg.value = "";
}
</script>

<style scoped>
.app {
  background-color: rgb(165, 164, 164);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px;
}

button {
  margin: 0 5px;
}

input {
  margin: 0 5px;
}
</style>
