<template>
  <!-- 预下单 - 配置订单信息(收货人) -->
  <div class="home">
    <global-head />
    <shipping-selector />
    <product-selected-list />
    <div>
      <p>订单总价:19888</p>
      <button>提交订单</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import GlobalHead from "@/components/global/globalHead.vue"
import ShippingSelector from "@/components/shipping/shippingSelector.vue"
import ProductSelectedList from "@/components/shipping/productSelectedList.vue"

export default {
  name: "home",
  components: {
    "global-head" : GlobalHead,
    "shipping-selector": ShippingSelector,
    "product-selected-list" : ProductSelectedList
  }
};
</script>
