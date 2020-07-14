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
        </ul>
      </form>
      <button @click="commit">提交</button>
    </div>
  </UserLayout>
</template>

<script>

import {api_user_forgetGetQuestion} from '@/api/userApi'
 
export default {
  data() {
    return {
      title: '找回密码-验证用户名',
      userName: '',
      status: '',
    }
  },
  created() {
    // this.$route.go(-1)
    console.log()
  },
  methods: {
    commit(){
      var self = this;
      api_user_forgetGetQuestion({
        username: self.userName
      }).then(res=>{
        if(res.status == 0){
          self.$router.push({ path: '/user/checkAnswer', query: { userName: self.userName,userQues:res.data }})
        }else{
          console.error(res.msg)
        }
      })
    }
  },
 
}
</script>
