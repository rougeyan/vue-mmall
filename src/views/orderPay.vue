<template>
  <div class="home">
    <global-head />
    <!-- // 楼层速览 -->

    <bd title="订单支付">
      <bd-content>
        <button>订单号:{{orderNo}}</button>
        <div class="qrcodePay" v-if="!payStatus">
          <p class="tips-order">订单提交成功，请尽快支付！定单号：{{orderNo}}</p>
          <p class="tips-useAlipay">请使用支付宝App扫描如下二维码进行支付：</p>
          <span class="qrcodespan">支付二维码</span>
          <div class="img-wrap">
            <img :src="qrurl" alt="">
          </div>
        </div>
        <div class="qrcodePay" v-if="payStatus">
          <p class="tips-order">恭喜你订单支付成功</p>
          <button @click="goToMyCenterOrder">查看订单</button>
        </div>
      </bd-content>
    </bd>
  </div>
</template>

<script>
// @ is an alias to /src
import {api_order_payOrder,api_order_query_Order} from '@/api/orderApi.js'
import GlobalHead from "@/components/global/globalHead.vue"
import ProductSelectedList from "@/components/shipping/productSelectedList.vue"

export default {
  data(){
    return {
      payStatus: false,// 支付状态
      qrurl: ''
    }
  },
  created(){
    this.orderNo = this.$route.query.orderNo;
    // 首次查询判定订单是否支付完成;
    this.queryOrderOnce(this.orderNo)
  },
  methods:{
    getPayQrCode(orderNo){
      var self = this;
      api_order_payOrder(orderNo).then(res=>{
        if(res.status == 0){
          this.qrurl = `http://${res.data.qrUrl}`;
          // 创建轮询
          self.keepQueryOrder(orderNo)
        }else{
          console.error(res.msg)
        }
      })
    },
    queryOrderOnce(orderNo){
      let self = this;
      api_order_query_Order(orderNo).then(res=>{
        if(res.data){
          self.payStatus = true;        
        }else{
          self.getPayQrCode(this.orderNo);
        }
      })
    },
    // 创建轮询;
    keepQueryOrder(orderNo){
      let timer // 创建定时器;
      var self = this;
      api_order_query_Order(orderNo).then(res=>{
        if(res.status == 0){
           clearTimeout(timer) //清理定时任务   
          }else {
            timer = setTimeout(() => {
                self.keepQueryOrder(self.orderNo)
            }, 3000)
          }
      })
    },
    goToMyCenterOrder(){
      this.$router.push({path:`/myCenter/orderDetail/${this.orderNo}`})
    }
  },
  components: {
    "global-head" : GlobalHead,
    "product-selected-list" : ProductSelectedList
  }
};
</script>
<style lang="scss">
  @import '@/assets/scss/page/orderPay.scss';  
</style>
