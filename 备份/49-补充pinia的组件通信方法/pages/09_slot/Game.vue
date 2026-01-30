<template>
    <div class="game">
        <h2>游戏列表</h2>
        <slot :GameList="GameList" name="s1"></slot>
        <!-- 可加具名插槽 -->
    </div>
</template>

<script setup lang='ts' name="Game">
import { reactive } from 'vue';

let GameList = reactive([
    { id: 'asasasadsa01', name: '王者荣耀' },
    { id: 'asasasadsa02', name: '心动小镇' },
    { id: 'asasasadsa03', name: '蛋仔派对' },
    { id: 'asasasadsa04', name: '原神' },
])

/* 数据在子那边，但根据数据生成的结构，却由父亲决定。
压岁钱在孩子那，但根据压岁钱买的东西，却由父亲决定。 */
</script>

<style scoped>
.game {
    background-color: skyblue;
    padding-top: 20px;
    height: 300px;
    border-radius: 10px;
    box-shadow: 0 0 10px;
    width: 300px;
}

h2 {
    background-color: orange;
    text-align: center;
    font-size: 20px;
    font-weight: bold;
}
</style>