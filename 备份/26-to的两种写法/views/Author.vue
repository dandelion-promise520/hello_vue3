<template>
    <h2>作者是帅哥</h2>
</template>

<script setup lang='ts'>
import { onMounted, onUnmounted, } from 'vue';


onMounted(() => {
    console.log('Author挂载了');
})
onUnmounted(() => {
    console.log('Author卸载了');
})
</script>

<style></style>