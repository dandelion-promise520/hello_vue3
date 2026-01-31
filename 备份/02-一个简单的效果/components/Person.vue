<template>
  <!-- html -->
  <div class="person">
    <h2>姓名:{{ name }}</h2>
    <h2>年龄:{{ age }}</h2>
    <button @click="changeName">修改姓名</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="showTel">查看联系方式</button>
  </div>
</template>

<script lang="ts">
/* js/ts */
export default {
  name: "Person", //组件名
  data() {
    return {
      name: "念念",
      age: 6,
      tel: "18379810069",
    };
  },
  methods: {
    showTel() {
      alert(this.tel);
    },
    changeName() {
      this.name = "等等";
    },
    changeAge() {
      this.age += 1;
    },
  },
};
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
</style>
