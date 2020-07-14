// 同步事件
// 事件类型
const SET_DEPT = 'SET_DEPT'
const GET_USER_LOGIN_STATUS = 'GET_USER_LOGIN_STATUS'
const SEARCH_KEYWORDS = 'SEARCH_KEYWORDS'
const SEARCH_RESULT = 'SEARCH_RESULT'

const mutation = {
    // 回调函数，就处理 state 的方法啦
    // 获取用户登录信息;
    [GET_USER_LOGIN_STATUS](state,payload){
      state.userLoginStatus = payload.userLoginStatus;
    },
    
    // 搜索Model
    [SEARCH_KEYWORDS](state,payload){
      state.searchKeyWords = payload.searchKeyWords
    },
    [SEARCH_RESULT](state,payload){
      state.searchResult = payload.searchResult
    },

}

export default mutation;