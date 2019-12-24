import Vue from "vue";
import App from "./App.vue";
import router from "./router/routerDefencer";
import store from "./store";
import "@/assets/scss/global.scss"

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
