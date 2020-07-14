<template>
  <div class="global-head">
    <!-- 全局头部 bar-->
    <slot name="global-h-bar">
      <headerNav />
    </slot>
    <!-- 全局头部 搜索栏-->
    <slot name="global-h-search">
      <headerSearch />
    </slot>
    <!-- 全局头部 面包屑-->
    <slot name="global-h-breadCrumb">
      <breadcrumb />
    </slot>
  </div>
</template>

<script>
</script>
