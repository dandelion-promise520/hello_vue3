<template>
    <!-- html -->
    <Person a="朱西蔓" :list='PersonList' />
</template>

<script lang="ts" setup name="App">
import { reactive } from "vue";
import Person from "./components/Person.vue";
import { type Persons } from "./types";

// 数据
let PersonList = reactive<Persons>([
    { id: "asusdhsa01", name: "蔓蔓", age: 20 },
    { id: "asusdhsa02", name: "等等", age: 8 },
    { id: "asusdhsa03", name: "念念", age: 6 },
]);
</script>

<style scoped>
/* css */
</style>
