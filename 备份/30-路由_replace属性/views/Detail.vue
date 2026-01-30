<template>
    <div>
        <ul>
            <li>编号:{{ id }}</li>
            <li>作者:{{ name }}</li>
            <li>作品:{{ works }}</li>
        </ul>
    </div>
</template>

<script setup lang='ts'>
defineProps(['id', 'name', 'works'])
</script>

<style scoped>
li {
    list-style-type: none;
    /* border: 1px solid black; */
    text-align: left;
    padding-top: 5px;
}
</style>