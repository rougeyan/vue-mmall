<template>
  <div>
    <div class="regist-main">
      <p class="menberpage-title">{{title}}</p>
      <form>
        <ul>
          <li>
            <formInput 
              v-model="userName" 
              label="用户名"
              :blurCheckRules ="['isBlank']">
            </formInput>
          </li>
          <li>
            <formInput 
              v-model="userPwd" 
              label="密码"
              :blurCheckRules ="['isBlank']">
            </formInput>
          </li>
        </ul>
      </form>
      <p>登录状态</p>
      <p>{{loginStatus}}</p>
      <button @click="login">登陆</button>
      <button @click="logout">登出</button>
      <button @click="getUserinfo">用户信息</button>
    </div>
  </div>
</template>

<script>

import {api_user_login,
        api_user_logout,
        api_user_getUserInfo} from '@/api/userApi'
import {tese_api} from '@/api/testApi.js';
import {formMixin} from '@/common/formMixin';
 
import Cookies from 'js-cookie'
export default {
  data() {
    return {
      title: '登陆',
      userName: undefined,
      userPwd: undefined,
      loginStatus: '',
    }
  },
  created() {
    this.getUserinfo();
  },
  methods: {
    login(){
      var self = this;
      // 做非空校验
      api_user_login({
        "username": self.userName,
        "password": self.userPwd
        }).then(res=>{
        if(res.status == 0){
          self.loginStatus = JSON.stringify(res.msg);
        }else{
          self.loginStatus = ''
        }
      })
    },
    logout(){
      api_user_logout().then(res=>{
        if(res.status == 0){
          alert("登出成功")
        }
      })
    },
    // 存储登录状态
    setLoginStatusInStore(){

    },
    getUserinfo(){
      var self = this;
      api_user_getUserInfo().then(res=>{
        if(res.status == 0){
          self.loginStatus = JSON.stringify(res.data);
        }else{
          self.loginStatus = ''
        }
      })
    },
    testapi(){
      tese_api().then(res=>{
        console.log(res)
      })
    },
    testUserTest(){
      console.log(this.usertest);
    },
    handlerbbblur(e){
      console.log(e);
    }
  },
 
}
</script>
