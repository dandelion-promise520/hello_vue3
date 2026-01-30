import axios from "axios";
import { nanoid } from "nanoid";
import { defineStore } from "pinia";

export const useLoveTalkStore = defineStore("LoveTalk", {
  // 方法
  actions: {
    async getATalk() {
      const {
        data: { content: title },
      } = await axios.get("https://api.uomg.com/api/rand.qinghua?format=json");
      const obj = { id: nanoid(), title };
      this.LoveList.unshift(obj);
    },
  },
  // 数据
  state() {
    return {
      LoveList: JSON.parse(localStorage.getItem("talkList") as string) || [],
    };
  },
});
