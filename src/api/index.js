import axios from "axios";
import Cookies from 'js-cookie'
import loginModal from '@/components/global/loginModal.js'
const qs = require('qs');


// [axios文档](https://www.kancloud.cn/yunye/axios/234845)

const TOKEN_KEY = 'access_token';

// [http协议的RequestPayload和FormData的区别](https://www.cnblogs.com/xuzhudong/p/8487119.html)

// 对于post的请求使用form data
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// axios.defaults.headers.post['Content-Type'] = 'application/json';
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么

  // 请求url带上?session_id=xxxxx;
  // let token = Cookies.get(TOKEN_KEY);
  let token = Cookies.get("access_token");
  if(!!token){
    config.params={
      ...config.params,
      [TOKEN_KEY]:token
    }
  }
  // 对与post请求 使用的是Form Data 而不是 Requset Payload 因此需要序列化参数
  if(config.method == "post"){
    // post请求序列化
    config.data = qs.stringify(config.data);
  }
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  // C端用户未登录
  if(response.data.status == 100005){
    loginModal.open({
      title: '用户请登录',
      maskClickClose: true,
    })
    // 调用登录弹窗
  }
  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});

export default axios;