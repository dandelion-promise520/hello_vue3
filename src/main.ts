import "./style.css";

// 应用App根组件
import VueDndKitPlugin from "@vue-dnd-kit/core";
import { createApp } from "vue";

import App from "./App.vue";
const app = createApp(App);

app.use(VueDndKitPlugin);

app.mount("#app");
