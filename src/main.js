import Vue from "vue";
import App from "./App.vue";
import router from "./router/routerDefencer";
import store from "./store";
import "@/assets/scss/common.scss"

// 一劳永逸的通用组件注册
import '@/components/common.js'

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
