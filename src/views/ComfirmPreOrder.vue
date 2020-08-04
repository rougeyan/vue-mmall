<template>
  <!-- 预下单 - 配置订单信息(收货人) -->
  <BaseLayout>
    <div class="home">
      <bd title="收获地址">
        <bd-content>
          <shipping-list @getShippingId="getShippingId" />
        </bd-content>
      </bd>
      <bd title="商品清单">
        <bd-content>
          <product-selected-list :preOrderList="preOrderList" />
          <operationBar>
            <slot slot="item">
              <div class="total">
                总价:
                <span class="price-symbol">{{productTotalPrice}}</span>
              </div>
            </slot>
            <slot slot="buttons">
              <button class="gotoPreOrder-btn" @click="gotoCreateOrder">去支付</button>
            </slot>
          </operationBar>
        </bd-content>
      </bd>
    </div>
  </BaseLayout>
</template>

<script>
// @ is an alias to /src
import * as api from "@/api/orderApi.js";
import ShippingList from "@/components/shipping/shippingList.vue";
import ProductSelectedList from "@/components/shipping/productSelectedList.vue";

export default {
  props: {},
  data() {
    return {
      preOrderList: [],
      shippingId: -1,
      productTotalPrice: 0
    };
  },
  computed: {},
  created() {
    let self = this;
    api.api_order_getOrderCartProds().then(res => {
      if (res.status == 0) {
        self.preOrderList = res.data.orderItemVoList;
        self.productTotalPrice = res.data.productTotalPrice;
      }
    });
  },
  mounted() {},
  watch: {},
  methods: {
    getShippingId(params) {
      this.shippingId = params;
    },
    gotoCreateOrder() {
      var self = this;
      api.api_order_createOrder(self.shippingId).then(res => {
        if (res.status == 0) {
          let orderNo = res.data.orderNo;
          this.$toast({
            content: "创建订单成功,即将进入支付页", //弹窗的内容
            autoHide: 1600
          });
          setTimeout(() => {
            self.$router.push({
              path: "/orderPay",
              query: { orderNo: orderNo }
            });
          }, 2000);
        }
      });
    }
  },
  components: {
    "shipping-list": ShippingList,
    "product-selected-list": ProductSelectedList
  }
};
</script>
<style lang="scss">
@import "@/assets/scss/page/orderComfirmPage.scss";
</style>
