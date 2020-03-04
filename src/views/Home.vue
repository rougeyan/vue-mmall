<template>
  <div class="home">
    <global-head>
      <slot slot="global-h-breadCrumb">
        <p>分类 13855252522@test987.com</p>
      </slot>
    </global-head>
    <home-category />
    <!-- // 楼层速览 -->
    <home-floor v-for="item in 3"/>
    <global-footer></global-footer>
    <!-- <HelloWorld /> -->
  </div>
</template>

<script>
// @ is an alias to /src
import GlobalHead from "@/components/global/globalHead.vue"
import HomeCategory from "@/components/home/homeCategory.vue"
import HomeFloor from "@/components/home/homeFloor.vue"
import GlobalFooter from "@/components/global/globalFooter.vue"

export default {
  name: "home",
  
  components: {
    "global-head" : GlobalHead,
    "global-footer" : GlobalFooter,
    "home-category":HomeCategory,
    "home-floor": HomeFloor
  }
};
</script>
