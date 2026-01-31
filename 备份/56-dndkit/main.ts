import VueDndKitPlugin from "@vue-dnd-kit/core";
import { createApp } from "vue";

// 应用App根组件
import App from "./App.vue";

const app = createApp(App);

app.use(VueDndKitPlugin);

app.mount("#app");
