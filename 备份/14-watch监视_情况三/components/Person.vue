<template>
    <!-- html -->
    <div class="person">
        <h2>姓名:{{ Person.name }}</h2>
        <h2>年龄:{{ Person.age }}</h2>
        <button @click="ChangeName">修改姓名</button>
        <button @click="ChangeAge">修改年龄</button>
        <button @click="ChangePerson">修改整个人</button>
        <hr>
        <h2>测试:{{ Obj.a.b.c }}</h2>
        <button @click="test">测试</button>
    </div>
</template>

<script lang="ts" setup name="Person">
import { reactive, watch } from 'vue';

let Person = reactive({
    name: '念念',
    age: 6
})

let Obj = reactive({
    a: {
        b: {
            c: 666
        }
    }
})

function ChangeName() {
    Person.name += '~'
}

function ChangeAge() {
    Person.age += 1
}

function ChangePerson() {
    Object.assign(Person, { name: '等等', age: 8 })
}

function test() {
    Obj.a.b.c = 999
}
// 监视，情况三: 监视【reactive】定义的【对象类型】数据，且默认是开启深度监视的
watch(Person, (NewValue, OldValue) => {
    console.log('Person改变了', NewValue, OldValue);
})
watch(Obj, (NewValue, OldValue) => {
    console.log('Obj改变了', NewValue, OldValue)
})
</script>

<style scoped>
/* css */
.person {
    background-color: skyblue;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
}
</style>
