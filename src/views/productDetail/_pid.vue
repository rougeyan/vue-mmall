<template>
  <div class="home">
    <global-head/>
    <product-Msg :productMsg="productData"/>
  </div>
</template>

<script>
import {api_get_product_detail} from '@/api/productApi.js'
// @ is an alias to /src
import GlobalHead from "@/components/global/globalHead.vue"
import ProductMsg from "@/components/productDetail/productMsg.vue"

export default {
  data(){
    return{
      productData: {}
    }
  },
  created(){
    this.prodcutId = this.$route.params.pid;
    this.product()
  },
  mounted(){
  },
  methods:{
    product(){
      var self = this;
      api_get_product_detail(this.prodcutId).then(res=>{
        if(res.status == 0){
          self.productData = res.data
          console.log(res.data)
        }else{
          console.log(res.msg)
        }
      })
    }
  },
  components: {
    "global-head" : GlobalHead,
    "product-Msg": ProductMsg
  }
};
</script>

<style lang="scss">
  @import '@/assets/scss/page/productDesc.scss';
</style>
