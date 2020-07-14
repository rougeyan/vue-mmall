// 登录及重定向;
import { mapState } from "vuex";
export const searchProductMixin = {
  data() {
    return {}
  },
  computed :{
    ...mapState({
      searchKeyWords: state =>state.searchKeyWords
    })
  },
  // 因为我是写在mixin上,所以要执行回调最好通过 return 可以使用then()做返回结果回调;
  methods: {
    // 关键字状态
    saveSearchKeyWordsInStore(data){
      this.$store.commit('SEARCH_KEYWORDS', {
        searchKeyWords: data,
      })
    },
    // 移除关键字状态
    removeSearchKeyWordsInStore(){
      this.$store.commit('SEARCH_KEYWORDS', {
        searchKeyWords: '',
        searchResult: {}
      })
    }
  },
  beforeDestory(){
    this.removeSearchKeyWordsInStore()
  }
};