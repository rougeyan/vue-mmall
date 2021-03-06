const path = require('path')
const resolve = dir => path.join(__dirname, dir)
// vue.config.js 配置说明
// 这里只列一部分，具体配置惨考文档啊
module.exports = {
  // publicPath  type:{string} default:'/' 
  // 将部署应用程序的基本URL
  // 将部署应用程序的基本URL。
  // 默认情况下，Vue CLI假设您的应用程序将部署在域的根目录下。
  // https://www.my-app.com/。如果应用程序部署在子路径上，则需要使用此选项指定子路径。例如，如果您的应用程序部署在https://www.foobar.com/my-app/，集baseUrl到'/my-app/'.

  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
  // css模块 允许使用全局变量;
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "~@/assets/scss/_variable.scss";`,
      },
    }
  },

  // outputDir: 在npm run build时 生成文件的目录 type:string, default:'dist'

  // outputDir: 'dist',

  // pages:{ type:Object,Default:undfind } 
  /*
  构建多页面模式的应用程序.每个“页面”都应该有一个相应的JavaScript条目文件。该值应该是一
  个对象，其中键是条目的名称，而该值要么是指定其条目、模板和文件名的对象，要么是指定其条目
  的字符串，
  注意：请保证pages里配置的路径和文件名 在你的文档目录都存在 否则启动服务会报错的
  */
  // css: {
  //   loaderOptions: {
  //     sass: {
  //       data: `
  //         @import "@/assets/styles/_variable.scss";
  //       `
  //     }
  //   }
  // }
  // pages: {
  // index: {
  // entry for the page
  // entry: 'src/index/main.js',
  // the source template
  // template: 'public/index.html',
  // output as dist/index.html
  // filename: 'index.html'
  // },
  // when using the entry-only string format,
  // template is inferred to be `public/subpage.html`
  // and falls back to `public/index.html` if not found.
  // Output filename is inferred to be `subpage.html`.
  // subpage: 'src/subpage/main.js'
  // },

  //   lintOnSave：{ type:Boolean default:true } 问你是否使用eslint
  lintOnSave: false,
  // productionSourceMap：{ type:Bollean,default:true } 生产源映射
  // 如果您不需要生产时的源映射，那么将此设置为false可以加速生产构建
  productionSourceMap: false,
  // devServer:{type:Object} 3个属性host,port,https
  // 它支持webPack-dev-server的所有选项
  chainWebpack: config => {
    // 添加别名
    config.resolve.alias
      // .set('vue$', 'vue/dist/vue.esm.js')
      .set('@', resolve('src'))
      // .set('@assets', resolve('src/assets'))
      // .set('@scss', resolve('src/assets/scss'))
      // .set('@components', resolve('src/components'))
      // .set('@plugins', resolve('src/plugins'))
      // .set('@views', resolve('src/views'))
      // .set('@router', resolve('src/router'))
      // .set('@store', resolve('src/store'))
      // .set('@layouts', resolve('src/layouts'))
      // .set('@static', resolve('src/static'))
      // 默认
      .set('@api',resolve('src/api'))
  },
  // 跨域处理:
  devServer: {
    port: 8082, // 端口号
    host: 'localhost', // 0.0.0.0
    https: false, // https:{type:Boolean}
    open: true, //配置自动启动浏览器
    // proxy: 'http://localhost:4000' // 配置跨域处理,只有一个代理
    proxy: {
      '/api': {
        // target: 'http://api-mmall.yzhold.com/', // Dev环境(生产环境)
        // target: 'http://192.168.1.238:10751/', // uat环境(测试环境)
        // target: 'http://192.168.1.215:10751/', // Rls环境)(...)
        target: 'http://localhost:8081/', // 正式环境
        ws: true,
        changeOrigin: true,
        // autoRewrite: false,
        // cookieDomainRewrite: false,
        pathRewrite: {
          '^/api': '/'
        }
      },
    },  // 配置多个代理
  }
}