<template>
    <div class="father">
        <h3>父组件</h3>
        <h5>a:{{ a }}</h5>
        <h5>b:{{ b }}</h5>
        <h5>c:{{ c }}</h5>
        <h5>d:{{ d }}</h5>
        <Child :a="a" :b="b" :c="c" :d="d" v-bind="{ x: 100, y: 200 }" :updateA="updateA" />
    </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue';
import Child from './Child.vue';

// 数据
let a = ref(1)
let b = ref(2)
let c = ref(3)
let d = ref(4)

// 方法
function updateA(value: number) {
    a.value += value
}
</script>

<style scoped>
.father {
    background-color: rgb(165, 164, 164);
    padding: 20px;
    border-radius: 10px;
}
</style>