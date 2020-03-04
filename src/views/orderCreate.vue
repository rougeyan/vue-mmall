<template>
  <div class="home">
    <global-head />
    <!-- // 楼层速览 -->
    <shipping-selector />
    <product-selected-list />
    <button>提交订单</button>
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
