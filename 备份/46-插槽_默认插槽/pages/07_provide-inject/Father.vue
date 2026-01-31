<template>
  <div class="father">
    <h3>父组件</h3>
    <h5>财产：{{ property }}万</h5>
    <h5>车子：一辆{{ car.brand }},价值{{ car.price }}万</h5>
    <Child />
  </div>
</template>

<script setup lang="ts">
import Child from "./Child.vue";
import { ref, reactive, provide } from "vue";

// 数据
let property = ref(200);
let car = reactive({
  brand: "奥迪",
  price: 100,
});

// 方法
function updateProperty(value: number) {
  property.value -= value;
}

// 向后代提供数据
provide("property", { property, updateProperty });
provide("car", car);
</script>

<style scoped>
.father {
  background-color: rgb(165, 164, 164);
  padding: 20px;
  border-radius: 10px;
}
</style>
