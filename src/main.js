import { createApp } from "vue";
import App from "./App.vue";
import VuePlyr from "vue-plyr";
import "vue-plyr/dist/vue-plyr.css";
import router from "./router";

import "./assets/main.css";

const app = createApp(App);

app.use(router);

app.use(VuePlyr);

app.mount("#app");
