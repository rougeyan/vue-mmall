import axios from "./index";
const BASE_HEAD = '/api';
const PATH_SHIPPING_ADD = '/shipping/add.do'; // 添加
const PATH_SHIPPING_DEL = '/shipping/del.do' // 删除
const PATH_SHIPPING_UPDATE = '/shipping/update.do' // 更新
const PATH_SHIPPING_SELECT = '/shipping/select.do' // 选择
const PATH_SHIPPING_LIST = '/shipping/list.do' // 地址列表

// 前端统一拦截错误; ✔
function gResolve(errorMsg,data){
  return Promise.resolve({
    status: '1',
    msg: errorMsg?errorMsg: 'FE,参数错误',
    data: data?data:''
  })
}

// // 前端检查参数
// function feCheckParams(allArgsKeyArr,params){
//   var assignParams = Object.assign({},params);

//   switch(表达式) {
//     case n:
//        代码块
//        break;
//     case n:
//        代码块
//        break;
//     default:
//        默认代码块
//   }
// }

// 添加地址
export function api_shipping_add(params){  
  let url =  BASE_HEAD + PATH_SHIPPING_ADD;
  let {userId,receiverName ,receiverPhone,receiverMobile,receiverProvince,receiverCity,receiverDistrict,receiverAddress,receiverZip} = params;
  if(!userId || !receiverName || (!receiverPhone && !receiverMobile) || !receiverProvince || !receiverCity || !receiverAddress || !receiverZip ){
    return gResolve()
  }
  return new Promise(function(resolve,reject){
    axios.post(url,{
      userId: userId,
      receiverName:receiverName,
      receiverPhone:receiverPhone,
      receiverMobile:receiverMobile,
      receiverProvince:receiverProvince,
      receiverCity:receiverCity,
      receiverDistrict: receiverDistrict,
      receiverAddress:receiverAddress,
      receiverZip:receiverZip
    }).then(res => {
      resolve(res.data)
    },err=>{
      reject(err)
    });
  })
}
// 删除地址 :id
export function api_shipping_del(params){
  let url =  BASE_HEAD + PATH_SHIPPING_DEL;
  return new Promise(function(resolve,reject){
    // 这里的param是一个完整的model;
    axios.post(url,{
      shippingId:params
    }).then(res => {
      resolve(res.data)
    },err=>{
      reject(err)
    });
  })
}

// 更新
export function api_shipping_update(params){  
  let url =  BASE_HEAD + PATH_SHIPPING_UPDATE;
  let {shippingId,receiverName ,receiverPhone,receiverMobile,receiverProvince,receiverCity,receiverAddress,receiverZip} = params;
  if(!shippingId || !receiverName || (!receiverPhone && !receiverMobile) || !receiverProvince || !receiverCity || !receiverAddress || !receiverZip ){
    return gResolve()
  }
  return new Promise(function(resolve,reject){
    axios.post(url,{
      id: shippingId,
      receiverName:receiverName,
      receiverPhone:receiverPhone,
      receiverMobile:receiverMobile,
      receiverProvince:receiverProvince,
      receiverCity:receiverCity,
      receiverAddress:receiverAddress,
      receiverZip:receiverZip
    }).then(res => {
      resolve(res.data)
    },err=>{
      reject(err)
    });
  })
}


// 选择 :id
export function api_shipping_selected(params){
  let url =  BASE_HEAD + PATH_SHIPPING_SELECT;
  return new Promise(function(resolve,reject){
    // 这里的param是一个完整的model;
    axios.post(url,{
      shippingId: params
    }).then(res => {
      resolve(res.data)
    },err=>{
      reject(err)
    });
  })
}

// 列表
export function api_shipping_list(params){
  let url =  BASE_HEAD + PATH_SHIPPING_LIST;
  return new Promise(function(resolve,reject){
    // 这里的param是一个完整的model;
    axios.post(url,{}).then(res => {
      resolve(res.data)
    },err=>{
      reject(err)
    });
  })
}