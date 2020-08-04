<template>
  <BaseLayout>
    <cartList/>
  </BaseLayout>
</template>

<script>
// @ is an alias to /src
import * as api from '@/api/myCartApi.js'
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
    "cartList": CartList
  }
};
</script>

<style lang="scss">
  @import '@/assets/scss/page/mycart.scss';
</style>
