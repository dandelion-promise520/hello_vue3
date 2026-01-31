<template>
  <!-- html -->
  <div class="person">
    <h2>姓名:{{ name }}</h2>
    <h2>年龄:{{ age }}</h2>
    <button @click="changeName">修改姓名</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="showTel">查看联系方式</button>
    <hr />
    <h2>测试1:{{ a }}</h2>
    <h2>测试2:{{ c }}</h2>
    <button @click="b">测试</button>
  </div>
</template>

<script lang="ts">
/* js/ts */
export default {
  name: "Person", //组件名
  beforeCreate() {
    console.log("beforeCreate");
  },
  data() {
    return {
      a: 100,
      c: this.name,
    };
  },
  methods: {
    b() {
      console.log("b");
    },
  },
  setup() {
    console.log(this); //setup函数中的this是undefined，Vue3中已经弱化this了
    //数据,原来是写在data中的，此时的name、age、tel都不是响应式的数据
    let name = "念念"; //注意此时的name不是响应式的
    let age = 6; //注意此时的age不是响应式的
    let tel = "18379810069"; //注意此时的tel不是响应式的

    // 方法
    function changeName() {
      name = "等等"; //注意:这样修改name，页面是没有变化的
      console.log(name); //name确实改了，但name不是响应式的
    }
    function changeAge() {
      age += 1; //注意:这样修改age，页面是没有变化的
      console.log(age); //age确实改了，但age不是响应式的
    }
    function showTel() {
      alert(tel);
    }
    return { name, age, tel, changeAge, changeName, showTel };

    //setup的返回值可以使一个渲染函数
    //return () => '哈哈'
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
