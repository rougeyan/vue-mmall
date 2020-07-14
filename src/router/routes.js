import Home from "../views/Home.vue";
// import About from "../views/About.vue";
// import ComfirmPreOrder from "../views/ComfirmPreOrder.vue";
// import MyCart from "../views/MyCart.vue";
// import PersonalCenter from "../views/PersonalCenter.vue";
const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/Home",
    component: Home
  },
  {
    path: "/ComfirmPreOrder",
    name: '预下单',
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ComfirmPreOrder.vue")
  },
  {
    path: "/MyCart",
    name: '我的购物车',
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/MyCart.vue")
  },
  {
    path: "/User",
    name: '用户',
    component: () =>
      import(/* webpackChunkName: "about" */ "../layouts/BlankLayout.vue"),
    children: [
      {
        path: "/User/checkAnswer",
        name: '用户- 检查答案',
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/User/checkAnswer.vue"),
      },
      {
        path: "/User/forgetPwd",
        name: '用户 - 忘记密码',
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/User/forgetPwd.vue"),
      },
      {
        path: "/User/getUserQuestion",
        name: '用户- 获取用户校验问题',
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/User/getUserQuestion.vue"),
      },
      {
        path: "/User/login",
        name: '用户- 登录',
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/User/login.vue"),
      },
      {
        path: "/User/regist",
        name: '用户 - 注册',
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/User/regist.vue"),
      },
      {
        path: "/User/resetPwd",
        name: '用户- 重置密码',
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/User/resetPwd.vue"),
      },
      {
        path: "/User/revisePwd",
        name: '用户- 修改密码',
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/User/revisePwd.vue"),
      },
    ]
  },
  {
    path: "/PersonalCenter",
    name: '个人中心',
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/PersonalCenter.vue"),
    redirect: "/PersonalCenter/info", // 重定向到我的信息栏;
    children:[
      {
        path: "/PersonalCenter/info",
        name: '个人中心 - 我的信息',
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/PersonalCenter/info"),
      },
      {
        path: "/PersonalCenter/revisePwd",
        name: '个人中心 - 修改密码',
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/PersonalCenter/revisePwd.vue"),
      },
      {
        path: "/PersonalCenter/orders",
        name: '个人中心 - 订单信息',
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/PersonalCenter/orders.vue"),
      },
    ]
  },
  {
    path: "/ProductDetail/:pid",
    name: "关于我",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ProductDetail/_pid.vue")
  },
  {
    path: "/About",
    name: "关于我",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/Search",
    name: "搜索",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Search.vue")
  },
  {
    path: "/OrderPay",
    name: "支付",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/OrderPay.vue")
  },
  {
    path: "/error",
    name: "404",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/error.vue")
  },
];

export default routes;