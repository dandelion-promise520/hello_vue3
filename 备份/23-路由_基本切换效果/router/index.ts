// 创建一个路由器，并暴露出去

// 第一步，引入createRouter
import { createRouter, createWebHistory } from "vue-router";

import Author from "@/components/Author.vue";
// 引入可能要呈现的组件
import Home from "@/components/Home.vue";
import Person from "@/components/Person.vue";

// 第二步，创建路由器
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/home",
      component: Home,
    },
    {
      path: "/person",
      component: Person,
    },
    {
      path: "/author",
      component: Author,
    },
  ],
});

export default router;
