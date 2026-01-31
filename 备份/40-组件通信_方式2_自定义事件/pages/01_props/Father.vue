<template>
  <div class="father">
    <h3>父组件</h3>
    <h5>汽车:{{ car }}</h5>
    <h5 v-show="toy">儿子给的神光棒:{{ toy }}</h5>
    <Child :car="car" :sendToy="getToy" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Child from "./Child.vue";

// 数据
let car = ref("奥迪");
let toy = ref("");
// 方法
function getToy(value: any) {
  toy.value = value;
}
</script>

<style scoped>
.father {
  background-color: rgb(165, 164, 164);
  padding: 20px;
  border-radius: 10px;
}
</style>
