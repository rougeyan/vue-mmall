<template>
  <div class="home">
    <top-nav-bar />
    <global-search />
    <breadcrumb />
    <filter-products/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import TopNavBar from "@/components/topNavBar.vue";
import GlobalSearch from "@/components/globalSearch.vue"
import Breadcrumb from "@/components/breadcrumb.vue"
import FilterProducts from "@/components/filterProducts.vue"

export default {
  name: "home",
  components: {
    HelloWorld,
    "top-nav-bar": TopNavBar,
    "global-search" : GlobalSearch,
    "breadcrumb" : Breadcrumb,
    "filter-products":FilterProducts
  }
};
</script>
