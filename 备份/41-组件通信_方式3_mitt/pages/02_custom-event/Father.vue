<template>
  <div class="father">
    <h3>父组件</h3>
    <h5 v-show="toy">玩一下儿子的玩具:{{ toy }}</h5>
    <Child @sendToy="getToy" />

    <!-- <button @click="test(6, 7, $event)">测试</button> -->
    <!-- <Child /> -->
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Child from "./Child.vue";

// 数据
const toy = ref("");
// 方法
function getToy(value: any) {
  // console.log(value);
  toy.value = value;
}

// function test(a: number, b: number, event: Event) {
//     console.log(a, b, event);

// }
</script>

<style scoped>
.father {
  background-color: rgb(165, 164, 164);
  padding: 20px;
  border-radius: 10px;
}
</style>
