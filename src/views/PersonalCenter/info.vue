<template>
    <div class="my-info">
      <bd title="我的个人信息">
        <bd-content>
          <ul>
            <li>
              <formInput
                :readonly="true"
                v-model="userName" 
                label="用户名"
                :blurCheckRules ="['isBlank','usernameCheckValid']">
              </formInput>
            </li>
            <li>
              <formInput 
                :readonly="!reviseStatus"
                v-model="userPhone" 
                label="手机号"
                :blurCheckRules ="['isPhone']">
              </formInput>
            </li>
            <li>
              <formInput 
                :readonly="!reviseStatus"
                v-model="userEmail" 
                label="邮箱地址"
                :blurCheckRules ="['isBlank','isEmail','emailCheckValid']">
              </formInput>
            </li>
            <li>
              <formInput 
                :readonly="!reviseStatus"
                v-model="userQues" 
                label="密码提示问题"
                :blurCheckRules ="['isBlank']">
              </formInput>
            </li>
            <li>
              <formInput 
                :readonly="!reviseStatus"
                v-model="userAnswer" 
                label="密码提示答案"
                :blurCheckRules ="['isBlank']">
              </formInput>
            </li>
          </ul>
        </bd-content>
				<bd-footer>
					<button @click="reviseStatus=true" v-show="!reviseStatus">编辑</button>
					<button @click="updateUserMsg" v-show="reviseStatus">保存</button>
				</bd-footer>
      </bd>
      <!-- // 嵌套路由 -->
      <router-view></router-view>
    </div>
</template>

<script>
import {api_user_getLoginUserId,api_user_getUserInfo,api_user_updateInfo} from '@/api/userApi'
export default {
    props: {
    },
    data() {
			return {
				reviseStatus: false, //
				userName: '',
				userPwd: '',
				userPwdSec: '',
				userPhone: '',
				userQues: '',
				userAnswer: '',
				userEmail: '',	
			}
    },
    computed: {
    },
    created() {
      this.getUserMsg();
    },
    mounted() {
    },
    watch: {
    },
    methods: {
      getUserMsg(){
        api_user_getUserInfo().then(res=>{
          if(res.status==0){
            let data = res.data;
            this.userAnswer = data.answer;
            this.userEmail = data.email;
            this.userPhone = data.phone;
            this.userQues = data.question;
            this.role = data.role;
            this.userName = data.username;
          }
        })
      },
      updateUserMsg(){
        var self = this;
        api_user_updateInfo({
        email: self.userEmail,
        phone: self.userPhone,
        question: self.userQues,
        answer: self.userAnswer
      }).then((res)=>{
        if(res.status == 0){
          this.reviseStatus = false;
          console.log(res.data);
        }
      })
      },
    },
    components: {
    },
}
</script>

<style scoped lang="scss">

</style>
