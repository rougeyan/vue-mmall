<template>
  <div>
    <div class="regist-main">
      <p class="title">登陆</p>
      <form>
        <ul>
          <li>
            <label>用户名：</label>
            <input type="text" placeholder="请输入用户名" v-model="userName"/>
          </li>
          <li>
            <label>密码：</label>
            <input type="password" placeholder="请输入密码" v-model="userPwd"/>
          </li>
          <li>
            <img :src="imgsrc" alt="">
          </li>
        </ul>
      </form>
      <button @click="login">登陆</button>
      <button @click="logout">登出</button>
      <button @click="getUserinfo">用户信息</button>
      <button @click="testapi">测试接口提交</button>
    </div>
  </div>
</template>

<script>

import {user_login,
        user_logout,
        user_getUserInfo} from '@/api/userApi'
import {tese_api} from '@/api/testApi'        

export default {
  data() {
    return {
      lock: false,
      userName: '',
      userPwd: '',
      imgsrc: `/api/code/get_verify_image_code.do?timestamp=${new Date().getTime()}`
    }
  },
  created() {
  },
  methods: {
    login(){
      var self = this;
      if(self.lock) return
      self.lock = true;
      // 做非空校验
      user_login({
        "password": self.userPwd,
        "username": self.userName
        }).then(res=>{
        self.lock = false;
        if(res.status == 0){
          alert(res.msg)
        }else{
          alert(res.msg)
        }
      })
    },
    logout(){
      user_logout().then(res=>{
        if(res.status == 0){
          alert("登出成功")
        }
      })
    },
    getUserinfo(){
      user_getUserInfo().then(res=>{
        console.log(res.data)
      })
    },
    testapi(){
      tese_api().then(res=>{
        console.log(res)
      })
    }
  },
  components: {
  },
}
</script>
