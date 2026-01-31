<template>
  <!-- html -->
  <div class="person">
    <h1>中国</h1>
    <h2 ref="title2">云南</h2>
    <h3>昆明</h3>
    <button @click="showLog">点击输出title2元素</button>
  </div>
</template>

<script lang="ts" setup name="Person">
import { ref } from "vue";

let title2 = ref();
let a = ref(0);
let b = ref(1);
let c = ref(2);

function showLog() {
  console.log(title2.value);
}

defineExpose({ a, b, c });
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
