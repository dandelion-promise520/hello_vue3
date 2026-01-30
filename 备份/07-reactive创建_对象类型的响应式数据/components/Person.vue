<template>
    <!-- html -->
    <div class="person">
        <h2>汽车列表: 这是一辆{{ car.brand }},它价值{{ car.price }}万</h2>
        <button @click="ChangePrice">修改汽车价格</button>
        <br>
        <h2>游戏列表:</h2>
        <ul>
            <li v-for="g in games" :key="g.id">{{ g.name }}</li>
        </ul>
        <button @click="ChangeThredGameName">修改第3个游戏的名字</button>
        <hr>
        <h2>测试:{{ TestObj.a.b.c }}</h2>
        <button @click="ChangeTest">测试:修改测试的值</button>
    </div>
</template>

<script lang="ts" setup name="Person">
import { reactive } from "vue";

// 数据
let car = reactive({ brand: "奥迪", price: 100 });
console.log(car);
let games = reactive([
    { id: 'astsbshd01', name: '火影忍者' },
    { id: 'astsbshd02', name: '原神' },
    { id: 'astsbshd03', name: '王者荣耀' }
])
let TestObj = reactive({
    a: {
        b: {
            c: 666
        }
    }
})

//方法
function ChangePrice() {
    car.price += 10;
    console.log(car.price);
}
function ChangeThredGameName() {
    games[2].name = '后室'
    console.log(games[2].name);

}
function ChangeTest() {
    TestObj.a.b.c = 999
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
