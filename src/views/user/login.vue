<template>
  <UserLayout>
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
              inputType="password"
              :blurCheckRules ="['isBlank']">
            </formInput>
          </li>
        </ul>
      </form>
      <button @click="loginbtn">登陆</button>
      <router-link to="/user/getUserQuestion">
        <p class="forgetPasswod">忘记密码?</p>
      </router-link>
      <!-- <button @click="logout">登出</button>
      <button @click="getUserinfo">用户信息</button> -->
    </div>
  </UserLayout>
</template>

<script>

import {api_user_login,
        api_user_logout,
        api_user_getUserInfo} from '@/api/userApi';
import {redirectByLoginedMixin} from '@/mixins/redirectByLoginedMixin';
import {loginedMixin} from '@/mixins/loginMixin';

export default {
  mixins: [redirectByLoginedMixin,loginedMixin],
  data() {
    return {
      title: '登陆'
    }
  },
  created() {
    this.checkLoginStatusRedirect();
    this.getUserInfo();
  },
  methods: {
    loginbtn(){
      var self = this;
      this.login().then(res=>{
        if(res.status == 0){
          self.$toast({
            title:'', 
            style: 'success-tips',
            content: res.msg,
            mask: true,
            autoHide: 2000,
          }).then(res=>{
            self.checkLoginStatusRedirect();
          })
        }else{
          self.$toast({
            title:'',
            style: 'error-tips',
            content: res.msg,
            mask: true, 
            autoHide: 2000,
          })
        }
      })
    },
    // logout(){
    //   api_user_logout().then(res=>{
    //     if(res.status == 0){
    //       alert("登出成功")
    //     }
    //   })
    // },
  },
 
}
</script>
