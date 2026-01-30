<template>
    <div class="father">
        <h3>父组件</h3>
        <div class="content">
            <CateGory title="热门游戏列表">
                <ul>
                    <li v-for="item in GameList" :key="item.id">{{ item.name }}</li>
                </ul>
            </CateGory>
            <CateGory title="今日美食城市">
                <img :src="imgUrl" alt="">
            </CateGory>
            <CateGory title="今日影视推荐">
                <video :src="VideoUrl" controls></video>
            </CateGory>
        </div>
    </div>
</template>

<script setup lang='ts'>
import { reactive } from 'vue';
import CateGory from './CateGory.vue';

// 数据
let GameList = reactive([
    { id: 'asasasadsa01', name: '王者荣耀' },
    { id: 'asasasadsa02', name: '心动小镇' },
    { id: 'asasasadsa03', name: '蛋仔派对' },
    { id: 'asasasadsa04', name: '原神' },
])

let imgUrl = 'https://z1.ax1x.com/2023/11/19/piNxLo4.jpg'
let VideoUrl = 'http://l1037.eastasia.cloudapp.azure.com/1.mp4'
</script>

<style scoped>
.father {
    background-color: rgb(165, 164, 164);
    padding: 20px;
    border-radius: 10px;
}

.content {
    display: flex;
    justify-content: space-evenly;
}

img,
video {
    width: 100%;
}
</style>