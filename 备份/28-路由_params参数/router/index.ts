// 创建一个路由器，并暴露出去

// 第一步，引入createRouter
import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";
// 引入可能要呈现的组件
import Home from "@/views/Home.vue";
import Person from "@/views/Person.vue";
import Author from "@/views/Author.vue";
import Detail from "@/views/Detail.vue";

// 第二步，创建路由器
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: "shouye",
      path: "/home",
      component: Home,
    },
    {
      name: "renwu",
      path: "/person",
      component: Person,
    },
    {
      name: "zuozhe",
      path: "/author",
      component: Author,
      children: [
        {
          name: "jieshao",
          path: "detail/:id/:name/:works",
          component: Detail,
        },
      ],
    },
  ],
});

export default router;
