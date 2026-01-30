<template>
    <div class="app">
        <h2>我是App组件</h2>
        <Suspense>
            <template v-slot:default>
                <Child />
            </template>
            <!-- v-slot 简写就是 # -->
            <!-- 此处为Suspense组件提供的两个插槽 -->
            <!-- 如果异步任务没有处理完成，则显示fallback -->
            <template #fallback>
                加载中...
            </template>
        </Suspense>
    </div>
</template>

<script setup lang='ts' name="App">
import Child from './Child.vue';
</script>

<style scoped>
.app {
    background-color: #ddd;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px;
}
</style>