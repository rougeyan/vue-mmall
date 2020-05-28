import r from './router'

// 处理部分嵌套路由中间路由的跳转
var processArr = ['/user.vue'];

// 全局路由守卫
function routerDefencer(router){
  router.beforeEach((to, from, next) => {
    if(processArr.includes(to.name)){
      // 路由拦截;
      // 找不到路由部分 一律指向 /error
      // 记录本次导航 存入vuex中
      // 跳转到
      // 这里记录用户访问的一些数据
      // 阻止访问;
      next({path:'/error'})
    }
    // ...
    if(to.matched.some(record => record.meta.requiresAuth)){
      //  校验权限
      // 此处校验权限
      // console.log('需要权限校验');
    }
    // 这里取一次user-info 取判定是否权限进入该路由

    // 这里还可以 通过加入keep-alive 的路由 缓存路由实例;
    next()
  })
  return router
}
export default routerDefencer(r)
// export default r