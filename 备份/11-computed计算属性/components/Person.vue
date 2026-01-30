<template>
    <!-- html -->
    <div class="person">
        姓:<input type="text" name="" id="" v-model="FirstName"> <br>
        名:<input type="text" name="" id="" v-model="LastName"> <br>
        全名:<span>{{ FullName }}</span> <br>
        <button @click="ChangeName">修改姓名</button>
    </div>
</template>

<script lang="ts" setup name="Person">
import { computed, ref } from 'vue';

let FirstName = ref('zhu')
let LastName = ref('ximan')

// 这么定义的fullName是一个计算属性，且是只读的
// let FullName = computed(() => {
//     return FirstName.value.slice(0, 1).toUpperCase() + FirstName.value.slice(1) + '-' + LastName.value
// })

// 这么定义的fullName是一个计算属性，可读写
let FullName = computed({
    get() {
        return FirstName.value.slice(0, 1).toUpperCase() + FirstName.value.slice(1) + '-' + LastName.value
    },
    set(val) {
        const [FirstNameStr, LastNameStr] = val.split('-')
        console.log(FirstNameStr, LastNameStr);
        FirstName.value = FirstNameStr
        LastName.value = LastNameStr
    }
})

function ChangeName() {
    FullName.value = 'liu-jianfeng'
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
</style>
