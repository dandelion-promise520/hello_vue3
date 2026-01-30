<template>
    <div class="child1">
        <h3>子组件1</h3>
        <h5>玩具：{{ toy }}</h5>
        <h5>书籍：{{ book }}</h5>
        <h5 v-show="property">财产：{{ property }}万</h5>
        <button @click="GetProperty($parent)">分走一半财产</button>
    </div>
</template>

<script setup lang='ts' name="Child1">
import { ref } from 'vue';

// 数据
let toy = ref('芭比公主')
let book = ref(6)
let property = ref()

// 方法
function GetProperty(parent: any) {
    // console.log(parent);
    parent.property /= 2
    property.value = 2000 - parent.property
}

//向外部提供数据 
defineExpose({ toy, book })
</script>

<style scoped>
.child1 {
    background-color: skyblue;
    padding: 20px;
    box-shadow: 0 0 10px black;
    border-radius: 10px;
    margin-top: 10px;
}
</style>