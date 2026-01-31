<template>
  <div class="child">
    <h2>我是子组件</h2>
  </div>
</template>

<script setup lang="ts" name="Child">
import axios from "axios";

const res = await axios.get("https://api.uomg.com/api/rand.qinghua?format=json");
const {
  data: { content },
} = res;
console.log(content);
</script>

<style scoped>
.child {
  background-color: skyblue;
  padding: 20px;
  box-shadow: 0 0 10px;
  border-radius: 10px;
}
</style>
