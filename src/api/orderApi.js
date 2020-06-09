import axios from "./index";
const BASE_HEAD = '/api';

// 预下单(选择配送地址页)
const PATH_GET_ORDER_CART_PRODUCT = '/order/get_order_cart_product.do';

const PATH_CREATE_ORDER = '/order/create.do'; // 创建订单
const PATH_CANCEL_ORDER = '/order/cancel.do'; // 取消订单
const PATH_ORDER_DETAIL = '/order/detail.do'; // 订单详情
const PATH_ORDER_LIST = '/order/list.do'; // 订单列表
const PATH_ORDER_PAY = '/order/pay.do'; // 支付宝支付: 生成二维码支付
const PATH_ORDER_PAY_QUERY = '/order/query_order_pay_status.do'; // 支付宝支付: 生成二维码支付

// 前端统一拦截错误; ✔
function gResolve(errorMsg,data){
  return Promise.resolve({
    status: '1',
    msg: errorMsg?errorMsg: 'FE,参数错误',
    data: data?data:''
  })
}
// 预下单
export function api_order_getOrderCartProds(params){  
  let url =  BASE_HEAD + PATH_GET_ORDER_CART_PRODUCT;
  return new Promise(function(resolve,reject){
    axios.post(url).then(res => {
      resolve(res.data)
    },err=>{
      reject(err)
    });
  })
}
// 创建订单
export function api_order_createOrder(params){  
  let url =  BASE_HEAD + PATH_CREATE_ORDER;
  return new Promise(function(resolve,reject){
    axios.post(url,{
      shippingId: params
    }).then(res => {
      resolve(res.data)
    },err=>{
      reject(err)
    });
  })
}
// 取消订单
export function api_order_cancelOrder(orderNo){  
  let url =  BASE_HEAD + PATH_CANCEL_ORDER;
  return new Promise(function(resolve,reject){
    axios.post(url,{
      orderNo: orderNo
    }).then(res => {
      resolve(res.data)
    },err=>{
      reject(err)
    });
  })
}
// 查看订单详情
export function api_order_orderDetail(orderNo){  
  let url =  BASE_HEAD + PATH_ORDER_DETAIL;
  return new Promise(function(resolve,reject){
    axios.post(url,{
      orderNo: orderNo
    }).then(res => {
      resolve(res.data)
    },err=>{
      reject(err)
    });
  })
}
// 查看订单列表
export function api_order_orderList(params){  
  let url =  BASE_HEAD + PATH_ORDER_LIST;
  return new Promise(function(resolve,reject){
    axios.post(url,{
      pageNum: params
    }).then(res => {
      resolve(res.data)
    },err=>{
      reject(err)
    });
  })
}
// 支付订单
export function api_order_payOrder(params){  
  let url =  BASE_HEAD + PATH_ORDER_PAY;
  return new Promise(function(resolve,reject){
    axios.post(url,{
      orderNo: params
    }).then(res => {
      resolve(res.data)
    },err=>{
      reject(err)
    });
  })
}

export function api_order_query_Order(params){  
  let url =  BASE_HEAD + PATH_ORDER_PAY_QUERY;
  return new Promise(function(resolve,reject){
    axios.post(url,{
      orderNo: params
    }).then(res => {
      resolve(res.data)
    },err=>{
      reject(err)
    });
  })
}
