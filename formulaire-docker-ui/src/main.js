import { createApp } from "vue";
import router from "../src/router/index.js";
import App from "./App.vue";
import "./style.css";

const app = createApp(App);
app.use(router);
createApp(App).mount("#app");
