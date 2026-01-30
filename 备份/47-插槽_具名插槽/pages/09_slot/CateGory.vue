<template>
    <div class="category">
        <slot name="s1">默认值1</slot>
        <slot name="s2">默认值2</slot>
    </div>
</template>

<script setup lang='ts' name="CateGory">
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
</style>