<template>
    <!-- html -->
    <div class="person">
        <!-- 情况二: 监视【ref】定义的【对象类型】数据 -->
        <h2>姓名:{{ Person.name }}</h2>
        <h2>年龄:{{ Person.age }}</h2>
        <button @click="ChangeName">修改姓名</button>
        <button @click="ChangeAge">修改年龄</button>
        <button @click="ChangePerson">修改整个人</button>
    </div>
</template>

<script lang="ts" setup name="Person">
import { ref, watch } from 'vue';

let Person = ref({
    name: '念念',
    age: 6
})
function ChangeName() {
    Person.value.name += '~'
}
function ChangeAge() {
    Person.value.age += 1
}
function ChangePerson() {
    Person.value = { name: '等等', age: 8 }
}
/* 监视，情况二: 监视【ref】定义的【对象类型】数据，监视的是对象的地址值，若想监视对象内部属性的变化，需要手动开启深度监视
watch的第一个参数是: 被监视的数据
watch的第二个参数是: 监视的回调
watch的第三个参数是: 配置对象(deep、immediate等等..... )
*/
watch(Person, (NewValue, OldValue) => {
    console.log('Person改变了', NewValue, OldValue);
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
</style>
