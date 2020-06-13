<template>
  <div class="category-wrap">
    <!-- 一级分类 -->
    <p class="title">热搜</p>
    <ul class="category-1st-wrap">
      <li class="category-1nd-item" v-for="item in categoryList" :key="item.id" @click="toSearchByCategroyId(item)">
        {{item.name}}
        <!-- 二级分类 -->
        <!-- <ul class="category-2nd-wrap">
          <li class="category-2nd-item" v-for="(item,index) in 20">酒{{index}}水</li>
        </ul> -->
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  props:{
    categoryList:{
      type: Array,
      default: function(){
        return []
      }
    }
  },  
  data() {
    return {
    }
  },
  created() {
  },
  methods: {
    toSearchByCategroyId(item){
      this.$router.push({path:'/search',query:{keyword: item.name}})
    }
  },
  components: {
  },
}
</script>

<style scoped lang="scss">
   
</style>
