<template>
  <!-- html -->
  <div class="person">
    <ul>
      <li v-for="item in list" :key="item.id">{{ item.name }} -- {{ item.age }}岁</li>
    </ul>
  </div>
</template>

<script lang="ts" setup name="Person">
import { type Persons } from "@/types";

// 只接受list
// defineProps(['list'])

// 接受list + 限制类型
// defineProps<{ list: Persons }>()

// 接受list + 限制类型 + 限制必要性 + 指定默认值
withDefaults(defineProps<{ list?: Persons }>(), {
  list: () => [{ id: "ashaas01", name: "朱宝宝", age: 18 }],
});

// // 接受as，并且将props保存起来
// const we = defineProps(["a", "b"]);
// console.log(we.a, we.b);
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
