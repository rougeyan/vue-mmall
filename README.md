# vue基础
## 生命周期
[生命周期](https://segmentfault.com/a/1190000008010666?utm_source=tag-newest)
```js
* beforeCreated // computed 不能使用
* created  // 创建完成 但是未挂载 // 对data做一些数据处理 $el 还不在
* beforeMounte // 编译/挂载前
* mounted // 编译/挂载之后

* beforeUpdate // 更新组件之前(一般适用于 组件props传递的参数有变化后)
* updated // 组件更新后
* activated  // 对`keep-alive`, 组件被激活时调用
* deactivated  // 对`keep-alive`, 组件被激活时调用

* beforeDestory // 组件销毁前;
* destoryed // 组件销毁完成

```
### computed 和methods 区别
[浅析Vue中computed与method的区别](https://segmentfault.com/a/1190000014478664?utm_source=tag-newest)


# 组件通讯
*参考文献

[【2019 前端进阶之路】Vue 组件间通信方式完整版](https://zhuanlan.zhihu.com/p/60250686)

[vue 组件通信看这篇就够了(12种通信方式) - 程序猿的生活的文章 - 知乎](https://zhuanlan.zhihu.com/p/109700915)

## 父子间通讯  - 父传子 (通过props传递)
参考文献

[vue组件之属性Props](https://www.cnblogs.com/wentutu/p/10930399.html)

[Vue父组件向子组件传值以及data和props的区别](https://www.cnblogs.com/qqhfeng/p/11483929.html)

###  监听props变化
```js
watch: {
  value:{
      handler (newV, oldV) {
        // do something, 可使用this
        console.log(newV,oldV)
      },
      deep:true: //深度监听，可监听到对象、数组的变化
     }
},
```
### props其他
[在vue中子组件修改props引发的对js深拷贝和浅拷贝的思考](https://www.cnblogs.com/hutuzhu/p/10119698.html);

## 父子间通讯  - 子传父 $.on, $emit
```html
// 父组件
<parent @updateValue="methods">
<script>
// 子组件
methods:{
  emitParent(
    this.$emit('updateValue',value) 
  )
}
</script>
```

## eventBus(通过创建new Vue实例)
类似于 $.on(), $.emit(), 但是是注册在`new Vue()`上
```js
// eventbus.js
import Vue from 'vue';  
export default new Vue(); 

// main.js
import * as eventbus from '@/utils/event.js'
Vue.prototype.$EventBus = eventbus; // 全局引入eventbus

// 组件中调用
eventbus.$on('update',(target)=>{
  // todo
})
eventbus.$emit('update',(target)=>{
  // todo
})
```

### [问题] 全局注册的eventbus多次触发的问题
[eventbus多次触发的问题](https://www.jianshu.com/p/fde85549e3b0)

[VUE 爬坑之旅-- eventBus 事件总线的基本使用和重复触发事件问题的解决](https://blog.csdn.net/zgh0711/article/details/80284830)

[EventBus注册在全局上时，路由切换时会重复触发事件，如何解决呢？](https://github.com/haizlin/fe-interview/issues/456?spm=a2c6h.13066369.0.0.26be3ad3rcVvJu)

[vue中eventbus被多次触发（vue中使用eventbus踩过的坑）](https://www.jianshu.com/p/fde85549e3b0)

建议在created里注册，在beforeDestory移出
在组件内的beforeRouteLeave中移除事件监听
问题来源于GitHub，查看更多答案，请查看https://github.com/haizlin/fe-interview/issues/456

大致理解为 切换路由的情况下, 因为eventBus是注册在全局上,
来回切换路由不会销毁事件,只会重复绑定

## Vuex

待补充..

# 指令
## 指令 - v-for
### 对象遍历渲染且修改对象,不触发重新渲染
```html
// example
<el-collapse-transition>
  <el-form :model="deviceAttributes" label-width="100px">
    <template v-for="(value,key) in deviceAttributes">
      <el-form-item :label=value>
        <el-input class="attrInput" v-model="deviceAttributes[key]"/>
        <el-button class="attrBtn" type="primary" size="mini" @click="delkey" v-if="judgeOrginalAttr(key)">删除</el-button>
      </el-form-item>
    </template>
  </el-form>
</el-collapse-transition>
```
注意事项: 
假如我动态给修改,给对象增加属性

实际上 页面是不会有变化的;

解决办法: 要通过改变引用方式;

# 修饰符
## 修饰符 - `.sync` 双向绑定
参考文献

[彻底明白VUE修饰符sync](https://www.jianshu.com/p/d42c508ea9de)

[vue 之 .sync 修饰符](https://www.cnblogs.com/foreveronlymiss/p/foreveronlymiss.html)

[深入理解vue 修饰符sync【 vue sync修饰符示例】](https://www.jianshu.com/p/6b062af8cf01)


某些场景下 需要使用双向绑定的情况:
例如例: 对话框组件
其内部自行绑定按钮触发显示/隐藏;
外部通过props的也可以控制显示/隐藏;

此时内部,和外部均修改了prop的属性`.sync`就适用了

# 自定义组件 及 自定义事件(v-model, @change, @blur, @change, @input ...)

## 自定义组件 - 自定义属性
[自定义组件 的自定义属性](https://blog.csdn.net/weixin_30706691/article/details/98916849)

属性是有区分动态属性跟静态属性的,本质上都是通过props传递 一个是静态一个是动态罢了
```html
<component
  v-model = "label"
  :labelA = "varLable" // 动态
  labelB = "lable" // 静态
></componet>

labelA / lableB 均是由`props`上面接收;
```
## 自定义组件 - 自定义事件 @focus / @blur / @input / @change 
<!-- 子组件中 -->
```html
<input 
  type="text"
  placeholder="请输入" 
  :value="value" 
  @change="handleChange"
  @input="handleInput"
  @focus="handleFocus"
  @blur="handleBlur"
  />
<script>
methods: {
  updataData(key,val){
    // this.$emit('change', val)
    this.$emit('input', val); // v-model语法糖 监听 
  },
  handleInput($event){
    console.log('onhandleInput');
    this.updataData('value',$event.target.value);
  },
  handleChange($event){
    console.log('onhandleChange');
    this.updataData('value',$event.target.value);
  },
  handleBlur(){
    this.$emit('blur', event);
  },
  handleFocus(){},
}
</script>
```

子组件触发个类事件 `handleXXXX`的方法;

然后通过事件派发器
```js
this.$emit('blur',...args)
```
向上传递触发 对应具名的 `@blur` 监听器然后执行handleBlur的方法()

```html
  <formInput 
    v-model="usertest.value"
    @blur="handleBlur"
  ></formInput>
  <script>
  // 这个监听器的事件是在父组件定义的;
  handleBlur(args){
    // todo something // 获取...args的参数
    // console.log(...args)
  }
  </script>
```

### Vue自定义的组件上 `@click`点击事件失效
  自定义组件中无法 绑定事件
### vue hover事件相关
  使用`@mouseenter` 和 `@mouseleave`

### 修饰符 .native
[vue组件添加事件@click.native](https://www.cnblogs.com/lianxisheng/p/10381431.html)

## 自定义组件 - 全局组件(formInput)

### 深入了解 v-model 原理
* 参考文献
[vue 自定义组件使用v-model](https://www.jianshu.com/p/3dbbbc7a259c)

[自定义组件中如何使用v-model进行双向绑定呢？](https://www.cnblogs.com/coffeelovetea/p/8326115.html)

[ElementUI 是如何实现父子组件的双向绑定的?](https://segmentfault.com/q/1010000008928889)

[自定义 Vue 中的 v-model 双向绑定](https://segmentfault.com/a/1190000018893494)
```html
<input
  :value="currentValue"
  @input="handleInput"
>
<!-- 
  其他写法: 直接写在dom上
  <input v-bind:value="something"  v-on:input="something = $event.target.value">
  简写：
  <input :value="something"  @input="something = $event.target.value"> -->
```
method:

```js
handleInput(event) {
    const value = event.target.value;
    this.$emit('input', value);
    // this.setCurrentValue(value);
    // this.$emit('change', value);
},
```
其实就是emit了input事件，并将更改后的值传出去。文档如下

文档中已经提到v-model等效于：

```html
<el-input :value="input" @input="value => { input = value }" placeholder="请输入内容"></el-input>
```

原理

对于一个带有 v-model 的组件（核心用法），它应该如下：

* 带有v-model的父组件通过绑定的value值（即v-model的绑定值）传给子组件，子组件通过 prop接收一个 value;
* 子组件利用 $emit 触发 input 事件，并传入新值value给父组件;
* 父组件监听更新值及后续操作;
```js
this.$emit('input', value);
```

注意:
假如我绑定是是一个obj的value,也可以整个更新后的`Object`传出去: 具体请看
[v-model绑定一个对象，组件内部分别负责不同字段的场景实现](https://www.cnblogs.com/kidsitcn/p/11769579.html)

[自定义全局组件](https://www.cnblogs.com/conglvse/p/9641550.html)


### 监听 input框 输入时候变动且 即可修改
[vue实现实时监听文本框内容的变化（最后一种为原生js）](https://www.cnblogs.com/dancer0321/p/9605512.html)

```js
  <input type="text" v-model="items.type" ref="myinput" /> 
  // 通过$ref原生修改;
  this.$refs.myinput.value
```

## 自定义全局组件 - Modal框
开发一个全局modal组件, 经过一番折腾,遂整理一下以免遗忘.

考究过`element-ui`的示例代码,
理解 `简易全局组件(提示,消息框,)`, 复杂全局组件(自定义内容对话框)`

### 简易部分;
*参考文献

[vue 采用promise方式开发弹窗插件](https://www.jianshu.com/p/9645e6a26bc2)

通过`this.$toast(params)`来调用

思路为:
  a.创建一个函数,根据参数bool值调用存贮promise结果的变量的resolve或reject属性,这个函数会被toasttemplate.vue来调用
  b.根据vue官方文档插件开发规范,创建一个对象,用来对外暴露
  c.在这个对象里使用vue.extend把toasttemplate.vue构造一个vue类,再由这个类生成的对象(dom)放在dom上使用
  d.在对象里要返回一个promise对象,promise的resolve和reject存在一个变量中,由a步骤中的函数调用,并把这个函数放在新建vue类的原型上

### 复杂全局组件(自定义全局组件)
通过`<自定义dialog>标签`来调用

之前
本来打算利用slot通用外层;但是发现slot中子组件无法向父元素通讯
遂slot并不适用;
因此像复杂的全局组件 通过带`<slot>`的标签
来触发显示,而不是像简易的全局组件通过`this.$toast`等

### 其他...



# 标签 
## 标签- `<slot/>`标签理解及实践
*参考文献

[vue 里面的slot属性](https://blog.csdn.net/weixin_41646716/article/details/80450873)

slot 可以理解为整理盒,一开始界定边界,让标签安放;
常用于一些通用无状态容器里面展示标签里面

```html
<!-- my-components.vue  定义-->
<template>
  <div>
    <slot name="header"></slot>
    <slot></slot>
    <slot name="footer"></slot>
  </div>
</template>
<!-- 调用 -->
<my-components>
  <slot slot="header">星期一</slot> // 此标签会被匿名<slot name="header">里面
  <p>今天天气真好!!</p>  // 此标签会被匿名<slot/>里面
</my-components>
```

### 注意事项:
* slot中无法向父元素通讯

*参考文献

[vue子组件作为slot如何触发父组件的事件，slot踩坑记录](https://blog.csdn.net/weixin_42565137/article/details/99676543)

错误示例
```vue
<template>
 <parent-components>
   <p>我是dialog</p>
   <button @click="closeEmit">关闭</button>
   <button @click="clickcb">回调</button>
 </parent-components>
</template>

<script>
 export default {
   methods: {
     closeEmit(){
       this.$emit('close','value');
     },
     clickcb(){
       console.log('哈哈')
     }
   }
 }
</script>

// parent-components.vue(父组件)
<!-- parent-components -->
<template>
   <div class="modal-wrap">
     <slot/>
   </div>
</template>

<script>
 export default {
   mounted(){
      this.$on("close",function(params){
       console.log(params)
     })
   },
   methods:{
   }
 }
</script>

```

# Vue-router
参考文献

[vue-router 常用知识点一](https://www.jianshu.com/p/e3d834b64313)

## 路由参数获取

1.通过query配置的： `this.$route.query.xxx`
若害怕强制刷新丢失参数 建议使用 query模式 放在url上 

2.通过params配置的：
this.$route.params 

## 编程式路由使用

```js
const userId = '123'
this.$router.push({ name: 'user', params: { userId }}) // -> /user/123

this.$router.push({ path: `/user/${userId}` }) // -> /user/123
// 这里的 params 不生效

// router.push({ path: '/user', params: { userId }})
```

```js
// 调用  = > 这里注册的时候要对应才行
this.$router.push({ name: "pointCheckEdit", params: { checkId: -1 } });
// 注册
{
  path: 'pointCheckEdit/:checkId',
  name: 'pointCheckEdit',
  meta: {
    requireAuth: true
  },
  component: PointCheckEdit
},
```

## router 动态引入组件的几种方式

component: () => import './views/About.vue') require

[component：(resolve) => require是什么意思？](https://segmentfault.com/q/1010000017913060)

## axios query params

```js
// 为给定 ID 的 user 创建请求
axios.get('/user?ID=12345')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

// 可选地，上面的请求可以这样做
axios.get('/user', {
    params: {
      ID: 12345
    }
  })
```


## Chrome报错 Navigating to current location ("/homePage") is not allowed
[解决message: "Navigating to current location ("/homePage") is not allowed",警告的问题](https://blog.csdn.net/XUELUO123456789/article/details/103147494)
```js
const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error)
}
```

# Vue-cli项目相关

[3.0初体验参考](https://blog.csdn.net/qq_36407748/article/details/80739787)

[vue-cli 3.0脚手架配置及扩展](https://blog.csdn.net/franks_t_d/article/details/80740268)

[vue2.5/vue-cli3.0版本更新引发的一些常见问题](https://segmentfault.com/a/1190000014219426?utm_source=channel-hottest)


## 环境变量
```js
//  vue-cli 2.0 判定环境
  process.env.NODE_ENV !== 'production'
// vue-cli 3.0 环境 需要加入VUE_APP_ ***
```

## vscode 设置vue模板
[新建vue文件设置vue模板](https://segmentfault.com/a/1190000015336481?utm_source=tag-newest)

## vue.config.js 配置
vue-cli2.x 是存在`config`配置文件夹; vue-cli3.x 模板没有该文件夹,
在根目录下创建vue.config.js 文件, 具体内容参详
[vue.config.js](https://cli.vuejs.org/zh/config/#vue-config-js)

## 引入全局变量scss 错位问题

**sass 指南 官方**
[sass指南](https://www.sass.hk/) 

[vue cli3使用官方方法配置sass全局变量报错](https://segmentfault.com/q/1010000020343645/)


**过去式**

## vue-cli3 安装

## 使用淘宝镜像解决NPM安装依赖包过慢的问题

*1* 淘宝镜像源

npm config set registry http://registry.npm.taobao.org/

*2* 重置

npm config set registry https://registry.npmjs.org/


*3* 重置查看配置指令

npm config list -l

## 使用sass 全部变量
在`vue.config.js` 添加`css`部分代码即可;
```js
module.exports = {
  devServer: {
  }
  css: {// 使用scss 全局变量;
    loaderOptions: {
      sass: {
        data: `
          @import "@/common/css/_variable.scss";
        `
      }
    }
  }
}
```
 

## 安装node-sass 报错 (python未安装)
报错: python 未安装
`Error: Can't find Python executable "python", you can set the PYTHON env variable.`
* 解决方法
使用powershell 全局安装
```
npm install --global --production windows-build-tools
```


# vue全局api

## vue.use()  // globaldialog
[浅谈Vue.use](https://segmentfault.com/a/1190000012296163)

[关于Vue.use()详解](https://www.jianshu.com/p/89a05706917a)
## vue.extend()

# Vue相关高阶

[vue技术分享之你可能不知道的7个秘密](https://zhuanlan.zhihu.com/p/86157966)
[仿nuxt.js，自动构建路由，释放你的双手？！](https://zhuanlan.zhihu.com/p/88895615)

# 其他

自定义组件v-model 以及 @change事件监听

## 简易映射数据字典
对于一些系统是具备数据字典的,但对于没有数据字典的系统来说可以创建的字典

通过 v-model的绑定value的时候,我们需要做一个映射, 把当前映射的值通过 数据字典修饰出来

```jsx
let  sexValue =$.ajax();  // sex 的值为 male / female

// simple enum
let sexDictionary = {
  "male": "男" // 男
  "female:": "女"  // 女
}

<myInput v-model="sexValue">
// 用computed方法
<style>
  computed:{  
    data(sex){ 
        return sexDictionary[sex]
    }
  }
</style>
```

注意的是 computed是理解计算,里面不能包含异步操作;

若需要异步获取数据字典,则需要methods来修饰

## 简易轮询
[js 实现简单的轮询](https://www.cnblogs.com/phermis/p/11394508.html)










# 待整理
## css 属性选择器
```css
input[readonly=readonly]{
  text-align: center;
}
```

## 简易loading
5分钟学会 CSS 动画：纯 CSS 实现 loading 效果 - 李中凯的文章 - 知乎
https://zhuanlan.zhihu.com/p/95050501



## 解决请求 参数格式问题
[http协议的Request Payload 和 Form Data 的区别](https://www.cnblogs.com/xuzhudong/p/8487119.html)

Query String parameters 

http: get/post参数 // 回顾图解http;
[http请求参数之Query String Parameters、Form Data、Request Payload](https://www.jianshu.com/p/c81ec1a547ad)
 浏览器 url参数?id=frontCode&paramsid=haha&
 http://www.gzl.cn/index.html?id=1234&page=1234
 请求头部:
 requst Payload
 {userName: "admin", userPwd: "123"}
 form Data 中的一些参数 obj{};
 post 请求中 把params参数放在body里面;
 通过 一般来说设




## 需要了解路由中 注册的name 和组件中使用的name 和keep-alive 的name 对应关系;


## 7牛云储存
[7牛云储存](https://developer.qiniu.com/kodo/sdk/1662/java-sdk-6)

## async await 优于 promiose

[async await 优于 promiose](https://zhuanlan.zhihu.com/p/26260061)
