import "./assets/main.css";
import "remixicon/fonts/remixicon.css";
import "lineicons/web-font/lineicons.css";
import "vue-toastification/dist/index.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import Toast from "vue-toastification";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

const options = {
  position: "top-right",
  timeout: 5000,
  closeOnClick: true,
  pauseOnFocusLoss: true,
  pauseOnHover: true,
  draggable: true,
  draggablePercent: 0.6,
  showCloseButtonOnHover: false,
  hideProgressBar: true,
  closeButton: false,
  icon: true,
  rtl: false,
};

app.use(createPinia());
app.use(router);
app.use(Toast, options);

app.mount("#app");
