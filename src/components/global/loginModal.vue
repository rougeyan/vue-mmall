<template>
  <globalDialogWrapper :title="title" :visible.sync="visible" :maskClickClose="maskClickClose">
    <formInput 
      v-model="userName" 
      label="用户名"
      :blurCheckRules ="['isBlank']">
    </formInput>
    <formInput 
      v-model="userPwd" 
      label="密码"
      :blurCheckRules ="['isBlank']">
    </formInput>
    <button @click="login">登录</button>
    <p>登录状态{{loginStatus}}</p>
    <p>store的值为{{dept}}</p>
  </globalDialogWrapper>
</template>

<script>
import {api_user_login} from '@/api/userApi'
export default {
    data() {
        return {
          title: '用户请登录',
          visible:false, // 显示属性
          maskClickClose:false, // 允许点击遮罩关闭
          userName: '',
          userPwd: '',
          loginStatus: ''
        }
    },
    computed: {
        dept(){
            return this.$store.state.dept
        }
    },
    created() {
      console.log(this.$store.state.dept)
    },
    mounted() {
      var self = this;
    },
    watch: {
    },
    methods: {
      login(){
        var self = this;
        // 做非空校验
        debugger
        api_user_login({
          "username": self.userName,
          "password": self.userPwd
          }).then(res=>{
          if(res.status == 0){
            self.loginStatus = JSON.stringify(res.msg);
            this.visible = false;
          }else{
            self.loginStatus = ''
          }
        })
      }
    },
    components: {
    },
}
</script>

<style scoped lang="scss">

</style>
