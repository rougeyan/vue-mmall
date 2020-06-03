<template>
  <!-- 预下单 - 配置订单信息(收货人) -->
  <div class="home">
    <global-head />
    <bd title="收获地址">
      <bd-content>
        <shipping-list />
      </bd-content>
    </bd>

    <bd title="商品清单">
      <bd-content>
        <product-selected-list :preOrderList="preOrderList"/>
      </bd-content>
      <div class="operator-wrap">
        <div class="total">总价:
          <span class="price-symbol">1888</span></div>
        <button class="to-pay">去支付</button>
      </div>
    </bd>
  </div>
</template>

<script>
// @ is an alias to /src
import * as api from '@/api/orderApi.js'
import GlobalHead from "@/components/global/globalHead.vue"
import ShippingList from "@/components/shipping/shippingList.vue"
import ProductSelectedList from "@/components/shipping/productSelectedList.vue"

export default {
  props: {
    },
    data() {
        return {
          preOrderList:[],
        }
    },
    computed: {
    },
    created() {
      let self = this;
      api.api_order_getOrderCartProds().then(res=>{
        if(res.status ==0){
          self.preOrderList = res.data.orderItemVoList
        }
      })
    },
    mounted() {
    },
    watch: {
    },
    methods: {
    },
    components: {
      "global-head" : GlobalHead,
      "shipping-list": ShippingList,
      "product-selected-list" : ProductSelectedList
    }
};
</script>
<style lang="scss">
  @import '@/assets/scss/page/orderComfirmPage.scss';
</style>
