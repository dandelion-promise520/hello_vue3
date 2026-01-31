<template>
  <div class="child">
    <h3>子组件</h3>
    <h5>玩具:{{ toy }}</h5>
    <h5>爹给的车:{{ car }}</h5>
    <button @click="sendToy(toy)">给爸来跟神光棒</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
// 数据
let toy = ref("神光棒");
// 声明接受props
defineProps(["car", "sendToy"]);
</script>

<style scoped>
.child {
  background-color: skyblue;
  padding: 10px;
  box-shadow: 0 0 10px black;
  border-radius: 10px;
}
</style>
