<template>
  <div class="Count">
    <h2>当前敲得木鱼:{{ CountStore.sum }}</h2>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="add">加</button>
    <button @click="minus">减</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useCountStore } from "@/store/Count";
// 数据
let CountStore = useCountStore();
console.log(CountStore.sum);

let n = ref(1);

// 方法
function add() {}
function minus() {}
</script>

<style scoped>
.Count {
  background-color: skyblue;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 15px;
}

select,
button {
  margin: 0 5px;
}
</style>
