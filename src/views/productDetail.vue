<template>
  <div class="home">
    <top-nav-bar />
    <global-search />
    <!-- // 楼层速览 -->
    <breadcrumb />
    <product-Msg/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import TopNavBar from "@/components/topNavBar.vue";
import GlobalSearch from "@/components/globalSearch.vue"
import Breadcrumb from "@/components/breadcrumb.vue"
import ProductMsg from "@/components/productMsg.vue"

export default {
  name: "home",
  components: {
    HelloWorld,
    "top-nav-bar": TopNavBar,
    "global-search" : GlobalSearch,
    "breadcrumb" : Breadcrumb,
    "product-Msg": ProductMsg
  }
};
</script>
