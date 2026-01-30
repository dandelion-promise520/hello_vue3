<template>
    <!-- html -->
    <div class="person">
        <h2>姓名:{{ Person.name }}</h2>
        <h2>年龄:{{ Person.age }}</h2>
        <h2>第一台车:{{ Person.car.c1 }}</h2>
        <h2>第二台车:{{ Person.car.c2 }}</h2>
        <button @click="ChangeName">修改姓名</button>
        <button @click="ChangeAge">修改年龄</button>
        <button @click="ChangeC1">修改第一台车</button>
        <button @click="ChangeC2">修改第二台车</button>
        <button @click="ChangeCar">修改所有车</button>
    </div>
</template>

<script lang="ts" setup name="Person">
import { reactive, watch } from 'vue';

let Person = reactive({
    name: '念念',
    age: 6,
    car: {
        c1: '奥迪',
        c2: '宝马'
    }
})


function ChangeName() {
    Person.name += '~'
}

function ChangeAge() {
    Person.age += 1
}

function ChangeC1() {
    Person.car.c1 = '帕拉梅拉'
}
function ChangeC2() {
    Person.car.c2 = '玛莎拉蒂'
}
function ChangeCar() {
    Person.car = { c1: '兰博基尼', c2: '劳斯莱斯' }
}
//监视，情况四:监视响应式对象中的某个属性，且该属性是基本类型的，要写成函数式
// watch(() => Person.name, (newValue, oldValue) => {
//     console.log('person.name变化了', newValue, oldValue)
// })

//监视，情况四:监视响应式对象中的某个属性，且该属性是对象类型的，可以直接写，也能写函数，更推荐写函数
watch(() => Person.car, (NewValue, OldValue) => {
    console.log('Person.car改变了', NewValue, OldValue);
}, { deep: true })
</script>

<style scoped>
/* css */
.person {
    background-color: skyblue;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
}

button {
    margin: 0 5px;
}
</style>
