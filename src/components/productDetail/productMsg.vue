<template>
<!-- http://b2c.test.com.cn/domestic/0F1ACAEBF20F41DDE0532429030A5D63.html?departureDate=&utm_source=hotsale_&utm_medium=GZSK002085 -->
  <div class="pmsg-wrap">
    <pmsgHead :productData="productMsg" />
    <pmsgContent :productData="productMsg" />
    <pmsgFoot :productData="productMsg" />
  </div>
</template>

<script>
import pmsgHead from './item/pmsg-head'
import pmsgContent from './item/pmsg-content'
import pmsgFoot from './item/psmg-foot'

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
    pmsgHead,
    pmsgContent,
    pmsgFoot
  },
}
</script>
