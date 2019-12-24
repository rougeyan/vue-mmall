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

### 关于vue-router 更多
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

// 时间上使用的的
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


