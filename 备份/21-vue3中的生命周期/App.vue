<template>
  <!-- html -->
  <Person v-if="isShow" />
</template>

<script lang="ts" setup name="App">
import { onMounted, ref } from "vue";
import Person from "./components/Person.vue";

let isShow = ref(true);

onMounted(() => {
  console.log("父----挂载完毕");
});
</script>

<style scoped>
/* css */
</style>
