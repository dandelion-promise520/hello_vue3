<template>
    <div class="father">
        <h3>父组件</h3>
        <h5>财产:{{ property }}万</h5>
        <button @click="ChangeToy">点击改变Child1的玩具</button>
        <button @click="ChangePhone">点击改变Child2的手机</button>
        <button @click="GetAllChild($refs)">点击获取到所有孩子</button>
        <button @click="AddAllChildBook($refs)">增加所有孩子的书籍</button>
        <Child1 ref="c1" />
        <Child2 ref="c2" />
    </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue';
import Child1 from './Child1.vue';
import Child2 from './Child2.vue';

// 数据
let property = ref(2000)
let c1 = ref()
let c2 = ref()

// 方法
function ChangeToy() {
    c1.value.toy = '魔方'
}
function ChangePhone() {
    c2.value.phone = '华为'
}
function GetAllChild(refs: any) {
    console.log(refs);

}
function AddAllChildBook(refs: { [key: string]: any }) {
    for (const key in refs) {
        // console.log(refs[key].book);
        refs[key].book += 3
    }
}

// 向外部提供数据
defineExpose({ property })
</script>

<style scoped>
.father {
    background-color: rgb(165, 164, 164);
    padding: 20px;
    border-radius: 10px;
}

button {
    margin-right: 10px;
}
</style>