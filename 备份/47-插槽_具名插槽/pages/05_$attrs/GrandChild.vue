<template>
    <div class="Grandchild">
        <h3>孙组件</h3>
        <h5>a:{{ a }}</h5>
        <h5>b:{{ b }}</h5>
        <h5>c:{{ c }}</h5>
        <h5>d:{{ d }}</h5>
        <h5>x:{{ x }}</h5>
        <h5>y:{{ y }}</h5>
        <button @click="updateA(6)">点击给爷爷的A更新</button>
    </div>
</template>

<script setup lang='ts'>

defineProps(['a', 'b', 'c', 'd', 'x', 'y', 'updateA'])

</script>

<style scoped>
.Grandchild {
    background-color: orange;
    padding: 10px;
    box-shadow: 0 0 10px black;
    border-radius: 10px;
    margin-top: 10px;
}
</style>