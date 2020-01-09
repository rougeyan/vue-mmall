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
            <label :class="{'nessary':userName.nessary}">密码：</label>
            <input type="password" placeholder="请输入密码" v-model="userPwd.value" />
          </li>
          <li>
            <label :class="{'nessary':userName.nessary}">确认密码：</label>
            <input type="password" placeholder="请再输入密码" v-model="userPwdsec.value" />
          </li>
          <li>
            <label :class="{'nessary':userName.nessary}">手机号码：</label>
            <input type="phone" placeholder="请输入手机号码" v-model="userPhone.value" />
          </li>
          <li>
            <label :class="{'nessary':userName.nessary}">邮箱：</label>
            <input type="text" name="email" placeholder="请输入邮箱" v-model="userEmail.value" />
            <div class="error-tips" v-if="userEmail.tips">{{userEmail.tips}}</div>
          </li>
          <li>
            <label :class="{'nessary':userName.nessary}">密码提示问题：</label>
            <input type="text" placeholder="请选择密码提示问题" v-model="userQues.value" />
          </li>
          <li>
            <label :class="{'nessary':userName.nessary}">密码提示答案：</label>
            <input type="text" placeholder="请选择密码提示问题" v-model="userAnswer.value"/>
          </li>
        </ul>
      </form>
      <button @click="regist">提交</button>
    </div>
  </div>
</template>

<script>
import {user_regist,user_checkValid} from '@/api/userApi'
import {formMixin} from '@/common/formMixin'

// form表单种的格式以及校验由这里生成
const formData = {
  userEmail: {
    value: 'testaccount@163.com',
    blurCheckRulesType: false,
    onChangeCheck: ['isBlank','emailFmt',function(val){
      return user_checkValid({
        str: val,
        type: 'email'
      })
    }],
  }, //简便格式
  userName: {
    value: 'testaccount',
    blurCheckRulesType: ['isBlank',function(val){
      return user_checkValid({
        str: val,
        type: 'username'
      })
    }]
  },
  userPwd: '1234', // 密码
  userPwdsec:'1234', // 二次密码确认
  userPhone: 12377676777, // 电话号码
  userQues: '你最喜爱的明星是谁', // 问题
  userAnswer: '广之旅', // 答案
}
export default {
  mixins: [formMixin(formData)],
  data() {
    return {
      bdTitle: '注册',
    }
  },
  created() {
  },
  methods: {
    regist(){
      var self = this;
      user_regist({
        userName: self.userName.value,
        userPwdsec: self.userPwd.value,
        userEmail: self.userEmail.value,
        userPhone: self.userPhone.value,
        userQues: self.userQues.value,
        userAnswer: self.userAnswer.value
      }).then(res=>{
        alert(res.msg)
      })
    }
  },
  components: {
  },
}
</script>

