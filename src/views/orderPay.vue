<template>
  <div class="home">
    <global-head />
    <!-- // 楼层速览 -->

    <bd title="订单支付">
      <bd-content>
        <div class="qrcodePay">
          <p class="tips-order">订单提交成功，请尽快支付！定单号：1582463949520</p>
          <p class="tips-useAlipay">请使用支付宝App扫描如下二维码进行支付：</p>
          <span class="qrcodespan">支付二维码</span>
          <div class="img-wrap">
            <img src="http://thing.rayhahah.com/raymall/qr-1582463949520.png" alt="">
          </div>
        </div>
      </bd-content>
    </bd>
  </div>
</template>

<script>
// @ is an alias to /src
import GlobalHead from "@/components/global/globalHead.vue"
import ProductSelectedList from "@/components/shipping/productSelectedList.vue"

export default {
 
  components: {
    "global-head" : GlobalHead,
    "product-selected-list" : ProductSelectedList
  }
};
</script>
<style lang="scss">
  @import '@/assets/scss/page/orderPay.scss';  
</style>
