# vue-mmall

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### 解决请求 参数格式问题
[http协议的Request Payload 和 Form Data 的区别](https://www.cnblogs.com/xuzhudong/p/8487119.html)

Query String parameters 

### 引入全局变量scss 错位问题

**sass 指南 官方**
[sass指南](https://www.sass.hk/) 

[vue cli3使用官方方法配置sass全局变量报错](https://segmentfault.com/q/1010000020343645/)
















**过去式**

### vue-cli3 安装

### 网络较慢  使用淘宝镜像

设成淘宝的

npm config set registry http://registry.npm.taobao.org/

2.换成原来的

npm config set registry https://registry.npmjs.org/


查看配置指令

npm config list -l
 

### 安装node-sass 报错 (python未安装)
报错: python 未安装
`Error: Can't find Python executable "python", you can set the PYTHON env variable.`
* 解决方法
使用powershell 全局安装
```
npm install --global --production windows-build-tools
```

### computed 立即计算 不能使用异步函数;
```js
若一些数值是通过数据字段转换的例如 

var obj = {gender: 0 // 0| 1}  我需要通过异步获取数据字段进行对它转换

不能使用异步;
需要用methods 去转换
```


### 关于vue-route的更多详解
[vue-router 常用知识点一](https://www.jianshu.com/p/e3d834b64313)

this.$route 配合组件带来的耦合问题

### 关于vue-router

```js
const userId = '123'
router.push({ name: 'user', params: { userId }}) // -> /user/123

router.push({ path: `/user/${userId}` }) // -> /user/123
// 这里的 params 不生效
router.push({ path: '/user', params: { userId }}) // -> /user
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

### 需要了解路由中 注册的name 和组件中使用的name 和keep-alive 的name 对应关系;

### 父组件传参的prop为子组件展示注意的问题
父组件传参的prop为子组件展示,
// 保持数据 => 单项数据流
子组件复制一份pros的数据作为renderData;
需要更新到父组件的时候
使用$emit() 触发组件更新

有比较多的缺陷, 

如果去监听这个props的变化?

### 关于props  单项数据流 去 修改props 情况的时候

[在vue中子组件修改props引发的对js深拷贝和浅拷贝的思考](https://www.cnblogs.com/hutuzhu/p/10119698.html);

引用类型进行数据拷贝

但是

### 关于 .sync 的同步props数据 的修饰符使用技巧

[彻底明白VUE修饰符sync](https://www.jianshu.com/p/d42c508ea9de)
[vue 之 .sync 修饰符](https://www.cnblogs.com/foreveronlymiss/p/foreveronlymiss.html)

某些场景下 需要使用双向绑定的情况
例如:

对话框就是一个组件
内部自行关闭;
外部通过props的也可以控制显示/隐藏

此时内部修改了prop的属性;
外部又修改了props的属性;此时会报;

使用 .sync来同步数据的流动
```html
// 父元素使用 v-bind:dialogVisibled.sync="openDevice" 
<deviceDialog v-on:closeDeviceDialog="openDevice=false"  v-on:submitDeviceDialog="submitDevice" v-bind:dialogVisibled.sync="openDevice"></deviceDialog>

// 子组件
<script>
  this.$emit('update:dialogVisibled',newValue) 来触发属性的更新
</script>
```

### v-model 显示 与数据分离;
v-model 对应的是 oneDayOneTimes ;
实际上显示的是一天一检修;
```json
// 使用枚举
//
planOptions:{
  "oneDayOneTimes": 一天一检,
  "oneDayTwoTimes": 一天一检
}

// 时间上使用的
computed:{
  
  data(params){ // params = "oneDayOneTimes"
      return planOptions[params] // 一天一检;
  }
}

```
### vue props监听变化的几种方式

使用
```jsx
this.$emit("eventsName",value) 
// 去触发

<haha v-on:eventsName="bindEvent"></haha>
```


### vue v-for 可以对对象进行遍历
``vue
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
假如我动态给对象增加属性的,实际上 页面是不会有变化的;
要通过改变引用方式;


### 其他一些高阶用法

[vue技术分享之你可能不知道的7个秘密](https://zhuanlan.zhihu.com/p/86157966)
[仿nuxt.js，自动构建路由，释放你的双手？！](https://zhuanlan.zhihu.com/p/88895615)


### 关于自定义组件的 v-model  @blur 及其他一些自定义组件的属性使用

<!-- 省略两个v-on v-change 实现双向绑定 -->

[ElementUI 是如何实现父子组件的双向绑定的?](https://segmentfault.com/q/1010000008928889)
[v-model绑定一个对象，组件内部分别负责不同字段的场景实现](https://www.cnblogs.com/kidsitcn/p/11769579.html)
[vue自定义select组件 v-model语法糖](https://www.cnblogs.com/024-faith/p/select.html)
[vue 自定义组件使用v-model](https://www.cnblogs.com/coffeelovetea/p/8326115.html)
[自定义 Vue 中的 v-model 双向绑定](https://segmentfault.com/a/1190000018893494)

```html
<input type="text" placeholder="请输入" 
    :value="value" 
    @change="updataData('value',$event.target.value)"
    @input="updataData2('value',$event.target.value)"/>

<script>
 methods: {
    updataData(key,val){
      this.$emit('change', val)
      this.$emit('input', val);
    },
  },
  </script>
```

### 关于v-model 和 .sync修饰符的异同之处;
[深入理解vue 修饰符sync【 vue sync修饰符示例】](https://www.jianshu.com/p/6b062af8cf01)
[vue 自定义组件使用v-model](https://www.jianshu.com/p/3dbbbc7a259c)


### props 属性详解
[Vue父组件向子组件传值以及data和props的区别](https://www.cnblogs.com/qqhfeng/p/11483929.html)
[vue组件之属性Props](https://www.cnblogs.com/wentutu/p/10930399.html)

1.在父组件中定义 msg 属性
```js
    data:{
      msg:'123 -我是父组件中的数据'
    },
```
2.引用子组件
父组件可以在引用子组件的时候，通过属性绑定的形式，把需要传递给子组件的数据，以属性绑定的形式，传递到子组件内部，供子组件使用。

把父组件传递过来的 msg 属性，绑定到子组件的 parentmsg 属性上。

```html
<com1 :parentmsg="msg"></com1>
```
3. 在子组件定义部分，需要把父组件传递过来的 parentmsg 属性，先在props数组中定义一下（代表这个属性是由父组件传递过来的），这样，才能使用这个数据
props:['parentmsg'],
4.在子组件中使用
```html
  template:"<h1>这是子组件--{{parentmsg}}</h1>",
```
5.子组件中data和props的区别
子组件中的data数据，不是通过父组件传递的是子组件私有的，是可读可写的。

子组件中的所有 props中的数据，都是通过父组件传递给子组件的，是只读的。


### 关于组件事件的修饰符 .native
[vue组件添加事件@click.native](https://www.cnblogs.com/lianxisheng/p/10381431.html)

### 关于输入框的或自定义组件监听值的变化
1. 使用 `@input` 监听做值回调;
```html
<template>
  <input 
    type="text"
    placeholder="请输入" 
    :value="value" 
    @input="handleInput"
    />
</template>
```
2. 使用watch针对data中的值
使用场景: 若在data里面有设置属性的话 / value 是个obj 需要deep监听;
```html
<script>
{
  watch{
    value: function(){
      // todo something
    }
  }
}

</script>
```

### 关于子组件 @focus / @blur / @input / @change 
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
向上传递触发 handlerbbb的方法()

```html
  <formInput 
    v-model="usertest.value"
    @blur="handlerbbb"
  ></formInput>
  <script>
  // 这个监听器的事件是在父组件定义的;
  handlerbbb(args){
    // todo something // 获取...args的参数
    // console.log(...args)
  }
  </script>
```
### 关于自定义组件的自定义属性

[自定义组件 v-mode 及属性](https://blog.csdn.net/weixin_30706691/article/details/98916849)

属性是有区分动态属性跟静态属性的
```html
<component
  v-model = "label"
  :label = "varLable"
  label = "lable"
></componet>

label 同事都是由`props`上面接收;
```

### 关于slot 的理解
[vue 里面的slot属性](https://blog.csdn.net/weixin_41646716/article/details/80450873)
在一些自定义标签中内部想假如插槽
```html
<component
  v-model = "label"
  :label = "varLable"
  label = "lable"
>
// 我需要在这里插入我需要的东西
<>
</componet>
```