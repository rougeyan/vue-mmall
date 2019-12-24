<template>
  <div>
    <div class="regist-main">
      <p class="title">注册</p>
      <!-- 二次封装: 需要label model(form) tips(tips) -->
      <form>
        <ul>
          <li>
            <label>用户名：</label>
            <input type="text" placeholder="请输入用户名" v-model="form.userName" 
            @blur="blurCheck('username')"/>
            <div class="error-tips" v-if="formTips.nameTips">{{formTips.nameTips}}</div>
          </li>
          <li>
            <label>密码：</label>
            <input type="password" placeholder="请输入密码" v-model="form.userPwd"/>
            <div class="error-tips" v-if="formTips.pwdTips">{{formTips.pwdTips}}</div>
          </li>
          <li>
            <label>确认密码：</label>
            <input type="password" placeholder="请再输入密码" v-model="form.userPwdsec"/>
            <div class="error-tips" v-if="formTips.pwdSecTips">{{formTips.pwdSecTips}}</div>
          </li>
          <li>
            <label>手机号码：</label>
            <input type="phone" placeholder="请输入手机号码" v-model="form.userPhone"/>
            <div class="error-tips" v-if="formTips.phoneTips">{{formTips.phoneTips}}</div>
          </li>
          <li>
            <label>邮箱：</label>
            <input type="text" name="email" placeholder="请输入邮箱" v-model="form.userEmail" @blur="blurCheck('email')"/>
            <div class="error-tips" v-if="formTips.emailTips">{{formTips.emailTips}}</div>
          </li>
          <li>
            <label>密码提示问题：</label>
            <input type="text" placeholder="请选择密码提示问题" v-model="form.userQues"/>
          </li>
          <li>
            <label>密码提示答案：</label>
            <input type="text" placeholder="请选择密码提示问题" v-model="form.userAnswer"/>
            <div class="error-tips" v-if="formTips.answerTips">{{formTips.answerTips}}</div>
          </li>
        </ul>
      </form>
      <button @click="regist">提交</button>
    </div>
  </div>
</template>

<script>
import {user_regist} from '@/api/userApi'
import {formMixin} from '@/common/mixin'
export default {
  mixins: [formMixin],
  data() {
    return {
    }
  },
  created() {
  },
  methods: {
    regist(){
      var self = this;
      user_regist(self.form).then(res=>{
        alert(res.msg)
      })
    }
  },
  components: {
  },
}
</script>

