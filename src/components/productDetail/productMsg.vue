<template>
<!-- http://b2c.test.com.cn/domestic/0F1ACAEBF20F41DDE0532429030A5D63.html?departureDate=&utm_source=hotsale_&utm_medium=GZSK002085 -->
  <div class="productMsg-wrap">
    <productMsgHead :productData="productMsg" />
    <productMsgContent :productData="productMsg" />
    <productMsgFoot :productData="productMsg" />
  </div>
</template>

<script>
import productMsgHead from './item/productMsg-head'
import productMsgContent from './item/productMsg-content'
import productMsgFoot from './item/productMsg-foot'

export default {
  props:['productMsg'],
  data() {
    return {
    }
  },
  created() {
  },
  mounted(){
  },
  methods: {
  },
  components: {
    productMsgHead,
    productMsgContent,
    productMsgFoot
  },
}
</script>
