<template>
  <div>
    <div class="regist-main">
      <p class="menberpage-title">{{title}}</p>
      <form>
        <ul v-if="step == 'step-getQuestion'">
          <li>
            <label :class="{'nessary':userName.nessary}">用户名：</label>
            <input type="text" placeholder="请输入用户名" v-model="userName.value" 
            @blur="blurCheck('userName')"/>
            <div class="error-tips" v-if="userName.tips">{{userName.tips}}</div>
          </li>
        </ul>
        <ul v-if="step == 'step-submitCorrectAnswer'">
          <li>
            <label :class="{'nessary':userQues.nessary}">问题：<span>{{userQues.value}}</span></label>
          </li>
          <li>
            <label :class="{'nessary':userAnswer.nessary}">答案：</label>
            <input type="text" placeholder="请输入用户名" v-model="userAnswer.value" 
            @blur="blurCheck('userAnswer')"/>
            <div class="error-tips" v-if="userAnswer.tips">{{userAnswer.tips}}</div>
          </li>
        </ul>
      </form>
      <button @click="submit">提交</button>
    </div>
  </div>
</template>

<script>
import {api_user_forgetGetQuestion,api_user_forgetCheckAnswer} from '@/api/userApi'
import {formMixin} from '@/common/formMixin'
import Cookies from 'js-cookie'

const formData = {
  userName: {
    value: "",
    blurCheckRulesType: ['isBlank']
  },
  userQues:{
    value: "",
  },
  userAnswer:{
    blurCheckRulesType: ['isBlank']
  }
}
export default {
  mixins: [formMixin(formData)],
  data() {
    return {
      title: '找回密码',
      step: 'step-getQuestion', // step-getQuestion step-submitCorrectAnswer step-finishedFindPassword
      // 此外这里可能或将 使用Vuex作为暂存状态 因为它是校验通过了用户名, 重新刷新页面的时候直接进入答问题部分
    }
  },
  created() {
    var self = this;
  },
  methods: {
    submit(){
      var self = this;
      switch(self.step){
        case 'step-getQuestion':
          api_user_forgetGetQuestion({
            username: self.userName.value
          }).then(res=>{
            if(res.status == 0){
              self.userQues.value = res.data;
              self.step = 'step-submitCorrectAnswer';
            }
          })
        break;
        case 'step-submitCorrectAnswer':
          api_user_forgetCheckAnswer({
            username: self.userName.value,
            question: self.userQues.value,
            answer: self.userAnswer.value
          }).then(res=>{
            if(res.status == 0){
              // 跳转到resetPwd.vue ....
              Cookies.set('forgetToken',res.data)
              self.$router.push({ 
                  name: '/user/resetPwd.vue',  // 因为我在router里面定义了
                  params: { 'forgetToken':res.data}
              })
            }
          })
        break;
      }
    }
  },
  components: {
  },
}
</script>
