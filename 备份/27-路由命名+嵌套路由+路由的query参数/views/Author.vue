<template>
  <div class="author">
    <div class="authorList">
      <ul>
        <li v-for="item in authorList" :key="item.id">
          <!-- 第一种写法 -->
          <!-- <RouterLink :to="`/author/detail?id=${item.id}&name=${item.name}&works=${item.woks}`">{{ item.name }}
                    </RouterLink> -->
          <!-- 第二种写法 -->
          <RouterLink
            :to="{
              path: '/author/detail',
              query: {
                id: item.id,
                name: item.name,
                works: item.woks,
              },
            }"
          >
            {{ item.name }}
          </RouterLink>
        </li>
      </ul>
    </div>
    <div class="author-content">
      <!-- 此处存放将要嵌套的内容 -->
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { RouterView, RouterLink } from "vue-router";

let authorList = reactive([
  { id: "asjasaasa01", name: "谏山创", woks: "进击的巨人" },
  { id: "asjasaasa01", name: "岸本齐史", woks: "火影忍者" },
  { id: "asjasaasa01", name: "吾峠呼世晴", woks: "鬼灭之刃" },
  { id: "asjasaasa01", name: "虎虎", woks: "中二病也要谈恋爱" },
]);
</script>

<style scoped>
.author {
  display: flex;
}

.authorList {
  font-size: large;
  text-align: left;
  float: left;
  padding-right: 20px;
  /* border: 1px solid black; */
}

.authorList ul li {
  padding-top: 10px;
  /* list-style-type: none; */
}

.authorList ul li::marker {
  color: rgb(227, 133, 148);
}

.authorList ul li a {
  text-decoration: none;
  color: rgb(227, 133, 148);
}

.author-content {
  height: 600px;
  width: 1400px;
  font-size: large;
  text-align: center;
  margin: 0 auto;
  border: 1px solid black;
  border-radius: 15px;
}
</style>
