<template>
  <div class="home">
    <global-head />
    <!-- // 楼层速览 -->
    <cartList/>
  </div>
</template>

<script>
// @ is an alias to /src
import * as api from '@/api/myCartApi.js'
import GlobalHead from "@/components/global/globalHead.vue"
import CartList from "@/components/cart/cartList.vue"

export default {
  data(){
    return {
    }
  },
  created(){
  },
  methods:{
    
  },
  components: {
    "global-head" : GlobalHead,
    "cartList": CartList
  }
};
</script>

<style lang="scss">
  @import '@/assets/scss/page/mycart.scss';
</style>
