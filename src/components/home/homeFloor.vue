<template>
  <div class="category-floor">
    <globalTitle title="主标题"></globalTitle>
    <ul class="clearfix">
      <li class="category-item" v-for="item in 5">
        <globalProdsketch />
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
