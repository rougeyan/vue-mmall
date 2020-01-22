import {regMethods,asyncMethods} from './regExp'
// 校验队列 promisefy 
export const promisifyArrayMethods = function(val,arr){
  // newArray
  return arr.map(item=>{
    // item
    return new Promise(function(resolve,reject){
      let fn = regMethods[`${item}`]; // 正则配方中是否存在该函数?
      let asyncFn = asyncMethods[`${item}`] // 判定是否异步;
      if(!fn && !asyncFn){
        throw new Error(`"${item}"该方法未定义`)
      }
      if(!!fn && !(fn instanceof Promise)){
        // 同步函数promisify化
        let result = fn(val);
        if(result.status){
          resolve(result)
        }else{
          reject(result)
        }
      }else if(!!asyncFn){
        // 异步函数 / promise返回
        return asyncFn(val).then(res=>{
          if(res.status==0){
            resolve({status:true,msg:res.msg})
          }else{
            reject({status:false,msg:res.msg})
          }
        })
      }
    })
  })
}
// 校验队列结果
export const promiseAllCheckedResult = function(arr){
  return Promise.all(arr).then(res=>{
    return res
  },err=>{
    console.log(err)
    return err
  })
}
/**
 * 防抖函数
 * @param {*} fun 回调函数
 * @param {*} delay 事件;
 * @param {*} syncFn 增加同步函数同步函数
 */
export const debounce = function(fun, delay,syncFun) {
  return function (args) {
      //获取函数的作用域和变量
      let that = this
      let _args = args;
      // 执行同步的函数
      if(syncFun && (typeof syncFun == 'function')){
        // 这是@input中的$event参数args塞回去syncFunc
        syncFun.call(that,args)
        // console.log(syncFun)
      }
      //每次事件被触发，都会清除当前的timeer，然后重写设置超时调用
      clearTimeout(fun.id)
      fun.id = setTimeout(function () {
          fun.call(that, _args)
          console.log("执行防抖函数");
      }, delay)
  }
}