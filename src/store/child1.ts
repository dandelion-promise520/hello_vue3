import { defineStore } from "pinia";

export const useChild1Store = defineStore("child1", {
  state() {
    return {
      toy: "芭比公主",
      book: 4,
    };
  },
});
