<template>
  <div class="app">
    <h2>木鱼:{{ sum }}</h2>
    <h2>姓名为:{{ person.name }}</h2>
    <h2>年龄为:{{ person.age }}</h2>
    <h2>汽车:{{ car }}</h2>
    <button @click="ChangeSum">敲木鱼</button>
    <button @click="ChangeName">修改姓名</button>
    <button @click="ChangeAge">修改年龄</button>
    <button @click="ChangePerson">修改整个人</button>
    <span>|</span>
    <button @click="ChangeCarBrand">修改汽车品牌</button>
    <button @click="ChangeCarColor">修改汽车颜色</button>
    <button @click="ChangeCarEngine">修改发动机</button>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, shallowRef, shallowReactive } from "vue";

// 数据
let sum = shallowRef(0);
let person = shallowRef({
  name: "念念",
  age: 6,
});
let car = shallowReactive({
  brand: "奥迪",
  options: {
    color: "红色",
    engine: "v8",
  },
});

// 方法
function ChangeSum() {
  sum.value += 1;
}
function ChangeName() {
  person.value.name = "等等";
}
function ChangeAge() {
  person.value.age = 8;
}
function ChangePerson() {
  person.value = { name: "蔓蔓", age: 18 };
}
function ChangeCarBrand() {
  car.brand = "宝马";
}
function ChangeCarColor() {
  car.options.color = "粉色";
}
function ChangeCarEngine() {
  car.options.engine = "v12";
}
</script>

<style scoped>
.app {
  background-color: rgb(165, 164, 164);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px;
}

button {
  margin: 0 5px;
}
</style>
