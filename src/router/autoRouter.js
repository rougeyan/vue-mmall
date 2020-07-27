import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 修复 Navigating to current location ("/xxx") is not allowed 的问题
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error)
}

// [参考自:为views文件夹下的vue文件自动生成路由](https://github.com/Caaalabash/vue-blog/blob/publish/frontend/src/router.js)

// https://router.vuejs.org/zh/guide/essentials/dynamic-matching.html#%E6%8D%95%E8%8E%B7%E6%89%80%E6%9C%89%E8%B7%AF%E7%94%B1%E6%88%96-404-not-found-%E8%B7%AF%E7%94%B1

/**
 * 为views文件夹下的vue文件自动生成路由, 规则 ≈ Nuxt
 * 1. 基础路由: 路径 = views目录下文件的相对路径, index.vue将被视作 /
 * 2. 动态路由: 需要创建以下划线为前缀的vue文件或目录, _id.vue将被视作 :id
 * 3. 嵌套路由: 添加一个vue文件的同时添加一个与该文件同名的目录用于存放子视图组件
 * @param {Boolean} options.processAllIndex 是否处理文件路径中的index, 默认false
 */


function generateRoute(options = {
  processAllIndex: true
}) {
   // 相对路径src下的view目录 './../views';
  const requireContext = require.context('./../views', true, /\.vue$/, 'lazy')
  const vueFileList = requireContext.keys().map(filename => filename.slice(1))            // ['/a/b/c.vue']
  const getFilePath = filename => filename.replace(/\.\w+$/, '')                          // '/a/b/c'
  const getFileName = filename => filename.replace(/(.*\/)*([^.]+).*/ig, '$2')            // 'c'
  const flat = arr => arr.reduce((acc, val) =>                                            // 拍平routes
    (val.children.length ? acc.concat(flat(val.children), val) : acc.concat(val))
    , [])
  const getAncestry = filename => {                                                       // 寻找可能的嵌套路由
    if (filename === '.vue') return false
    const parentFilename = filename.replace(/\/\w+(.vue)$/, '$1')
    return vueFileList.includes(parentFilename)
      ? parentFilename
      : getAncestry(parentFilename)
  }
  const sortByNameFunc = (a, b) => (a.name < b.name ? 1 : -1)                             // 降低动态路由的优先级

  return vueFileList.reduce((routes, filename) => {
    const parenFileName = getAncestry(filename)
    const fileName = getFileName(filename)
    let filePath = getFilePath(filename)
    const parentFileExist = vueFileList.includes(parenFileName)

    if (fileName === 'index') filePath = filePath.slice(0, -fileName.length)
    if (options.processAllIndex) filePath = filePath.replace(/\/index\//g, '/')
    filePath = filePath.replace(/\/_(\w+)/g, '/:$1')

    const route = {
      name: filename,                                                                     // filename作为唯一ID
      path: filePath,
      component: () => import(`@/views${filename}`),
      children: [],
      props: false, // [布尔模式 :](https://router.vuejs.org/zh/guide/essentials/passing-props.html#%E5%AF%B9%E8%B1%A1%E6%A8%A1%E5%BC%8F) 如果 props 被设置为 true，route.params 将会被设置为组件属性。
      meta: { 
        requiresAuth: false,
        title: '',
      }
    }

    if (!parentFileExist) {
      routes.push(route)                                                                  // 非嵌套路由直接push
    } else {
      const node = flat(routes).find(item => item.name === parenFileName).children        // 嵌套路由找到引用后push
      node.push(route)
    }

    return routes
  }, []).sort(sortByNameFunc)
}

const basicRoute = [
  {
    path: '/',
    redirect:'/Home',
    component: () => import(`@/views/Home`),
    children: [],
    props: false, // [布尔模式 :](https://router.vuejs.org/zh/guide/essentials/passing-props.html#%E5%AF%B9%E8%B1%A1%E6%A8%A1%E5%BC%8F) 如果 props 被设置为 true，route.params 将会被设置为组件属性。
    meta: { 
      requiresAuth: false,
      title: '首页'
    }
  }
]

// 理由迭代器

export let processRoutes = basicRoute.concat(generateRoute(), { path: '*', redirect: '/error' })
// 所有路由
export const autoRouter = new Router({
  // Vue scrollBehavior 滚动行为
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  routes: processRoutes,
  mode: 'history'
})


