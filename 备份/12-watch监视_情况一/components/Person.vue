<template>
    <!-- html -->
    <div class="person">
        <h1>情况一:监视【ref】定义的【基本类型】数据</h1>
        <h2>木鱼:敲{{ sum }}下</h2>
        <button @click="ChangeSum">功德加一</button>
    </div>
</template>

<script lang="ts" setup name="Person">
import { ref, watch } from 'vue';

//数据
let sum = ref(0)

// 方法
function ChangeSum() {
    sum.value += 1
}

// 监视 情况一:监视【ref】定义的【基本类型】数据
// watch('谁', '回调函数')
const stopWatch = watch(sum, (NewValue, OldValue) => {
    console.log(NewValue, OldValue);
    if (NewValue >= 10) {
        stopWatch()
    }
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
