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
   */
  eventbus.$off(UPDATE_SEARCH_RESULT_LIST)
  eventbus.$on(UPDATE_SEARCH_RESULT_LIST,(target)=>{
    cb(target)
  })
}