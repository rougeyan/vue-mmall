import axios from "./index";
const BASE_HEAD = '/api';
const PATH_CART_LIST = '/cart/list.do'; // 查看购物车清单
const PATH_CART_ADD = '/cart/add.do'; // 添加购物车
const PATH_CART_UPDATE = '/cart/update.do'; // 修改数量购物车
const PATH_CART_DELETE_PRODS = '/cart/delete_product.do'; // 修改数量购物车
const PATH_CART_SELECT_ALL = '/cart/select_all.do'; // 全选
const PATH_CART_UNSELECT_ALL = '/cart/unselect_all.do'; // 全反选
const PATH_CART_SELECT_SINGLE = '/cart/select.do'; // 单选
const PATH_CART_UNSELECT_SINGLE = '/cart/unselect.do'; // 单反选
const PATH_CART_GET_CART_PRODS_COUNT = '/cart/get_cart_product_count.do'; // 查询购物车数量

// 前端统一拦截错误; ✔
function gResolve(errorMsg,data){
  return Promise.resolve({
    status: '1',
    msg: errorMsg?errorMsg: 'FE,参数错误',
    data: data?data:''
  })
}

// // 查看购物车清单 ✔
export function api_get_cart_list(params){  
  let url =  BASE_HEAD + PATH_CART_LIST;
  return new Promise(function(resolve,reject){
    axios.get(url).then(res => {
      resolve(res.data)
    },err=>{
      reject(err)
    });
  })
}
// 添加到购物车
export function api_cart_add_prod(params){  
  let url =  BASE_HEAD + PATH_CART_ADD;
  let {productId,count,userId} = params;
  if(!productId || !count){
    return gResolve()
  }
  return new Promise(function(resolve,reject){
    axios.post(url,{
      userId: userId,
      productId: productId,
      count:count
    }).then(res => {
      resolve(res.data)
    },err=>{
      reject(err)
    });
  })
}
// 移出购物车 ✔
// param是对象移除单个, 数组 [28,29,30]
export function api_cart_del_prod(params){  
  let url =  BASE_HEAD + PATH_CART_DELETE_PRODS;
  return new Promise(function(resolve,reject){
    axios.post(url,{
      productIds: params
    }).then(res => {
      resolve(res.data)
    },err=>{
      reject(err)
    });
  })
}
// 修改产品数量 ✔
export function api_cart_update_prod(params){  
  let url =  BASE_HEAD + PATH_CART_UPDATE;
  let {productId,count} = params;
  if(!productId || !count){
    return gResolve()
  }
  return new Promise(function(resolve,reject){
    axios.post(url,{
      productId: productId,
      count:count
    }).then(res => {
      resolve(res.data)
    },err=>{
      reject(err)
    });
  })
}
// 单项选择 ✔
export function api_select_single(params){  
  let url =  BASE_HEAD + PATH_CART_SELECT_SINGLE;
  return new Promise(function(resolve,reject){
    axios.post(url,{
      productId: params
    }).then(res => {
      resolve(res.data)
    },err=>{
      reject(err)
    });
  })
}
// 全项选择 ✔
export function api_select_all(){  
  let url =  BASE_HEAD + PATH_CART_SELECT_ALL;
  return new Promise(function(resolve,reject){
    axios.post(url).then(res => {
      resolve(res.data)
    },err=>{
      reject(err)
    });
  })
}
// 全项反选 ✔
export function api_unselect_all(){  
  let url =  BASE_HEAD + PATH_CART_UNSELECT_ALL;
  return new Promise(function(resolve,reject){
    axios.post(url).then(res => {
      resolve(res.data)
    },err=>{
      reject(err)
    });
  })
}
export function api_unselect_single(params){  
  let url =  BASE_HEAD + PATH_CART_UNSELECT_SINGLE;
  return new Promise(function(resolve,reject){
    axios.post(url,{
      productId: params
    }).then(res => {
      resolve(res.data)
    },err=>{
      reject(err)
    });
  })
}

// 获取购物车数量 ✔
export function api_get_cart_prods_count(params){  
  let url =  BASE_HEAD + PATH_CART_GET_CART_PRODS_COUNT;
  return new Promise(function(resolve,reject){
    axios.get(url).then(res => {
      resolve(res.data)
    },err=>{
      reject(err)
    });
  })
}