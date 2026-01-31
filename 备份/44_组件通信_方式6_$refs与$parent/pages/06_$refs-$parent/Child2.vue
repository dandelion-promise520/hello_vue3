<template>
  <div class="child2">
    <h3>子组件2</h3>
    <h5>手机：{{ phone }}</h5>
    <h5>书籍：{{ book }}</h5>
  </div>
</template>

<script setup lang="ts" name="Child2">
import { ref } from "vue";

// 数据
let phone = ref("小米");
let book = ref(4);

defineExpose({ phone, book });
</script>

<style scoped>
.child2 {
  background-color: orange;
  padding: 20px;
  box-shadow: 0 0 10px black;
  border-radius: 10px;
  margin-top: 10px;
}
</style>
