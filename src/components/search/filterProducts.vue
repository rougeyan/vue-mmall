<template>
  <div class="filter-products-wrap">
    <ul class="clearfix">
      <li v-for="item in 6">
        <div class="product-item">
          <div class="img-wrap">
            <img src="https://file.gzl.cn/group1/M00/22/D3/wKkBHlx4-_qAHT9QAAFCFgZlz5o646_300X200.jpg" alt="">
          </div>
          <p class="price">¥1999</p>
          <p class="desc">4+64G送手环/Huawei/华为 nova 手机P9/P10plus青春 </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  data() {
    return {
    }
  },
  created() {
  },
  methods: {
  },
  components: {
  },
}
</script>

<style scoped lang="scss">
  @import '@/assets/scss/topNavBar';
</style>
