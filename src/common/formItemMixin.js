import {user_checkValid} from '@/api/userApi'
import {regMethods,asyncMethods} from './regExp'
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
          console.log("执行某个的防抖函数");
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
// 使得数组内每个函数都promise化

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
export const formMixin = {
  data() {
      return {
        ...data,
        checkValidUsername: checkValidEmail,
        checkValidEmail: checkValidUsername
      }
  },
  created() {
    
  },
  // watch: injectFormWatchData,
  methods: {
  },
};