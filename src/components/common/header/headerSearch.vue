<template>
  <div class="global-search-wrap clearfix">
    <div class="global-searchwrap-l img-wrap logo293X44">
      <img src="@/assets/images/easyWaklLogo.png" alt="">
    </div>
    <div class="global-searchwrap-r input-wrap">
      <input v-model="kw" type="text" placeholder="试试搜索: 手机 旅游 小米 华为" v-on:keyup.enter="clickSearch">
      <button @click.enter="clickSearch">搜索</button>
      <!-- <p>请输入商品名称或者商品编号</p> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      kw: '',
      onSearchPage: false,
    }
  },
  created(){
    this.onSearchPageFuc()
  },
  methods: {
    onSearchPageFuc(){
      if(this.$route.name == '/search.vue'){
        this.onSearchPage = true;
        return 
      }
      this.onSearchPage = false
    },
    clickSearch(){
      var self = this;
      if(!self.onSearchPage){
        self.$router.push({path:'/search',query:{keyword: self.kw}})
      }else{
        // 修改url的关键字
        self.$router.push({path:'/search',query:{keyword: self.kw}})
        this.$EventBus.emitSearchResult({keyword: self.kw})
      }
    }
  },
}
</script>

<style scoped lang="scss">
   
</style>
