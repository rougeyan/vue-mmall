<template>
    <div class="main">
      <keep-alive :include=includeRoutes :exclude="excludeRoutes">
        <router-view />
      </keep-alive>
    </div>
</template>

<script>
export default {
  props: {
  },
  data() {
      return {
        includeRoutes: ["home"], // 被缓存的路由
        excludeRoutes: [] // 不包含的路由
      }
  },
  computed: {
  },
  created() {
    // 通过eventbus来缓存路由
  },
  mounted() {
  },
  watch: {
  },
  methods: {
  },
  components: {
  },
}
</script>

<style scoped lang="scss">

</style>
