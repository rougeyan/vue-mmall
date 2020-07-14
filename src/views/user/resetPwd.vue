<template>
  <UserLayout>
    <div class="regist-main">
      <p class="menberpage-title">{{title}}</p>
      <form>
        <ul>
          <li>
            <formInput 
              v-model="pwd" 
              label="重设密码"
              :blurCheckRules ="['isBlank']">
            </formInput>
          </li>
          <li>
            <formInput 
              v-model="pwdsec" 
              label="确认密码"
              :blurCheckRules ="['isBlank']">
            </formInput>
          </li>
        </ul>
      </form>
      <p>状态</p>
      <p>{{status}}</p>
      <button @click="commit">提交</button>
    </div>
  </UserLayout>
</template>

<script>

import {api_user_forgetResetPassword} from '@/api/userApi'
 
export default {
  data() {
    return {
      title: '找回密码-重设密码',
      pwd: '',
      pwdsec: '',
      status: '',
      userName: '',
      resetPwdToken: ''
    }
  },
  created() {
    this.userName = this.$route.query.userName;
    this.resetPwdToken = this.$route.query.resetPwdToken;
  },
  methods: {
    commit(){
      var self = this;
      api_user_forgetResetPassword({
        username: self.userName,
        passwordnew: self.pwdsec,
        forgetToken: self.resetPwdToken
      }).then(res=>{
        if(res.status == 0){
          alert(res.msg)
        }else{
          console.log(res.msg)
        }
      })
    }
  },
 
}
</script>
