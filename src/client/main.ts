import { createApp } from "vue";
import App from "./App.vue";
import { createES } from "..";

const app = createApp(App);
const es = createES();
app.use(es);
app.mount("#app");
