<template>
  <div class="category-floor">
    <bd-title class="global-title" title="主标题" />
    <ul class="clearfix overw20 ">
      <li class="category-item mgr20 mgb10" v-for="item in 6">
        <prodsketch />
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  data() {
    return {
    }
  },
  created() {
  },
  methods: {
  },
  components: {
  },
}
</script>
