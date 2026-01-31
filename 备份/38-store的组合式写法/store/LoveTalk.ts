import axios from "axios";
import { nanoid } from "nanoid";
import { defineStore } from "pinia";
import { reactive } from "vue";

// 选项式写法
/* export const useLoveTalkStore = defineStore("LoveTalk", {
  actions: {
    async getATalk() {
      const {
        data: { content: title },
      } = await axios.get("https://api.uomg.com/api/rand.qinghua?format=json");
      const obj = { id: nanoid(), title };
      this.LoveList.unshift(obj);
    },
  },
  state() {
    return {
      LoveList: JSON.parse(localStorage.getItem("talkList") as string) || [],
    };
  },
}); */

// 组合式写法
export const useLoveTalkStore = defineStore("LoveTalk", () => {
  const LoveList = reactive(JSON.parse(localStorage.getItem("talkList") as string) || []);
  async function getATalk() {
    const {
      data: { content: title },
    } = await axios.get("https://api.uomg.com/api/rand.qinghua?format=json");
    const obj = { id: nanoid(), title };
    LoveList.unshift(obj);
  }

  return { LoveList, getATalk };
});
