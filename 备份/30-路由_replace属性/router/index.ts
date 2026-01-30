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
          path: "detail",
          component: Detail,
          // 第一种写法:将路由收到的所有 params 参数作为props传给路由组件
          // props: true,

          // 第二种写法:函数写法，可以自己决定将什么作为props给路由组件
          props(route) {
            return route.query;
          },

          // 第三种写法:对象写法，可以自己决定将什么作为props给路由组件
          // props: {
          //   a: 100,
          //   b: 200,
          //   c: 300,
          // },
        },
      ],
    },
  ],
});

export default router;
