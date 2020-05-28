import {api_user_checkValid} from '@/api/userApi'

// 正则表达式校验 (同步)
export const regMethods = {
  // 非空(stringBlank)
  isBlank: function(val){
    var reg = !!val && val != undefined && val != null && val != '';
      return {
        status: reg, // 验证通过返回true
        msg: reg?'':"输入框不能为空"
      }
  },
  // 用户名
  usernameFmt: function(){
    var reg = new RegExp(/^[a-zA-Z0-9_-]{4,16}$/,'i');
    return {
      status: reg.test(val),
      msg: reg.test(val)?'用户名格式正确':"用户名格式错误"
    }
  },
  // 邮箱;
  isEmail: function(val){
    var reg = new RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/, 'i');
    return {
      status: reg.test(val),
      msg: reg.test(val)?'邮箱格式正确':"邮箱格式错误"
    }
  },
  isPhone: function(val){
    var reg = RegExp(/^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-7|9])|(?:5[0-3|5-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1|8|9]))\d{8}$/)
    return {
      status: reg.test(val),
      msg: reg.test(val)?'手机格式正确':"手机格式错误"
    }
  },
  // 密码强度
  passwordStrongFmt: function(va){
    // todo
  }
};
// 校验方法(异步)
// 请求服务器, 例如模糊匹配..用户名校验等等
export const asyncMethods = {
  usernameCheckValid: function(val){
    return api_user_checkValid({
      str: val,
      type: 'username'
    })
  },
  emailCheckValid: function(val){
    return api_user_checkValid({
      str: val,
      type: 'email'
    })
  }
}