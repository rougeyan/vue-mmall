<template>
  <div class="home-floor">
    <div class="floor-title">楼层标题</div>
    <ul class="floor-products-wrap clearfix">
      <li class="product-item" v-for="item in 10">
        <div class="product-title">产品名称</div>
        <div class="img-wrap">
          <img src="https://file.gzl.cn/group1/M00/27/45/wKkBH14FpGCARlBGAAEYP7peC2Q148_300X200.jpg" alt="">
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
