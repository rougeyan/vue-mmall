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
              :blurCheckRules ="['isBlank','usernameCheckValid']">
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
          <li>
            <formInput 
              v-model="userPwdSec" 
              label="确认密码"
              inputType="password"
              :blurCheckRules ="['isBlank']">
            </formInput>
          </li>
          <li>
            <formInput 
              v-model="userPhone" 
              label="手机号"
              :blurCheckRules ="['isPhone']">
            </formInput>
          </li>
          <li>
            <formInput 
              v-model="userEmail" 
              label="邮箱地址"
              :blurCheckRules ="['isBlank','emailCheckValid']">
            </formInput>
          </li>
          <li>
            <formInput 
              v-model="userQues" 
              label="密码提示问题"
              :blurCheckRules ="['isBlank']">
            </formInput>
          </li>
          <li>
            <formInput 
              v-model="userAnswer" 
              label="密码提示答案"
              :blurCheckRules ="['isBlank']">
            </formInput>
          </li>
        </ul>
      </form>
      <button @click="regist">注册</button>
      <p>登录状态</p>
      <p>{{registStatus}}</p>
    </div>
  </div>
</template>

<script>

import {api_user_regist} from '@/api/userApi'
import {tese_api} from '@/api/testApi.js';
import {formMixin} from '@/common/formMixin';
 
import Cookies from 'js-cookie'
export default {
  data() {
    return {
      title: '注册账号',
      userName: 'smgui1',
      userPwd: '1234',
      userPwdSec: '1234',
      userPhone: '13711651899',
      userQues: '123',
      userAnswer: '123',
      userEmail: '13711651899@qq.com',
      registStatus: ''
    }
  },
  created() {
  },
  methods: {
    regist(){
      var self = this;
      api_user_regist({
        password: self.userPwdSec,
        username: self.userName,
        email: self.userEmail,
        phone: self.userPhone,
        question: self.userQues,
        answer: self.userAnswer
      }).then((res)=>{
        if(res.status == 0){
          self.registStatus = JSON.stringify(res);
        }else{
          self.registStatus = res
        }
      })
    }
  },
 
}
</script>
