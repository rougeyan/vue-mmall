<template>
  <div>
    <bd :title="title">
      <span>搜索关键词: {{$route.query.keyword}}</span>
      <div class="bd-products-wrap">
        <ul class="clearfix">
          <li v-for="item in result.list" @click="toProductDetail(item)">
            <prodsketch  :product="item"/>
          </li>
        </ul>
      </div>
    </bd>
  </div>
</template>

<script>
export default {
  props:{
    "result": Object
  },
  data() {
    return {
      title: "搜索结果",
    }
  },
  created() {
    console.log(this.props)
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
