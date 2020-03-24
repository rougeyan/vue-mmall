<template>
  <div>
    <bd :title="title">
      <div class="bd-products-wrap">
        <ul class="clearfix">
          <li v-for="item in 9">
            <prodsketch />
          </li>
        </ul>
      </div>
    </bd>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "搜索结果"
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
