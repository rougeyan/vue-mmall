import axios from "./index";
// 测试接口;
export function tese_api(){
  let url =  '/api/test/testpost.do'
  return new Promise(function(resolve,reject){
    axios.post(url).then(res => {
      resolve(res.data)
    },err=>{
      reject(err)
    });
  })
}