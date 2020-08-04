<template>
  <UserLayout>
    <div class="regist-main">
      <p class="menberpage-title">{{title}}</p>
      <form>
        <ul>
          <li>
            <formInput 
              v-model="userAnswer" 
              :label="userQues"
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

import {api_user_forgetCheckAnswer} from '@/api/userApi'
 
export default {
  data() {
    return {
      title: '找回密码-检查答案',
      userAnswer: '',
      status: '',
      userName: '',
      userQues: '',
    }
  },
  created() {
    this.userName = this.$route.query.userName;
    this.userQues = this.$route.query.userQues;
  },
  methods: {
    commit(){
      var self = this;
      api_user_forgetCheckAnswer({
        // todo  通过路由传递username 和 question
        username: self.userName,
        question: self.userQues,
        answer: self.userAnswer
      }).then(res=>{
        if(res.status == 0){
          self.$router.push({ path: '/user/resetPwd', query: { userName: self.userName,resetPwdToken:res.data }})
        }else{
          console.error(res.msg)
        }
      })
    }
  },
 
}
</script>
