<template>
    <!-- html -->
    <div class="person">
        <h2>木鱼:{{ sum }},双倍的木鱼:{{ bigSum }}</h2>
        <button @click="add">敲木鱼</button>
        <hr>
        <img v-for="(item, index) in dogList" :src="item" :key="index">
        <br>
        <button @click="getDog">点击添加一只修狗</button>
    </div>
</template>

<script lang="ts" setup name="Person">
import useSum from "@/hooks/useSum"
import useDog from "@/hooks/useDog";

const { sum, add, bigSum } = useSum()
const { dogList, getDog } = useDog()
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

img {
    height: 100px;
    padding-right: 10px;
}
</style>
