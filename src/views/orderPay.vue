<template>
  <div class="home">
    <global-head />
    <!-- // 楼层速览 -->
    <p>订单提交成功，请尽快支付！定单号：1582463949520</p>
    <p>请使用支付宝App扫描如下二维码进行支付：</p>
    <span>支付二维码</span>
    <img src="http://thing.rayhahah.com/raymall/qr-1582463949520.png" alt="">
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
