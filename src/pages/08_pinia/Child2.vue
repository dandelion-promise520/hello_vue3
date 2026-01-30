<template>
    <div class="child2">
        <h2>子组件2</h2>
        <h4>手机:{{ phone }}</h4>
        <h4>书籍:{{ book }}</h4>
        <h4 v-show="toy">姐姐给的玩具:{{ toy }}</h4>
    </div>
</template>

<script setup lang='ts' name="Child2">
import { useChild2Store } from '@/store/child2';
import { storeToRefs } from 'pinia';

const Child2Store = useChild2Store()
const { phone, book, toy } = storeToRefs(Child2Store)


// 方法
</script>

<style scoped>
.child2 {
    padding: 20px;
    background-color: orange;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    margin-top: 20px;
}
</style>