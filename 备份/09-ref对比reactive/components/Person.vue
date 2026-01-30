<template>
    <!-- html -->
    <div class="person">
        <h2>汽车列表: 这是一辆{{ car.brand }},它价值{{ car.price }}万</h2>
        <button @click="ChangePrice">修改汽车价格</button>
        <button @click="ChangeName">修改汽车名字</button>
        <button @click="ChangeCar">修改汽车</button>
        <hr>
        <h2>当前求和为:{{ sum }}</h2>
        <button @click="ChangeSum">点我sum+1</button>
    </div>
</template>

<script lang="ts" setup name="Person">
import { ref, reactive } from "vue";

// 数据
let car = reactive({ brand: "奥迪", price: 100 });
let sum = ref(0)
// console.log(car);


//方法
function ChangePrice() {
    car.price += 10
    // console.log(car.price);
}
function ChangeName() {
    car.brand = '宝马'
}
function ChangeCar() {
    // car = { brand: '奔驰', price: 200 } //这么写页面不更新
    // car = reactive({ brand: '奔驰', price: 200 })  //这么写页面不更新

    //使用reactive 这么写下面可以更新 
    Object.assign(car, { brand: '奔驰', price: 200 })

    // 使用ref的写法
    // car.value = { brand: '奔驰', price: 200 }
}
function ChangeSum() {
    sum.value += 1
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
