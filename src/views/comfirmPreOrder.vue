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
        <product-selected-list />
      </bd-content>
    </bd>
  </div>
</template>

<script>
// @ is an alias to /src
import GlobalHead from "@/components/global/globalHead.vue"
import ShippingList from "@/components/shipping/shippingList.vue"
import ProductSelectedList from "@/components/shipping/productSelectedList.vue"

export default {
 
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
