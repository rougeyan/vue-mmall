<template>
  <div class="home">
    <top-nav-bar />
    <global-search />
    <home-category />
    <!-- // 楼层速览 -->
    <!-- <home-floor v-for="item in 3"/> -->
    <global-footer></global-footer>
    <!-- <HelloWorld /> -->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import TopNavBar from "@/components/topNavBar.vue";
import GlobalSearch from "@/components/globalSearch.vue"
import HomeCategory from "@/components/homeCategory.vue"
import HomeFloor from "@/components/homeFloor.vue"
import GlobalFooter from "@/components/globalFooter.vue"

export default {
  name: "home",
  components: {
    HelloWorld,
    "top-nav-bar": TopNavBar,
    "global-search" : GlobalSearch,
    "global-footer" : GlobalFooter,
    "home-category":HomeCategory,
    "home-floor": HomeFloor
  }
};
</script>
