<template>
  <div class="category-floor" v-if="productsList &&productsList.length>0">
    <bd-title class="global-title" :title="title" />
    <ul class="clearfix overw20 ">
      <li class="category-item mgr20 mgb20" v-for="(item,idx) in productsList" :key="idx" @click="toProductDetail(item)">
        <prodsketch :product="item"/>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  props:{
    productsList:{
      type: Array,
      default: []
    },
    title: String
  },
  data() {
    return {
    }
  },
  created() {
  },
  methods: {
    toProductDetail(param){
      this.$router.push({path:`/productDetail/${param.id}`})
    }
  },
  components: {
  },
}
</script>
