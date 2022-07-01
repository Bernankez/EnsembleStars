import { createApp } from "vue";
import App from "./App.vue";
import es from "@/index";

const app = createApp(App);
app.use(es);
app.mount("#app");
