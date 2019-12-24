
import axios from "axios";
import Cookies from 'js-cookie'
const qs = require('qs');

// [axios文档](https://www.kancloud.cn/yunye/axios/234845)

// 对于post的请求使用form data
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么

  // 请求url带上?session_id=xxxxx;
  let sessioId = Cookies.get('session_id');
  if(!!sessioId){
    config.params={
      session_id: sessioId
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
  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});

export default axios;