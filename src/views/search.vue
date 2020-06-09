<template>
  <div class="home">
    <global-head />
    <filter-products :result="result"/>
  </div>
</template>

<script>
// @ is an alias to /src
import {api_global_search} from '@/api/productApi.js'
import GlobalHead from "@/components/global/globalHead.vue"
import FilterProducts from "@/components/search/filterProducts.vue"
export default {
  data() {
    return {
      result: {}, // 结果
      kw: '', 
      categoryId:  0// 0 默认全局搜索
    }
  },
  created(){
    this.kw = this.$route.query.keyword;
    this.searching();
    this.listenKeywordsChange()
  },
  methods: {
    searching(){
      var self = this;
      api_global_search({
        keyword: self.kw,
        categoryId: self.categoryId
      }).then((res)=>{
        if(res.status == 0){
          console.log(res.data)
          this.result = res.data
          // self.$router.push({ name: '/search.vue', params: { result: res.data}})
        }
      })
    },
    listenKeywordsChange(){
      var self = this;
      this.$EventBus.listenSearchResult((res)=>{
        if(res.keyword){
          self.kw = res.keyword;
          self.searching();
        }
      })
    }
  },
  beforeDestory(){
    // 离开search路由页面后 要销毁
    this.$EventBus.destorySearchResult();
  },
  components: {
    "global-head" : GlobalHead,
    "filter-products":FilterProducts
  }
};
</script>
<style lang="scss">
  @import '@/assets/scss/page/searchPage.scss';
</style>
