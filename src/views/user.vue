<template>
  <div class="page-wrap page-regist">
    <header class="register-header">
      <div class="head-wrap">
        <div class="img-wrap regist-logo">
          <img src="@/assets/images/easyWaklLogo.png" alt="">
        </div>
        <div class="regist-nav">
          <span>已有账户?</span>
          <span @click="console.log(1234)">请登录></span>
        </div>
      </div>
    </header>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  created() {
  },
  methods: {
  },
  components: {
  },
}
</script>

<style lang="scss">
  @import '@/assets/scss/user/loginPage.scss';
</style>
