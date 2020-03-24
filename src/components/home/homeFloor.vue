<template>
  <div class="category-floor">
    <bdTitle title="主标题"></bdTitle>
    <ul class="clearfix">
      <li class="category-item" v-for="item in 5">
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
