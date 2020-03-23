<template>
  <div class="home">
    <global-head />
    <filter-products/>
  </div>
</template>

<script>
// @ is an alias to /src

import GlobalHead from "@/components/global/globalHead.vue"
import FilterProducts from "@/components/search/filterProducts.vue"
export default {
  name: "home",
  components: {
    "global-head" : GlobalHead,
    "filter-products":FilterProducts
  }
};
</script>
<style lang="scss">
  @import '@/assets/scss/page/searchPage.scss';
</style>
