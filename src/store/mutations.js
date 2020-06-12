// 同步事件
// 事件类型
const SET_DEPT = 'SET_DEPT'
const GET_USER_LOGIN_STATUS = 'GET_USER_LOGIN_STATUS'

const mutation = {
    // 回调函数，就处理 state 的方法啦
    [SET_DEPT](state, payload) {
        state.dept = payload.dept;
    },
    // 获取用户登录信息;
    [GET_USER_LOGIN_STATUS](state,payload){
      state.userLoginMsg = payload.userLoginMsg;
      state.userLoginStatus = payload.userLoginStatus;
    }
}

export default mutation;