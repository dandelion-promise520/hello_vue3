<template>
  <div class="child">
    <h3>子组件</h3>
    <h5>玩具:{{ toy }}</h5>
    <button @click="emit('sendToy', toy)">给爸爸送个玩具</button>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

const toy = ref("芭比公主");
const emit = defineEmits(["sendToy"]);
// onMounted(() => {
//     setTimeout(() => {
//         emit('haha')
//     }, 3000)
// })
</script>

<style scoped>
.child {
  margin-top: 10px;
  background-color: goldenrod;
  padding: 10px;
  box-shadow: 0 0 10px black;
  border-radius: 10px;
}
</style>
