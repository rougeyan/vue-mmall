import axios from "./index";

const BASE_HEAD = '/api';
const LOGIN_PATH = '/user/login.do'; // 登陆路径;
const LOGOUT_PATH = '/user/logout.do'; // 登出路径;

export function user_login(params){  
  let url =  BASE_HEAD + LOGIN_PATH;
  return new Promise(function(resolve,reject){
    axios.post(url,params).then(res => {
      resolve(res.data)
    },err=>{
      reject(err)
    });
  })
}

export function user_logout(){
  let url =  BASE_HEAD + LOGOUT_PATH ;
  return new Promise(function(resolve,reject){
    axios.post(url).then(res => {
      resolve(res.data)
    },err=>{
      reject(err)
    });
  })
}