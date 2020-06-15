<template>
  <div class="global-nav-bar">
    <ul>
      <li class="nav-item-wrap" v-for="(navitem) in navList" :key="navitem.path">
        <div v-if="navitem.render">
          <router-link :to="!!navitem.path?navitem.path:''">
            <span class="wrap" :class="{'router':navitem.path}">{{navitem.name}}</span>
          </router-link>
        </div>
        <!-- <div v-else>
          <span class="wrap">{{navitem.name}}</span>
        </div> -->
      </li>
      <!-- <li class="nav-item-wrap">待修复 前端处理路由是无序的,路由菜单应该由后台建立</li> -->
    </ul>
  </div>
</template>

<script>
import {topNav} from '@/common/manageTopNav.js'
import {loginedMixin} from '@/mixins/loginMixin';

export default {
  mixins: [loginedMixin],
  name: "TopNavBar",
  data() {
    return {

    };
  },
  computed:{
    navList(){
      // 引用的status 会重新执行一次;
      return this.processTopNav(this.$store.state.userLoginStatus)
    }
  },
  created() {
    this.getUserInfo();
    // this.processTopNav();
  },
  methods: {
    processTopNav(params){
      let loginMsg = params;
      if(!loginMsg){
        return topNav
      }
      let processNav = topNav.map(item=>{
        if(item.static == 'userName'){
          item.name =  loginMsg && loginMsg.username?`欢迎您,${loginMsg.username}`:''
          item.render =  true;
        }
        if(!!loginMsg && (item.name =="登录" || item.name =="注册")){
          item.render =  false;
        }
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
