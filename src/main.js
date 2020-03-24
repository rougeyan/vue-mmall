import Vue from "vue";
import App from "./App.vue";
import router from "./router/routerDefencer";
import store from "./store";
import "@/assets/scss/common.scss"

// 自动通用组件注册
import '@/components/autoRegistComponents.js'

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
