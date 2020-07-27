<template>
  <div class="global-nav-bar">
    <ul>
      <li class="nav-item-wrap" v-for="(navitem,idx) in navList" :key="idx">
        <div v-if="!navitem.render && idx == 2">
          <span class="wrap">{{welcomeUser}}</span>
        </div>
        <div v-if="navitem.render">
          <router-link :to="!!navitem.path?navitem.path:''">
            <span class="wrap" :class="{'router':navitem.path}">{{navitem.name}}</span>
          </router-link>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import {topNav} from '@/common/customTopNav.js'
import {loginedMixin} from '@/mixins/loginMixin';

export default {
  mixins: [loginedMixin],
  name: "TopNavBar",
  data() {
    return {
      includeArr: ["/User/regist","/User/login"]
    };
  },
  computed:{
    navList(){
      // 引用的state(如登录后修改了状态) 会重新执行一次;
      return this.processTopNav(this.$store.state.userLoginStatus)
    },
    welcomeUser(){
      return this.$store.state.userLoginStatus?`${this.$store.state.userLoginStatus.username},欢迎回来`:""  
    }
  },
  created() {
    this.getUserInfo();
    this.processTopNav(this.$store.state.userLoginStatus);
  },
  methods: {
    processTopNav(params){
      var self= this;
      let loginMsg = params;
      let processNav = topNav.map((item)=>{
        // self.includeArr.includes(item.path);
        if(loginMsg && loginMsg.username && self.includeArr.includes(item.path)){
          item.render = false;
          return item
        }
        item.render = true;
        return item
      })
      return processNav
    }
  },
  components: {}
};
</script>

<style scoped lang="scss">
</style>
