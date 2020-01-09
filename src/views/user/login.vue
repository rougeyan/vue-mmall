<template>
  <div>
    <div class="regist-main">
      <p class="title">{{bdTitle}}</p>
      <form>
        <ul>
          <li>
            <label :class="{'nessary':userName.nessary}">用户名：</label>
            <input type="text" placeholder="请输入用户名" v-model="userName.value" 
            @blur="blurCheck('userName')"/>
            <div class="error-tips" v-if="userName.tips">{{userName.tips}}</div>
          </li>
          <li>
            <label :class="{'nessary':userPwd.nessary}">密码：</label>
            <input type="password" placeholder="请输入密码" v-model="userPwd.value" @blur="blurCheck('userPwd')" />
            <div class="error-tips" v-if="userPwd.tips">{{userPwd.tips}}</div>
          </li>
          <li>
            <formItemLi 
              v-model="usertest.value" 
              @blur="handlerbbb"
              :disabled="false"
              :inputCheckRules="['isBlank','isEmail','userCheckValid']">
            </formItemLi></li>
          <li>
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
import formItemLi from '@/components/formItemLi';

const formData = {
  userName: { // 账号
    value: undefined,
    blurCheckRulesType: ['isBlank',]
  },
  userPwd: { // 密码
    value: undefined,
    blurCheckRulesType: ['isBlank']
  },
  usertest: { // 密码
    value: 'originalText',
    blurCheckRulesType: ['isBlank']
  }
}
export default {
  mixins: [formMixin(formData)],
  data() {
    return {
      bdTitle: '登陆',
      btnLock: false, // 防止多次提交;
      imgsrc: `/api/code/get_verify_image_code.do?timestamp=${new Date().getTime()}`
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
        "username": self.userName.value,
        "password": self.userPwd.value
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
    handlerbbb(e){
      console.log(e);
    }
  },
  components: {
    formItemLi
  },
}
</script>
