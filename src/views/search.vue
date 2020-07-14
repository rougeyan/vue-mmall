<template>
  <BaseLayout ref="searchPage">
    <filter-products :result="resultList" :loading="loading" :keywords="reloadResult"/>
  </BaseLayout>
</template>

<script>
// @ is an alias to /src
import {api_global_search} from '@/api/productApi.js'
import FilterProducts from "@/components/search/filterProducts.vue"
import {searchProductMixin} from '@/mixins/searchProductMixin';
export default {
  mixins: [searchProductMixin],
  data() {
    return {
      kw: '', 
      categoryId: 0, // 0 默认全局搜索
      loading: true,
      resultList: [],
      reflesh: false
    }
  },
  // computed里面只能用于同步函数
  computed:{
    reloadResult(){
      // 监听关键字 每次commit 都调用一次searching
      if(this.reflesh == true){
        return this.$store.state.searchKeyWords
      }
      this.searching(this.$store.state.searchKeyWords)
      return this.$store.state.searchKeyWords
    }
  },
  created(){
    // 允许 强制刷新情况下继续搜索
    this.kw = this.$route.query.keyword;
    this.searching(this.kw);
    this.reflesh = true;
  },
  methods: {
    searching(params){
      var self = this;
      this.loading = true;
      // dispatch 记录model值;
      this.$store.dispatch('SEARCH_RESULT',{
        keyword: params || self.kw,
        categoryId: self.categoryId,
      }).then(res=>{
        if(res.status == 0){
          this.loading = false;
          this.resultList = res.data.list
        }
      })
    },
  },
  components: {
    "filter-products":FilterProducts
  }
};
</script>
<style lang="scss">
  @import '@/assets/scss/page/searchPage.scss';
</style>
