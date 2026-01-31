<template>
  <!-- html -->
  <div class="person">
    <h2>木鱼:{{ sum }}</h2>
    <button @click="add">敲木鱼</button>
  </div>
</template>

<script lang="ts" setup name="Person">
import {
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onMounted,
  onUnmounted,
  onUpdated,
  ref,
} from "vue";

// 数据
let sum = ref(0);

// 方法
function add() {
  sum.value += 1;
}

// 创建
console.log("创建完毕");

// 挂载前
onBeforeMount(() => {
  console.log("挂载前");
});
// 挂载完毕
onMounted(() => {
  console.log("挂载完毕");
});
// 更新前
onBeforeUpdate(() => {
  console.log("更新前");
});
// 更新完毕
onUpdated(() => {
  console.log("更新完毕");
});
// 卸载前
onBeforeUnmount(() => {
  console.log("卸载前");
});
// 卸载完毕
onUnmounted(() => {
  console.log("卸载完毕");
});
</script>

<style scoped>
/* css */
.person {
  background-color: skyblue;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}

button {
  margin: 0 5px;
}
</style>
