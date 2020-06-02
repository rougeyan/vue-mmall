<template>
  <div class="global-nav-bar">
    <ul>
      <li class="nav-item-wrap" v-if="loginStatus">
        <span>用户: {{userToken}}</span>
      </li>
      <li class="nav-item-wrap" v-for="(navitem,navIdx) in navList" :key="navitem.enkey">
        <div v-if="navitem.render" class="wrap">
          <router-link :to="navitem.router" v-if="navitem.router">
            <span>{{navitem.label}}</span>
          </router-link>
          <span v-else>{{navitem.label}}</span>
        </div>
      </li>
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
