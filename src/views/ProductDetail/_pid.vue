<template>
  <BaseLayout>
    <product-Msg :productMsg="productData"/>
  </BaseLayout>
</template>

<script>
import {api_get_product_detail} from '@/api/productApi.js'
// @ is an alias to /src
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
    "product-Msg": ProductMsg
  }
};
</script>

<style lang="scss">
  @import '@/assets/scss/page/productDetail.scss';
</style>
