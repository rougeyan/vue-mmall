<template>
  <div class="global-nav-bar">
    <ul>
      <li class="nav-item-wrap" v-for="(navitem,navIdx) in navList" :key="navitem.enkey">
        <div v-if="navitem.render" class="wrap">
          <span>{{navitem.label}}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>

const defaultNav = [{
    enkey: 'login',
    label:"登陆",render:true,router: "./user/login",children:[]},
  {
    enkey: 'regist',
    label:"注册",render:true,router: "./user/register",children:[]},
  {
    enkey: 'shoppingCart',
    label:"购物车",render:true,router:"./user/shoppingCart",children:[]},
  {
    enkey: 'myOrders',
    label:"我的订单",render:true,router:"./user/myOrder",children:[]},
  // {
  //   enkey: 'menberCenter',
  //   label:"会员中心",render:true,router:"./menber/*",children:[]},
  // {
  //   enkey: 'aboutAuthor',
  //   label:"关于我",render:true,router:"./about",children:[]}
  ]

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
  @import '@/assets/scss/topNavBar';
</style>
