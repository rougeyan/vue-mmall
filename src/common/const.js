export const checkValidUsername = "username";
export const checkValidEmail = "email";


export const topNav = [
  {
    enkey: "homepage",
    label: "首页",
    render: true,
    router: "/",
    children: []
  },
  {
    enkey: "login",
    label: "登陆",
    render: true,
    router: "/user/login",
    children: []
  },
  {
    enkey: "logout",
    label: "登出",
    render: true,
    router: "",
    children: []
  },
  {
    enkey: "regist",
    label: "注册",
    render: true,
    router: "/user/regist",
    children: []
  },
  {
    enkey: "shoppingCart",
    label: "我的购物车",
    render: true,
    router: "/myCart",
    children: []
  },
  {
    enkey: "myOrders",
    label: "我的订单",
    render: true,
    router: "/my/myOrder",
    children: []
  },
  {
    enkey: "myRevisePwd",
    label: "修改密码",
    render: true,
    router: "/my/myRevisePwd",
    children: []
  },
  {
    enkey: "myInfo",
    label: "我的信息",
    render: true,
    router: "/my/myInfo",
    children: []
  },
  {
    enkey: "menber-center",
    label: "管理员中心",
    render: true,
    router: "./about",
    children: []
  }
];