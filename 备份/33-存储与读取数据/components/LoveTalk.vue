<template>
    <div class="LoveTalk">
        <button @click="getLove">获取一句土味情话</button>
        <ul>
            <li v-for="item in LoveTalkStore.LoveList" :key=item.id>{{ item.title }}</li>
        </ul>
    </div>
</template>

<script setup lang='ts'>
import axios from 'axios';
import { nanoid } from 'nanoid';
import { reactive } from 'vue';
import { useLoveTalkStore } from '@/store/LoveTalk';

const LoveTalkStore = useLoveTalkStore()
// 数据
// let LoveList = reactive([
//     { id: 'akjakd01', title: '今天你有点怪，哪里怪？怪好看的！' },
//     { id: 'akjakd02', title: '草莓，蓝莓，蔓越莓，今天想我了没' },
//     { id: 'akjakd03', title: '心里给你留了一块地，我的死心塌地' },
// ])

// 方法
async function getLove() {
    // const { data: { content: title } } = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
    // const obj = { id: nanoid(), title }
    // LoveList.unshift(obj)
}
</script>

<style scoped>
.LoveTalk {
    background-color: pink;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 15px;
}
</style>