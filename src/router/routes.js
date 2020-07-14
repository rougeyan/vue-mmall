import Home from "../views/Home.vue";
// import About from "../views/About.vue";
// import ComfirmPreOrder from "../views/ComfirmPreOrder.vue";
// import MyCart from "../views/MyCart.vue";
// import PersonalCenter from "../views/PersonalCenter.vue";
const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/Home",
    component: Home,
    name: '首页',
    meta: {
      inTopNav: 1
    },
  },
  {
    path: "/ComfirmPreOrder",
    name: '预下单',
    component: () => import(/* webpackChunkName: "about" */ "../views/ComfirmPreOrder.vue")
  },
  {
    path: "/MyCart",
    name: '我的购物车',
    component: () => import(/* webpackChunkName: "about" */ "../views/MyCart.vue"),
    meta: {
      inTopNav: 4
    },
  },
  {
    path: "/User",
    name: '用户',
    component: () => import(/* webpackChunkName: "about" */ "../layouts/BlankLayout.vue"),
    children: [
      {
        path: "/User/checkAnswer",
        name: '检查答案',
        component: () => import(/* webpackChunkName: "about" */ "../views/User/checkAnswer.vue"),
      },
      {
        path: "/User/forgetPwd",
        name: '忘记密码',
        component: () => import(/* webpackChunkName: "about" */ "../views/User/forgetPwd.vue"),
      },
      {
        path: "/User/getUserQuestion",
        name: '获取用户校验问题',
        component: () => import(/* webpackChunkName: "about" */ "../views/User/getUserQuestion.vue"),
      },
      {
        path: "/User/login",
        name: '登录',
        component: () => import(/* webpackChunkName: "about" */ "../views/User/login.vue"),
        meta: {
          inTopNav: 2
        },
      },
      {
        path: "/User/regist",
        name: '注册',
        component: () => import(/* webpackChunkName: "about" */ "../views/User/regist.vue"),
        meta: {
          inTopNav: 3
        },
      },
      {
        path: "/User/resetPwd",
        name: '重置密码',
        component: () => import(/* webpackChunkName: "about" */ "../views/User/resetPwd.vue"),
      },
      {
        path: "/User/revisePwd",
        name: '修改密码',
        component: () => import(/* webpackChunkName: "about" */ "../views/User/revisePwd.vue"),
      },
    ]
  },
  {
    path: "/PersonalCenter",
    name: '个人中心',
    component: () => import(/* webpackChunkName: "about" */ "../views/PersonalCenter.vue"),
    redirect: "/PersonalCenter/info", // 重定向到我的信息栏;
    meta: {
      inTopNav: 5
    },
    children:[
      {
        path: "/PersonalCenter/info",
        name: '我的信息',
        component: () => import(/* webpackChunkName: "about" */ "../views/PersonalCenter/info"),
      },
      {
        path: "/PersonalCenter/revisePwd",
        name: '修改密码',
        component: () => import(/* webpackChunkName: "about" */ "../views/PersonalCenter/revisePwd.vue"),
      },
      {
        path: "/PersonalCenter/orders",
        name: '订单列表',
        component: () => import(/* webpackChunkName: "about" */ "../views/PersonalCenter/orders.vue"),
      },
      {
        path: "/PersonalCenter/order/:orderNo",
        name: '订单详情',
        component: () => import(/* webpackChunkName: "about" */ "../views/PersonalCenter/_orderNo.vue"),
        meta:{
          notInLeftNav:true
        }
      },
    ]
  },
  {
    path: "/ProductDetail/:pid",
    name: "产品详情",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/ProductDetail/_pid.vue")
  },
  {
    path: "/About",
    name: "关于我",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/Search",
    name: "搜索",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/Search.vue")
  },
  {
    path: "/OrderPay",
    name: "支付",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/OrderPay.vue")
  },
  {
    path: "/error",
    name: "404",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/error.vue"),
  },
];

export default routes;