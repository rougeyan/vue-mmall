import {api_user_checkValid} from '@/api/userApi'
import {regMethods} from './regExp'
export const checkValidUsername = "username";
export const checkValidEmail = "email";

// 防抖函数
function debounce(fun, delay) {
  return function (args) {
      //获取函数的作用域和变量
      let that = this
      let _args = args
      //每次事件被触发，都会清除当前的timeer，然后重写设置超时调用
      clearTimeout(fun.id)
      fun.id = setTimeout(function () {
          fun.call(that, _args)
          // console.log("执行防抖函数");
      }, delay)
  }
}

// 传入的话格式;
const BASE_FORM_OBJECT ={
  value: undefined, // 值 传入即初始化;
  nessary: true, // 是否必要
  tips: '', // tips提示
  onChangeCheck: false,// ['normal',fn] 值的类型: boolen,[], 监听值变化 会在watch中创建
  blurCheckRulesType: false, //['isBlank',function(a,b){return true/false}] blurCheckRulesType: 格式判断; number || normall || email || password || phone || answer || radio || selected ... 反正是自定义的, 允许添加元素进行 先后顺序
  // 匹配规则,(先后顺序问题) 非空,自定义...
}
// 拓展例如 keyvalue格式的user: 'xiaoming'的对象模板
const extendNotObjectFormItem = function(val){
  return Object.assign({},BASE_FORM_OBJECT,{value:val})
}
// 合成完整的对象模板
const concatFullFormItem = function(val){
  return Object.assign({},BASE_FORM_OBJECT,val)
}
const userchecked = function(val){
  return api_user_checkValid({
    str: val,
    type: 'email'
  })
}

const defaultFormData = {
  userEmail: {
    value: "se7ne_886163.com",
    blurCheckRulesType: ['isBlank','emailFmt',userchecked],
  }, //简便格式
  userName: { // 具体
    value: "xiaoming",
  },
  userPwd: undefined, // 密码
  userPwdsec:undefined, // 二次密码确认
  userPhone: undefined, // 电话号码
  userQues: 'question??', // 问题
  userAnswer: 'answer', // 答案
}
const formDataExtend = function(data){
  let rdata = {};
  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      const element = data[key]; // 值
      // 非 Object
      if(typeof(element) !="object" && JSON.stringify(element) != "{}"){
        rdata[`${key}`] = extendNotObjectFormItem(element)
      }else{
        // Object
        rdata[`${key}`] = concatFullFormItem(element)
      }
    }
  }
  return rdata
}

// 依据form表单注入watch;
const injectFormWatchData = function(data){
  let obj = {};
  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      const element = data[key];
      // 这里还可以抽象化 判定是否deepWatch;
      // 这里判定Boolean
      if(!!element.onChangeCheck || element.onChangeCheck instanceof Array){
        obj[`${key}.value`] = {
            handler:injectOnChangeMethods(key)
        };
      }
    }
  }
  return obj
}
// 注入wather带类型的hanlder
const injectOnChangeMethods = function (type){
  // 这里加入节流防抖函数去执行;
  return debounce(function(newVal,oldVal) {
    var self = this;
    self.onChangeHandler(type,newVal,oldVal);
  },500)
}

// 使得数组内每个函数都promise化
const promisifyArrayMethods = function(val,arr){
  // newArray
  return arr.map(item=>{
    // item
    return new Promise(function(resolve,reject){
      let fn = regMethods[`${item}`]; // 正则配方中是否存在该函数?
      if(!!fn && !(fn instanceof Promise)){
        // 同步函数promisify化
        let result = fn(val);
        if(result.status){
          resolve(result)
        }else{
          reject(result)
        }
      }else{
        // 异步函数 / promise返回
        return item(val).then(res=>{
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
/**
 * 因为方法是强关联性的, 只有一个错误,都会报错;
 * 待优化的是, 尝试使用reduce去控制一旦出错即退出程序, 并不会继续执行, 这就涉及队列的问题??
 * 目前使用Promise.all 即使执行也不推出,所有方法都会执行;
 */
const PromiseAlldoCheckMethodsFromArr = function(arr){
  return Promise.all(arr).then(res=>{
    console.log(res)
    return res
  },err=>{
    console.log(err)
    return err
  })
}



// 导出;
export const formMixin = function(val){
  let data;
  if(typeof(val) == "object" && JSON.stringify(val) != "{}"){
    data = formDataExtend(val)
    return {
      data() {
          return {
            ...data,
            checkValidUsername: checkValidEmail,
            checkValidEmail: checkValidUsername
          }
      },
      created() {
        
      },
      watch: injectFormWatchData(data),
      methods: {
        /**
         * 失焦校验;
         * @param {*类型} type 
         * @param {*是否必须} necessary  默认为必须
         */
        blurCheck(k){
          var self = this;
          if(!k){
            throw new Error("务必传参");
            return
          }
          var checkRulesArr = self[`${k}`].blurCheckRulesType;
          // 判定数组及长度;
          if(checkRulesArr && checkRulesArr.length && checkRulesArr.length>0){
            PromiseAlldoCheckMethodsFromArr.call(self,promisifyArrayMethods(self[`${k}`].value,checkRulesArr)).then(res=>{
              self[`${k}`].tips = res.msg?res.msg:undefined;
            })
          }
        },
        // 数值变化的时候进行校验;
        onChangeHandler(k,newValue,oldValue){
          var self = this;
          // 这里的data 即 this.data.
          console.log("============ data ============ ")
          console.log(self[k])
          console.log("============ args ============ ")
          console.log(data,newValue,oldValue)
          var checkRulesArr = self[`${k}`].onChangeCheck;
          // 判定数组及长度;
          if(checkRulesArr && checkRulesArr.length && checkRulesArr.length>0){
            PromiseAlldoCheckMethodsFromArr.call(self,promisifyArrayMethods(self[`${k}`].value,checkRulesArr)).then(res=>{
              self[`${k}`].tips = res.msg?res.msg:undefined;
            })
          }
        },
        // 提交表单的情况下统一校验;
        submitFormCheck(){
          // 统一校验
          console.log(formDataExtend(val));
        },
      },
    };
  }else{
    return {}    
  }
}