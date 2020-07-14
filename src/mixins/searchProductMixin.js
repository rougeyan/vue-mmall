// 登录及重定向;
import { mapState } from "vuex";
import {api_user_login,api_user_getUserInfo} from '@/api/userApi';

export const loginedMixin = {
  data() {
    return {
      userName:'',
      userPwd: '',
    }
  },
  computed :{
    ...mapState({
      userLoginStatus: state =>state.userLoginStatus
    })
  },
  // 因为我是写在mixin上,所以要执行回调最好通过 return 可以使用then()做返回结果回调;
  methods: {
    login(){
      var self = this;
      // 返回promise 自定义做重定向;
      return api_user_login({
        "username": self.userName,
        "password": self.userPwd
        }).then(res=>{
        if(res.status == 0){
          // 执行获取用户信息
          self.getUserInfo()
          return res;
        }else{
          return res
        }
      })
    },
    getUserInfo(){
      var self = this;
      return api_user_getUserInfo().then(res=>{
        if(res.status == 0){
          self.saveLoginStatusInStore(res.data);
          return res.data
        }
      },err=>err)
    },
    // 存储状态
    saveLoginStatusInStore(data){
      this.$store.commit('GET_USER_LOGIN_STATUS', {
        userLoginStatus: data
      })
    },
    // 移除登录状态
    removeLoginStatusInStore(){
      this.$store.commit('GET_USER_LOGIN_STATUS', {
        userLoginStatus: null
      })
    }
  },
};