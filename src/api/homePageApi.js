import axios from "./index";
const BASE_HEAD = '/api';
const PATH_SEARCH_PRODUCTLIST_BY_KEYWORD_CATEGORYID = '/product/list.do'
const PATTH_CATEGROY = "/homePageView/get_category.do?categoryId=100002"

// 前端统一拦截错误; ✔
function gResolve(errorMsg,data){
  return Promise.resolve({
    status: '1',
    msg: errorMsg?errorMsg: 'FE,参数错误',
    data: data?data:''
  })
}
/**
 * 搜索产品 categoryId keywords
  example: 
  product/list.do?keyword=美的&categoryId=100001&orderBy=price_desc
 */
export function api_get_categorys(){
  let url =  BASE_HEAD + PATTH_CATEGROY
  return new Promise(function(resolve,reject){
    // 这里的param是一个完整的model;
    axios.get(url).then(res => {
      resolve(res.data)
    },err=>{
      reject(err)
    });
  })
}

export function api_categoryId_search(params){
  let url =  BASE_HEAD + PATH_SEARCH_PRODUCTLIST_BY_KEYWORD_CATEGORYID;
  let {keyword,categoryId ,orderBy} = params;
  if(!params || !(categoryId>=0)){
    return gResolve()
  }
  return new Promise(function(resolve,reject){
    // 这里的param是一个完整的model;
    axios.get(url,{
      "params":{
        categoryId: categoryId,
        orderBy: orderBy?orderBy:'price_desc',
      }
    }).then(res => {
      resolve(res.data)
    },err=>{
      reject(err)
    });
  })
}