<template>
  <!-- html -->
  <div class="person">
    <h2>姓名:{{}}</h2>
  </div>
</template>

<script lang="ts" setup name="Person">
import { type Personinter, type Persons } from "@/types";

// 数据
// let Person: Personinter = { name: '念念', age: 6, id: 'ahdahsbd01' }

let PersonList: Persons = [
  { name: "念念", age: 6, id: "ahdahsbd01" },
  { name: "等等", age: 8, id: "ahdahsbd02" },
  { name: "蔓蔓", age: 18, id: "ahdahsbd03" },
];
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
