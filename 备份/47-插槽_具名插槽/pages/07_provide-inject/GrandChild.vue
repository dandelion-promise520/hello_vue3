<template>
    <div class="GrandChild">
        <h3>孙组件</h3>
        <h5>爷爷的财产：{{ property }}万</h5>
        <h5>爷爷的车：一辆{{ brand }},价值{{ price }}万</h5>
        <button @click="updateProperty(5)">花一下爷爷的钱</button>
    </div>
</template>

<script setup lang='ts'>
import { inject } from 'vue';

const { property, updateProperty } = inject('property', { property: 0, updateProperty: (param: number) => { } })
const { brand, price } = inject('car', { brand: '未知', price: 0 })
</script>

<style scoped>
.GrandChild {
    background-color: orange;
    padding: 20px;
    box-shadow: 0 0 10px black;
    border-radius: 10px;
}
</style>