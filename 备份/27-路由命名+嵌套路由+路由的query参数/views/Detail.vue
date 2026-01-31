<template>
  <div>
    <ul>
      <li>编号:{{ query.id }}</li>
      <li>作者:{{ query.name }}</li>
      <li>作品:{{ query.works }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { toRefs } from "vue";
import { useRoute } from "vue-router";

let route = useRoute();
const { query } = toRefs(route);
// console.log(query);
</script>

<style scoped>
li {
  list-style-type: none;
  /* border: 1px solid black; */
  text-align: left;
  padding-top: 5px;
}
</style>
