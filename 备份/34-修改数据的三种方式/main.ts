//引入creatApp用于创建应用
import { createApp } from "vue";

// 引入pinia
import { createPinia } from "pinia";
// 应用App根组件
import App from "./App.vue";

// 创建Pinia
const pinia = createPinia();
const app = createApp(App);
app.use(pinia);
app.mount("#app");
