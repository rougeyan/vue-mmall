<template>
  <div class="global-nav-bar">
    <ul>
      <li class="nav-item-wrap" v-if="loginStatus">
        <span>用户: {{userToken}}</span>
      </li>
      <li class="nav-item-wrap" v-for="(navitem,navIdx) in navList" :key="navitem.path">
        <div v-if="navitem.render" class="wrap">
          <router-link :to="navitem.path" v-if="navitem.path">
            <span>{{navitem.name}}</span>
          </router-link>
          <span v-else>{{navitem.name}}</span>
        </div>
      </li>
      <li class="nav-item-wrap">待修复 前端处理路由是无序的,路由菜单应该由后台建立</li>
    </ul>
  </div>
</template>

<script>
import {topNav} from '@/common/const.js'
import Cookies from 'js-cookie'
export default {
  name: "TopNavBar",
  data() {
    return {
      loginStatus: false,
      navList: topNav,
      userToken: ''
    };
  },
  created() { 
    this.userToken = Cookies.get('access_token')
    if(this.userToken){
      this.loginStatus= true
    }
  },
  methods: {
  },
  components: {}
};
</script>

<style scoped lang="scss">
</style>
