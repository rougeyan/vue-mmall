import Vue from "vue";
import App from "./App.vue";
import router from "./router/routerDefencer";
import store from "./store";
import "@/assets/scss/common.scss"
import * as eventbus from '@/utils/event.js'


// 自动通用组件注册
import '@/components/autoRegistComponents.js'

Vue.config.productionTip = false;

// 全局引入eventbus
Vue.prototype.$EventBus = eventbus;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
