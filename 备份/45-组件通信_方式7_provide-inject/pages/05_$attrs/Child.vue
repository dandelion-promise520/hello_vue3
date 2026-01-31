<template>
  <div class="child">
    <h3>子组件</h3>
    <!-- <h5>父亲给的a：{{ a }}</h5>
        <h5>其他：{{ $attrs }}</h5> -->
    <GrandChild v-bind="$attrs" />
  </div>
</template>

<script setup lang="ts">
import GrandChild from "./GrandChild.vue";
// defineProps(['a'])
</script>

<style scoped>
.child {
  background-color: skyblue;
  padding: 10px;
  box-shadow: 0 0 10px black;
  border-radius: 10px;
}
</style>
