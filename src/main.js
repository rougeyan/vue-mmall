import Vue from "vue";
import App from "./App.vue";
import router from "./router/routerDefencer";
import store from "./store/index.js";
import "@/assets/scss/common.scss"
import * as eventbus from '@/utils/event.js'

// 自动通用组件注册
import '@/components/autoRegistComponents.js'

// 自定义通用模态框
import modals from '@/components/global/globalModal.js'
Vue.use(modals)

Vue.config.productionTip = false;

// 全局引入eventbus
Vue.prototype.$EventBus = eventbus;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
