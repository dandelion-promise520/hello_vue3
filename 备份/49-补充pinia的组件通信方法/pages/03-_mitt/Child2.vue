<template>
  <div class="child">
    <h3>子组件2</h3>
    <h5>书：{{ book }}</h5>
    <h5 v-show="toy">姐姐给的玩具：{{ toy }}</h5>
  </div>
</template>

<script setup lang="ts">
import { onUnmounted, ref } from "vue";
import { emitter } from "@/utils/emitter";

// 数据
let book = ref("三国演义");
let toy = ref("");

emitter.on("send-toy", (value: any) => {
  toy.value = value;
});

onUnmounted(() => {
  emitter.all.clear();
  // console.log('emitter已关闭');
});
</script>

<style scoped>
.child {
  background-color: orange;
  padding: 10px;
  box-shadow: 0 0 10px black;
  border-radius: 10px;
  margin-top: 10px;
}
</style>
