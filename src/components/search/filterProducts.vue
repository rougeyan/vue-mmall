<template>
  <div>
    <bd :title="title">
      <p>搜索关键词: {{$route.query.keyword}}</p>
      <i class="loading" v-show="loading"></i>
      <div class="bd-products-wrap" >
        <ul class="clearfix" v-show="!loading && result.length>0">
          <li v-for="item in result" @click="toProductDetail(item)">
            <prodsketch  :product="item"/>
          </li>
        </ul>
        <p class="undefined-prods" v-show="!loading && result.length==0">找不到
          <span>"{{$route.query.keyword}}"</span>相关产品
        </p>
      </div>
    </bd>
  </div>
</template>

<script>
export default {
  props:{
    "result": {
      type: Array,
      default: []
    },
    "keywords": String,
    "loading": Boolean
  },
  data() {
    return {
      title: "搜索结果",
    }
  },
  created() {
  },
  methods: {
    toProductDetail(pdata){
      this.$router.push({path: `/productDetail/${pdata.id}`})
    }
  },
  components: {
  },
}
</script>

<style scoped lang="scss">
   
</style>
