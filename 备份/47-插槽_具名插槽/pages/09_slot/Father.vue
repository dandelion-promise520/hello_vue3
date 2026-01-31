<template>
  <div class="father">
    <h3>父组件</h3>
    <div class="content">
      <CateGory>
        <template v-slot:s2>
          <ul>
            <li v-for="item in GameList" :key="item.id">{{ item.name }}</li>
          </ul>
        </template>
        <template v-slot:s1>
          <h2>热门游戏列表</h2>
        </template>
      </CateGory>
      <CateGory>
        <template v-slot:s2>
          <img :src="imgUrl" alt="" />
        </template>
        <template v-slot:s1>
          <h2>今日美食城市</h2>
        </template>
      </CateGory>
      <CateGory>
        <template v-slot:s2>
          <video :src="VideoUrl" controls></video>
        </template>
        <template v-slot:s1>
          <h2>今日影视推荐</h2>
        </template>
      </CateGory>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import CateGory from "./CateGory.vue";

// 数据
let GameList = reactive([
  { id: "asasasadsa01", name: "王者荣耀" },
  { id: "asasasadsa02", name: "心动小镇" },
  { id: "asasasadsa03", name: "蛋仔派对" },
  { id: "asasasadsa04", name: "原神" },
]);

let imgUrl = "https://z1.ax1x.com/2023/11/19/piNxLo4.jpg";
let VideoUrl = "http://l1037.eastasia.cloudapp.azure.com/1.mp4";
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

h2 {
  background-color: orange;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
}
</style>
