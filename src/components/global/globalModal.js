import Vue from 'vue'
import Modaltemplate from './globalModal.vue'

/**
 * 
 * 只使用于简易的 Message 消息提示,MessageBox 弹框,Notification 通知 
 * 
 * 对与复杂的自定义内容的弹窗要通过
 * 引用组件 
 *  <dialog>
 *  内容自定义
 *  <slot></slot>
 *  </dialog>
 * 配合在 main.js里面使用vue.use(packageName);
 * 
 * 组件中使用this.callBack可以在后续promise继续执行回调;
 * 
 * [vue 采用promise方式开发弹窗插件](https://www.jianshu.com/p/9645e6a26bc2)
 * 
 * 调用方法
 * this.$toast({
    showCancle: 显示取消按钮, false,//true->确认消息弹窗,false->消息提示弹窗
    showComfirm: true, // 显示确认按钮
    title:'this is title', //弹窗的标题
    content_text:'this is content',//弹窗的内容
    mask: true, // 显示遮罩;
    autoHide: 2000,// 自动时间
  }).then(res=>{
  },err=>{})
  }
 */

let exportObj = {};

let promiseStatus = null;

function defaultCallBack (action,params){
  if(!action) promiseStatus.reject(params?params:false)
  promiseStatus.resolve(params?params:true)
}
// 在main.js中使用vue.use 要定义install函数;
exportObj.install = function(Vue,options={}){
  const VueToast = Vue.extend(Modaltemplate)  //创建模板
  let toast = null
  VueToast.prototype.promiseCb = defaultCallBack

  Vue.prototype.$toast = (params) =>{
    // 这里是为了防止重复创建较多的组件
    // 所以每次重新都是基于原来的VueComponents来重新渲染内容;
    if(!toast){
          toast = new VueToast().$mount()  //创建实例
          document.body.appendChild(toast.$el)  //挂载实例
      }
      if(!!toast && !!toast.initParams){
        toast.initParams(params)
      }
      toast.show = true;
      return new Promise((resolve,reject) => {
          promiseStatus = {resolve,reject}
      })
  }
}
export default exportObj