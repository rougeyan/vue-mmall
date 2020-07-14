// 旧式代码 源vue-router的代码
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import routes from './routes';

Vue.use(VueRouter);
// 修复 Navigating to current location ("/xxx") is not allowed 的问题
const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error)
}

// const routes = [
//   {
//     path: "/",
   
//     component: Home
//   },
//   {
//     path: "/about",
//     name: "about",
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () =>
//       import(/* webpackChunkName: "about" */ "../views/About.vue")
//   }
// ];

const router = new VueRouter({
  routes,
  mode: 'history'
});

export default router;
