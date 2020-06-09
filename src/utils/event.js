import eventbus from './eventbus.js'

const UPDATE_SEARCH_RESULT_LIST = "updateSearchResultList"

export function emitSearchResult(){
  eventbus.$emit(UPDATE_SEARCH_RESULT_LIST, ...arguments)
}
export function listenSearchResult(cb){
  /**
   * [eventbus多次触发的问题](https://www.jianshu.com/p/fde85549e3b0)
   * 大致理解为 切换路由的情况下 回重复绑定
   *  eventbus.$on()这个事件;
   * 
   * [[vue] EventBus注册在全局上时，路由切换时会重复触发事件，如何解决呢？](https://github.com/haizlin/fe-interview/issues/456?spm=a2c6h.13066369.0.0.26be3ad3rcVvJu)
   */
  // 每次监听前都 解绑之前的事件
  eventbus.$off(UPDATE_SEARCH_RESULT_LIST)
  eventbus.$on(UPDATE_SEARCH_RESULT_LIST,(target)=>{
    cb(target)
  })
}