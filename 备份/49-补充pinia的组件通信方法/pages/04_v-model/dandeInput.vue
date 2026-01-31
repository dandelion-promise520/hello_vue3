<template>
  <input
    type="text"
    :value="zhanghao"
    @input="emit('update:zhanghao', (<HTMLInputElement>$event.target).value)"
  />
  <br />
  <input
    type="text"
    :value="mima"
    @input="emit('update:mima', (<HTMLInputElement>$event.target).value)"
  />
</template>

<script setup lang="ts" name="dandeInput">
defineProps(["zhanghao", "mima"]);

const emit = defineEmits(["update:zhanghao", "update:mima"]);
</script>

<style scoped>
input {
  border: 2px solid black;
  background-image: linear-gradient(45deg, #faccb8, #f1ab95, #eb8f75);
  height: 30px;
  font-size: 20px;
  color: white;
  margin-top: 10px;
}
</style>
