<template>
  <div>
    <div class="regist-main">
      <p class="title">{{bdTitle}}</p>
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
          <li>
            <!-- <formInput 
              v-model="usertestvalue" 
              @blur="handlerbbblur"
              :inputCheckRules="['isBlank','isEmail','userCheckValid']">
            </formInput></li> -->
          <li>
            <span>验证码:</span>
            <img :src="imgsrc" alt="">
          </li>
        </ul>
      </form>
      <button @click="login">登陆</button>
      <button @click="logout">登出</button>
      <button @click="getUserinfo">用户信息</button>
      <button @click="testapi">测试接口提交</button>
      <button @click="testUserTest">testUserTest</button>
    </div>
  </div>
</template>

<script>

import {user_login,
        user_logout,
        user_getUserInfo} from '@/api/userApi'
import {tese_api} from '@/api/testApi.js';
import {formMixin} from '@/common/formMixin';
import formInput from '@/components/formInput';
export default {
  data() {
    return {
      userName: undefined,
      userPwd: undefined,
      btnLock: false, // 按钮锁 防止多次提交;
      bdTitle: '登陆',
      imgsrc: `/api/code/get_verify_image_code.do?timestamp=${new Date().getTime()}`,
      usertestvalue:''
    }
  },
  created() {
  },
  methods: {
    login(){
      var self = this;
      if(self.btnLock) return
      self.btnLock = true;
      // 做非空校验
      user_login({
        "username": self.userName,
        "password": self.userPwd
        }).then(res=>{
        self.btnLock = false;
        if(res.status == 0){
          alert(res.msg)
        }else{
          alert(res.msg)
        }
      })
    },
    logout(){
      user_logout().then(res=>{
        if(res.status == 0){
          alert("登出成功")
        }
      })
    },
    getUserinfo(){
      user_getUserInfo().then(res=>{
        console.log(res.data)
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
  components: {
    formInput
  },
}
</script>
