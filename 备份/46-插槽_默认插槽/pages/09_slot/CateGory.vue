<template>
    <div class="category">
        <h2>{{ title }}</h2>
        <slot>默认值</slot>
    </div>
</template>

<script setup lang='ts' name="CateGory">
defineProps(['title'])
</script>

<style scoped>
.category {
    background-color: skyblue;
    border-radius: 10px;
    padding-top: 20px;
    box-shadow: 0 0 10px;
    height: 300px;
    width: 300px;
}

h2 {
    background-color: orange;
    text-align: center;
    font-size: 20px;
    font-weight: bold;
}
</style>