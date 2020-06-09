<template>
  <div class="operation-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="item">
      <slot name="item"></slot>
    </div>
    <slot name="buttons"></slot>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {},
  components: {}
};
</script>

<style scoped lang="scss">
</style>
