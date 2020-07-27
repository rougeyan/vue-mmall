<template>
    <div class="userLayout">
      <div class="page-wrap page-regist">
      <header class="register-header">
        <div class="head-wrap">
          <div class="img-wrap regist-logo">
            <img src="@/assets/images/easyWaklLogo.png" alt="">
          </div>
          <div class="regist-nav">
            <router-link  v-show="!hasAccount" to="/User/regist">没有账户?请注册</router-link>
            <router-link v-show="hasAccount" to="/User/login">已有账户?请登录</router-link>
          </div>
        </div>
      </header>
      <slot></slot>
      </div>
    </div>
</template>

<script>
export default {
    props: {
    },
    data() {
      return {
        hasAccount: false
      }
    },
    computed: {
    },
    created() {
      if(this.$route.path == '/User/regist'){
        this.hasAccount = true;
      }
    },
    mounted() {
    },
    watch: {
    },
    methods: {
    },
    components: {
    },
}
</script>

<style lang="scss">
  @import '@/assets/scss/page/loginPage.scss';
</style>
