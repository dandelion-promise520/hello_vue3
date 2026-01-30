import { defineStore } from "pinia";

export const useCountStore = defineStore("Count", {
  // actions里面放置的是一个一个的方法，用于响应组件中的“动作”
  actions: {
    increment(value: number) {
      // console.log("increment被调用了", value);
      if (this.sum < 10) {
        this.sum += value;
      }
    },
    reduce(value: number) {
      this.sum -= value;
    },
  },
  // 真正存储数据的地方
  state() {
    return {
      sum: 1,
      EnglishName: "jiaozuo",
      brand: "焦作",
    };
  },
  getters: {
    bigSum: (state) => state.sum * 10,
    upperName(): string {
      return this.EnglishName.toUpperCase();
    },
  },
});
