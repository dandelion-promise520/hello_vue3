<template>
  <!-- html -->
  <div class="person">
    <h2>汽车列表: 这是一辆{{ car.brand }},它价值{{ car.price }}万</h2>
    <button @click="ChangePrice">修改汽车价格</button>
    <br />
    <h2>游戏列表:</h2>
    <ul>
      <li v-for="g in games" :key="g.id">{{ g.name }}</li>
    </ul>
    <button @click="ChangeThredGameName">修改第3个游戏的名字</button>
  </div>
</template>

<script lang="ts" setup name="Person">
import { ref, reactive } from "vue";

// 数据
let car = ref({ brand: "奥迪", price: 100 });
// console.log(car);
let games = ref([
  { id: "astsbshd01", name: "火影忍者" },
  { id: "astsbshd02", name: "原神" },
  { id: "astsbshd03", name: "王者荣耀" },
]);

let test = ref({ a: 666 });
let test2 = reactive({ b: 999 });
console.log(test);
console.log(test2);

//方法
function ChangePrice() {
  car.value.price += 10;
  console.log(car.value.price);
}
function ChangeThredGameName() {
  games.value[2].name = "后室";
  console.log(games.value[2].name);
}
</script>

<style scoped>
/* css */
.person {
  background-color: skyblue;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}

button {
  margin: 0 5px;
}
</style>
