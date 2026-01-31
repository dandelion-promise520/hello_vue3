<template>
  <!-- html -->
  <div class="person">
    <h2>姓名:{{ name }}</h2>
    <h2>年龄:{{ age }},{{ nianling }}</h2>
    <button @click="ChangeName">修改姓名</button>
    <button @click="ChangeAge">修改年龄</button>
  </div>
</template>

<script lang="ts" setup name="Person">
import { reactive, toRef, toRefs } from "vue";

// 数据
let Person = reactive({
  name: "念念",
  age: 6,
});

let { name, age } = toRefs(Person);
let nianling = toRef(Person.age);

console.log(nianling.value);

// 方法
function ChangeName() {
  name.value += "~";
}
function ChangeAge() {
  age.value += 1;
  nianling.value += 1;
}
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
