<template>
  <div class="global-head">
    <!-- 全局头部 bar-->
    <slot name="global-h-bar">
      <global-h-bar />
    </slot>
    <!-- 全局头部 搜索栏-->
    <slot name="global-h-search">
      <global-h-search />
    </slot>
    <!-- 全局头部 面包屑-->
    <slot name="global-h-breadCrumb">
      <breadcrumb />
    </slot>
  </div>
</template>

<script>
// @ is an alias to /src
// import GlobalNavBar from "@/components/global/item/global-h-bar.vue";
// import GlobalSearch from "@/components/global/item/global-h-search.vue"
// import Breadcrumb from "@/components/common/breadCrumb/breadcrumb.vue"

export default {
  name: "home",
  // components: {
  //   "global-nav-bar": GlobalNavBar,
  //   "global-search" : GlobalSearch,
  //   "breadcrumb" : Breadcrumb,
  // }
};
</script>
