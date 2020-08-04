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
    </div>
  </UserLayout>
</template>

<script>

import {api_user_regist} from '@/api/userApi'
import {redirectByLoginedMixin} from '@/mixins/redirectByLoginedMixin';
import {loginedMixin} from '@/mixins/loginMixin';
export default {
  mixins: [redirectByLoginedMixin,loginedMixin],
  data() {
    return {
      title: '注册账号',
      registStatus: '',
      userName: '',
      userPwd: '',
      userPwdSec: '',
      userPhone: '',
      userQues: '',
      userAnswer: '',
      userEmail: '',
      // userName: 'smgui01',
      // userPwd: '1234',
      // userPwdSec: '1234',
      // userPhone: '13711111115',
      // userQues: '987654321',
      // userAnswer: '123333',
      // userEmail: '13711111115@qq.com',
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
        // 重定向到登录状态
        if(res.status == 0){
          self.$toast({
            title:'', 
            style: 'success-tips',
            content: res.msg,
            mask: true,
            autoHide: 2000,
            promiseCallback: true,
          }).then(res=>{
            self.redirectUrl('/user/login');
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
    }
  },
 
}
</script>
