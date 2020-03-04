<template>
  <div class="category-wrap">
    <!-- 一级分类 -->
    <ul class="category-1st-wrap">
      <li class="category-1nd-item" v-for="item in 6">
        <!-- 二级分类 -->
        <ul class="category-2nd-wrap">
          <li class="category-2nd-item">酒水</li>
          <li class="category-2nd-item">酒水</li>
          <li class="category-2nd-item">酒水</li>
          <li class="category-2nd-item">酒水</li>
          <li class="category-2nd-item">酒水</li>
          <li class="category-2nd-item">酒水</li>
          <li class="category-2nd-item">酒水</li>
          <li class="category-2nd-item">酒水</li>
          <li class="category-2nd-item">酒水</li>
          <li class="category-2nd-item">酒水</li>
          <li class="category-2nd-item">酒水</li>
          <li class="category-2nd-item">酒水</li>
        </ul>
      </li>
      <li class="category-1st-item"></li>
      <li class="category-1st-item"></li>
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

<style scoped lang="scss">
  @import '@/assets/scss/topNavBar';
</style>
