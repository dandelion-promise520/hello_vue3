<template>
    <div class="father">
        <h3>父组件</h3>
        <h5>{{ username }}</h5>
        <h5>{{ password }}</h5>

        <!-- v-model用在html标签上 -->
        <!-- <input type="text" v-model="username"> -->
        <!-- <input type="text" :value="username" @input="username = (<HTMLInputElement>$event.target).value"> -->

        <!-- v-model用在组建标签上 -->
        <!-- <dandeInput v-model="username" /> -->
        <!-- <dandeInput :modelValue="username" @update:modelValue="username = $event" /> -->

        <!-- 修改modelValue -->
        <dandeInput v-model:zhanghao="username" v-model:mima="password" />
    </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue';

import dandeInput from './dandeInput.vue';

// 数据
let username = ref('dandelion')
let password = ref('123456')
</script>

<style scoped>
.father {
    background-color: rgb(165, 164, 164);
    padding: 20px;
    border-radius: 10px;
}
</style>