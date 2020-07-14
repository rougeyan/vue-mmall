import Vue from "vue";
import App from "./App.vue";
// 自动路由
// import router from "./router/routerDefencer";
// 手动路由路由
import router from "./router/index";
import store from "./store/index.js";
import "@/assets/scss/common.scss"
import * as eventbus from '@/utils/event.js'



// 自动注册 框架及通用组件
import '@/layouts/autoRegistLayouts.js'
import '@/components/autoRegistComponents.js'


// 简易模态框(非复杂自定义内容)
import modals from '@/components/simpleModal/simpleModal.js'
Vue.use(modals)

Vue.config.productionTip = false;

// 全局引入eventbus(在跨路由组件每次都要销毁),eventbus只同一路由下 非父子通讯;
Vue.prototype.$EventBus = eventbus;


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
