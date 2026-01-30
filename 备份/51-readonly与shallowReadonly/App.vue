<template>
    <div class="app">
        <h2>当前求和为:{{ sum1 }}</h2>
        <h2>当前求和为:{{ sum2 }}</h2>
        <h2>汽车1:{{ car1 }}</h2>
        <h2>汽车2:{{ car2 }}</h2>
        <button @click="ChangeSum1">修改sum1的值</button>
        <button @click="ChangeSum2">修改sum2的值</button>
        <span>|</span>
        <button @click="ChangeCar1Brand">修改汽车(1)品牌</button>
        <button @click="ChangeCar1Color">修改汽车(1)颜色</button>
        <button @click="ChangeCar1Engine">修改(1)发动机</button>
        <span>|</span>
        <button @click="ChangeCar2Brand">修改汽车(2)品牌</button>
        <button @click="ChangeCar2Color">修改汽车(2)颜色</button>
        <button @click="ChangeCar2Engine">修改(2)发动机</button>
    </div>
</template>

<script setup lang='ts'>
import { reactive, readonly, ref, shallowReadonly } from 'vue';


let sum1 = ref(0)
let sum2 = readonly(sum1)
let car1 = reactive({
    'brand': '奥迪',
    'options': {
        'color': '红色',
        'engine': 'v8'
    }
})
let car2 = shallowReadonly(car1)

function ChangeSum1() {
    sum1.value += 1
}
function ChangeSum2() {
    sum2.value += 1
}

function ChangeCar1Brand() {
    car1.brand = '宝马'
}
function ChangeCar1Color() {
    car1.options.color = '粉色'
}
function ChangeCar1Engine() {
    car1.options.engine = 'v12'
}

function ChangeCar2Brand() {
    car2.brand = '宝马'
}
function ChangeCar2Color() {
    car2.options.color = '粉色'
}
function ChangeCar2Engine() {
    car2.options.engine = 'v12'
}
</script>

<style scoped>
.app {
    background-color: rgb(165, 164, 164);
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px;
}

button {
    margin: 0 5px;
}
</style>