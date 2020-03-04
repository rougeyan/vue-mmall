<template>
  <div class="home">
    <global-head />
    <product-Msg/>
  </div>
</template>

<script>
// @ is an alias to /src
import GlobalHead from "@/components/global/globalHead.vue"
import ProductMsg from "@/components/productDetail/productMsg.vue"

export default {
  name: "home",
  components: {
    "global-head" : GlobalHead,
    "product-Msg": ProductMsg
  }
};
</script>
