<template>
    <div class="child">
        <h3>子组件1</h3>
        <h5>玩具：{{ toy }}</h5>
        <button @click="emitter.emit('send-toy', toy)">把玩具给妹妹</button>
    </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue';
import { emitter } from '@/utils/emitter';

// 数据
let toy = ref('芭比公主')
</script>

<style scoped>
.child {
    background-color: skyblue;
    padding: 10px;
    box-shadow: 0 0 10px black;
    border-radius: 10px;
}
</style>