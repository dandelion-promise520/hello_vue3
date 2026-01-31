<template>
  <div class="Count">
    <h2>当前敲得木鱼:{{ sum }}</h2>
    <h2>它的品牌为{{ brand }},它的英文名是{{ EnglishName }}</h2>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="add">加</button>
    <button @click="minus">减</button>
  </div>
</template>

<script setup lang="ts" name="Count">
import { ref, toRefs } from "vue";
// 引入useCountStore
import { useCountStore } from "@/store/Count";
import { storeToRefs } from "pinia";
// 使用useCountStore,得到一个专门保存count相关的store
let CountStore = useCountStore();

// 使用torefs会把所有的CounttStore里的所有东西都Proxy化
// let { sum, brand, EnglishName } = toRefs(CountStore)

// storeToRefs只会关注sotre中数据，不会对方法进行ref包裹
let { sum, brand, EnglishName } = storeToRefs(CountStore);

// console.log(storeToRefs(CountStore));

// 数据
let n = ref(1);

// 方法
function add() {
  CountStore.increment(n.value);
}
function minus() {
  CountStore.reduce(n.value);
}
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
