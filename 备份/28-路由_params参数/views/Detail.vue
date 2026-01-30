<template>
    <div>
        <ul>
            <li>编号:{{ route.params.id }}</li>
            <li>作者:{{ route.params.name }}</li>
            <li>作品:{{ route.params.works }}</li>
        </ul>
    </div>
</template>

<script setup lang='ts'>
import { useRoute } from 'vue-router';

const route = useRoute()
console.log(route);

</script>

<style scoped>
li {
    list-style-type: none;
    /* border: 1px solid black; */
    text-align: left;
    padding-top: 5px;
}
</style>