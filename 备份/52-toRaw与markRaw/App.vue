<template>
    <div class="app">
        <h2>姓名为：{{ rawPerson.name }}</h2>
        <h2>年龄为：{{ rawPerson.age }}</h2>
        <button @click="person.age += 1">修改年龄</button>
        <hr>
        <h2>{{ car2 }}</h2>
        <button @click="car2.price += 10">点击价格加10</button>
    </div>
</template>

<script setup lang='ts'>
import { markRaw, reactive, toRaw } from 'vue';
import mockjs from 'mockjs'

/* toRaw */
let person = reactive({
    name: '蔓蔓',
    age: 18
})
// 用于获取一个响应式的原始数据
let rawPerson = toRaw(person)
// console.log('响应式数据', person);
// console.log('原始数据', rawPerson);


/* markRaw */
let car = markRaw({ brand: '奥迪', price: 200 })
let car2 = reactive(car)

console.log(car);
console.log(car2);

let mockJs = markRaw(mockjs)
// console.log(mockJs);


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