import { defineStore } from "pinia";
import { computed, ref } from "vue";

// 选项式写法
// export const useCountStore = defineStore("Count", {
//   // actions里面放置的是一个一个的方法，用于响应组件中的“动作”
//   actions: {
//     increment(value: number) {
//       // console.log("increment被调用了", value);
//       if (this.sum < 10) {
//         this.sum += value;
//       }
//     },
//     reduce(value: number) {
//       this.sum -= value;
//     },
//   },
//   // 真正存储数据的地方
//   state() {
//     return {
//       sum: 1,
//       EnglishName: "jiaozuo",
//       brand: "焦作",
//     };
//   },
//   getters: {
//     bigSum: (state) => state.sum * 10,
//     upperName(): string {
//       return this.EnglishName.toUpperCase();
//     },
//   },
// });

// 组合式写法
export const useCountStore = defineStore("Count", () => {
  // state在vue3中使用ref代替
  let sum = ref(1);
  let EnglishName = ref("jiaozuo");
  let brand = ref("焦作");

  // actions 定义为函数即可
  const increment = (value: number) => {
    console.log("increment被调用了", value);
    if (sum.value < 10) {
      sum.value += value;
    }
  };
  const reduce = (value: number) => {
    sum.value -= value;
  };

  // getters在vue3中使用计算属性computed即可
  const bigSum = computed(() => {
    return sum.value * 10;
  });
  const upperName = computed(() => {
    return EnglishName.value.toUpperCase();
  });
  return { sum, EnglishName, brand, increment, reduce, bigSum, upperName };
});
