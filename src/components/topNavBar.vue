<template>
  <div class="top-nav-bar">
    <!-- 这里引入递归 导航 
    例如 会员中心下应该有 > 我的订单, 我的收获地址 ..
    -->
    <ul>
      <li v-for="(value,key) in navList" :key="key">
        <div v-if="value.render" class="wrap">
          <span>{{value.label}}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>

const defaultNav = {
    login:{
      label:"登陆",render:true,router: "./user/login",children:[]},
    regist:{
      label:"注册",render:true,router: "./user/register",children:[]},
    shoppingCart:{
      label:"购物车",render:true,router:"./user/shoppingCart",children:[]},
    myOrders:{
      label:"我的订单",render:true,router:"./user/myOrder",children:[]},
    menberCenter:{
      label:"会员中心",render:true,router:"./menber/*",children:[]},
    aboutAuthor:{
      label:"关于我",render:true,router:"./about",children:[]}
  }

export default {
  name: "TopNavBar",
  data() {
    return {
      loginStatus: false,
      navList: defaultNav,
    }
  },
  created() {
    console.log(defaultNav)
  },
  methods: {
    // 这里判定登陆
    processNavBar(){}
  },
  components: {
  },
}
</script>

<style scoped lang="scss">

</style>
