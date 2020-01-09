import axios from "./index";
const BASE_HEAD = '/api';
const PATH_LOGIN = '/user/login.do'; // 登陆路径;
const PATH_LOGOUT = '/user/logout.do'; // 登出路径;
const PATH_GET_USER_INFO = '/user/get_user_info.do'; // 获取登陆信息
const PATH_REGIST = '/user/register.do'; // 注册
const PATH_CHECK_VALID = '/user/checkValid.do'; // 检查用名  邮箱
const PATH_FORGET_GET_QUESTION = '/user/forget_get_question.do'; // 忘记密码 获取校验问题
const PATH_FORGET_CHECK_ANSWER = '/user/forget_check_answer.do'; // 忘记密码 检查密码答案
const PATH_FORGET_RESET_PASSWORD = '/user/forget_reset_password.do'; // 重设密码 具备时效性;
const PATH_RESET_PASSWORD = '/user/reset_password.do'; // 登陆状态下重置密码
const PATH_UPDATE_INFO = '/user/update_information.do'; // 更新个人信息;
// 登陆
export function user_login(params){  
  let url =  BASE_HEAD + PATH_LOGIN;
  return new Promise(function(resolve,reject){
    axios.post(url,params).then(res => {
      resolve(res.data)
    },err=>{
      reject(err)
    });
  })
}
// 登出
export function user_logout(){
  let url =  BASE_HEAD + PATH_LOGOUT;
  return new Promise(function(resolve,reject){
    axios.post(url).then(res => {
      resolve(res.data)
    },err=>{
      reject(err)
    });
  })
}
// 获取用户信息
export function user_getUserInfo(){
  let url =  BASE_HEAD + PATH_GET_USER_INFO;
  return new Promise(function(resolve,reject){
    axios.get(url).then(res => {
      resolve(res.data)
    },err=>{
      reject(err)
    });
  })
}
// 注册
export function user_regist(params){
  let url =  BASE_HEAD + PATH_REGIST;
  return new Promise(function(resolve,reject){
    let {userEmail,userName,userPwdsec,userPhone,userQues,userAnswer} = params;
    // 这里的param是一个完整的model;
    axios.post(url,{
      password: userPwdsec,
      username: userName,
      email: userEmail,
      phone: userPhone,
      question: userQues,
      answer: userAnswer
    }).then(res => {
      resolve(res.data)
    },err=>{
      reject(err)
    });
  })
}
// 检查用户名 邮箱;
export function user_checkValid(params){
  let url =  BASE_HEAD + PATH_CHECK_VALID;
  return new Promise(function(resolve,reject){
    axios.post(url,params).then(res => {
      resolve(res.data)
    },err=>{
      reject(err)
    });
  })
}
// 获取校验问题;
export function user_forgetGetQuestion(params){
  let url =  BASE_HEAD + PATH_FORGET_GET_QUESTION;
  return new Promise(function(resolve,reject){
    axios.post(url,params).then(res => {
      resolve(res.data)
    },err=>{
      reject(err)
    });
  })
}
// 校验问题答案;
export function user_forgetCheckAnswer(params){
  let url =  BASE_HEAD + PATH_FORGET_CHECK_ANSWER;
  return new Promise(function(resolve,reject){
    axios.post(url,params).then(res => {
      resolve(res.data)
    },err=>{
      reject(err)
    });
  })
}
// 答案正确, 重设的密码
export function user_forgetResetPassword(params){
  let url =  BASE_HEAD + PATH_FORGET_RESET_PASSWORD;
  return new Promise(function(resolve,reject){
    axios.post(url,params).then(res => {
      resolve(res.data)
    },err=>{
      reject(err)
    });
  })
}
// 登陆状态下 修改密码;
export function user_resetPassword(params){
  let url =  BASE_HEAD + PATH_RESET_PASSWORD;
  return new Promise(function(resolve,reject){
    axios.post(url,params).then(res => {
      resolve(res.data)
    },err=>{
      reject(err)
    });
  })
}
// 登陆状态下 更新个人信息
export function user_updateInfo(params){
  let url =  BASE_HEAD + PATH_UPDATE_INFO;
  return new Promise(function(resolve,reject){
    axios.post(url,params).then(res => {
      resolve(res.data)
    },err=>{
      reject(err)
    });
  })
}