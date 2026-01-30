import { defineStore } from "pinia";

export const useChild2Store = defineStore("Child2", {
  // 方法
  actions: {
    SendToy(value: string) {
      this.toy = value;
    },
  },
  // 数据
  state() {
    return {
      toy: "",
      phone: "小米",
      book: 6,
    };
  },
});
