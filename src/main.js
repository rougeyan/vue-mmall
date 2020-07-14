import Vue from "vue";
import App from "./App.vue";
// 自动路由
// import router from "./router/routerDefencer";
// 手动路由路由
import router from "./router/index";
import store from "./store/index.js";
import "@/assets/scss/common.scss"
import * as eventbus from '@/utils/event.js'

// 自动通用组件注册
import '@/components/autoRegistComponents.js'

// 自定义通用模态框
import modals from '@/components/global/globalModal.js'
Vue.use(modals)

Vue.config.productionTip = false;

// 全局引入eventbus(在跨路由组件每次都要销毁),适合与 单路由下通讯;
Vue.prototype.$EventBus = eventbus;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
