<template>
    <div class="father">
        <h3>父组件</h3>
        <div class="content">
            <Game>
                <template v-slot:s1="{ GameList }">
                    <ul>
                        <li v-for="item in GameList" :key="item.id">{{ item.name }}</li>
                    </ul>
                </template>
            </Game>
            <Game>
                <template v-slot:s1="{ GameList }">
                    <ol>
                        <li v-for="item in GameList" :key="item.id">{{ item.name }}</li>
                    </ol>
                </template>
            </Game>
            <Game>
                <template v-slot:s1="{ GameList }">
                    <h3 v-for="item in GameList" :key="item.id">{{ item.name }}</h3>
                </template>
            </Game>
        </div>
    </div>
</template>

<script setup lang='ts'>
import Game from './Game.vue';
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