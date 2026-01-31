<template>
  <div class="child1">
    <h2>子组件1</h2>
    <h4>玩具:{{ toy }}</h4>
    <h4>书籍:{{ book }}本</h4>
    <h4>妹妹的手机:{{ phone }}</h4>
    <button @click="SendToy(toy)">把玩具给妹妹</button>
  </div>
</template>

<script setup lang="ts" name="Child1">
import { useChild1Store } from "@/store/child1";
import { storeToRefs } from "pinia";
import { ref } from "vue";

// 使用child2的方法
import { useChild2Store } from "@/store/child2";
const Child2Store = useChild2Store();
const { phone } = storeToRefs(Child2Store);
const { SendToy } = Child2Store;

// child1的方法
const child1Store = useChild1Store();
const { toy, book } = storeToRefs(child1Store);
</script>

<style scoped>
.child1 {
  padding: 20px;
  background-color: skyblue;
  box-shadow: 0 0 10px;
  border-radius: 10px;
}
</style>
