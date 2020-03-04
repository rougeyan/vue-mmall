<template>
  <div class="home">
    <global-head />
    <!-- // 楼层速览 -->
    <cartList />
  </div>
</template>

<script>
// @ is an alias to /src
import GlobalHead from "@/components/global/globalHead.vue"
import CartList from "@/components/cart/cartList.vue"

export default {
  name: "home",
  components: {
    "global-head" : GlobalHead,
    "cartList": CartList
  }
};
</script>
