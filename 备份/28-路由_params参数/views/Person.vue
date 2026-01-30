<template>
    <img src="https://images.dog.ceo/breeds/pembroke/n02113023_724.jpg" alt="">
</template>

<script setup lang='ts'>
import { onMounted, onUnmounted, } from 'vue';


onMounted(() => {
    console.log('Person挂载了');
})
onUnmounted(() => {
    console.log('Person卸载了');
})
</script>

<style></style>