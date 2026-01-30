<template>
    <div class="LoveTalk">
        <button @click="getLove">获取一句土味情话</button>
        <ul>
            <li v-for="item in LoveList" :key=item.id>{{ item.title }}</li>
        </ul>
    </div>
</template>

<script setup lang='ts' name="LoveTalk">
import { useLoveTalkStore } from '@/store/LoveTalk';
import { storeToRefs } from 'pinia';

const LoveTalkStore = useLoveTalkStore()
const { LoveList } = storeToRefs(LoveTalkStore)

LoveTalkStore.$subscribe((mutate, state) => {
    // console.log(mutate, state);
    localStorage.setItem('talkList', JSON.stringify(state.LoveList))
})


// 方法
function getLove() {
    LoveTalkStore.getATalk()
}
</script>

<style scoped>
.LoveTalk {
    background-color: pink;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 15px;
}

ul {
    list-style-type: none;
}
</style>