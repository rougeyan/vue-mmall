import {processRoutes} from '@/router/router.js' // 路由

export const checkValidUsername = "username";
export const checkValidEmail = "email";

// 我需要在首页展示的菜单;
let navArrays= ["/myCenter.vue","/myCart.vue","/Home.vue","/About.vue", "/admin.vue","/user/login.vue","/user/regist.vue"];
let navArraysObj = [];

// 简易递归路由
let creatNavItemBaseObj = function(obj){
  let dealObj  = {};
  if(obj.children && obj.children.length>0){
    dealObj = {
      name: obj.meta && obj.meta.title?obj.meta.title: obj.name,
      path: obj.path,
      children: dealWithTopNavRouter(obj.children),
      render: true, // 
    }
  }else{
    // 递归出口;
    dealObj= {
      name: obj.meta && obj.meta.title?obj.meta.title: obj.name,
      path: obj.path,
      children: [],
      render: true,
    }
  }
  // 校验
  if(navArrays.includes(obj.name)){
    navArraysObj.push(dealObj)
  }
  return dealObj
}


function dealWithTopNavRouter(routes){
  let children = [];
  // 递归遍历;
  routes.map(item=>{
    children.push(creatNavItemBaseObj(item))
  })
  return children
}
// 这里有个弊端就是它 map是无序的;
dealWithTopNavRouter(processRoutes);
console.log(navArraysObj)

export const topNav = navArraysObj