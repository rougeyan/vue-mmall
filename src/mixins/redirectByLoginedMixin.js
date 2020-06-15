// 一些页面在登录状态下无法访问配置M
import { mapState } from "vuex";
export const redirectByLoginedMixin = {
  computed :{
    ...mapState({
      userLoginStatus: state =>state.userLoginStatus
    })
  },
  // watch: injectFormWatchData,
  methods: {
    redirectUrl(path,query,params){
      var self = this;
      // 默认重定向首页
      self.$router.push({
        path: path || '/',
        query: query || '',
        params: params || {}
      })
    },
    checkLoginStatusRedirect(path,query,params){
      var self = this;
      if(!!this.userLoginStatus){
        self.redirectUrl(path,query,params)
      }
    },
  },
};