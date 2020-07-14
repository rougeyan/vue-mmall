<template>
  <div class="baseLayout">
    <global-head>
      <!-- <slot slot="global-h-breadCrumb">
        <p class="important-msg">
          本项目是个人测试环境项目,线上所有物品均为虚拟产品,不会产生真实订单。请勿进行真实交易支付。
        </p></slot> -->
    </global-head>
    <slot></slot>
    <!-- 这里放content -->
    <global-footer></global-footer>
  </div>
</template>

<script>
import GlobalHead from "@/components/common/globalHead.vue"
import GlobalFooter from "@/components/common/globalFooter.vue"

export default {
  name: "baseLayout",
  components: {
    "global-head" : GlobalHead,
    "global-footer" : GlobalFooter,
  }
};
</script>