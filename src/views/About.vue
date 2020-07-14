<template>
  <div class="about">
    <h1>关于项目</h1>
    <strong class="textred">本项目是个人基于课程学习练手的地方,线上所有物品均为虚拟产品,不会产生真实订单。请勿进行真实交易支付。</strong>
    <h2 class="tc">前端</h2>
    <p>
      基于
      <span>vuejs</span>全家桶实现。
    </p>
    <h3>
      项目地址
      <a
        href="https://github.com/rougeyan/vue-mmall"
        target="_blank"
      >https://github.com/rougeyan/vue-mmall</a>
    </h3>
    <h3>项目实践</h3>
    <ol>
      <li>封装UI组件库，通用全局组件</li>
      <li>前端统一请求拦截处理</li>
      <li>分别实现Vuex状态管理及eventbus.js的状态管理</li>
      <li>
        <span>webpack</span>优化,基于vue-cli脚手架的进行优化.代码层面,网络传输层面
      </li>
      <li>...后续更多</li>
    </ol>
    <h3>项目部署及接口</h3>
    <p>
      集成
      <span>
        <a href="http://jenkins.yzhold.com/" target="_blank">jenkins</a>
      </span>持续构建的项目。
      部署在<span>nginx</span>WEB服务器上。跨域请求通过反向代理到tomcat实现
    </p>

    <h2 class="tc">后端部分</h2>
    <p>
      参考课程
      <a
        href="https://coding.imooc.com/class/96.html"
        target="_blank"
      >从0开始 独立完成企业级Java电商网站开发(服务端)</a>
    </p>
    <p>
      本项目后台是基于
      <span>java ssm框架(spring+springMVC+mybaitis)</span>编写的电商服务端,
      基于
      <span>maven</span>构建工具构建。数据库采用
      <span>Mysql</span>。
      缓存采用
      <span>redis库</span>。
    </p>
    <h3>
      项目地址
      <a
        href="https://github.com/rougeyan/mmall"
        target="_blank"
      >https://github.com/rougeyan/vue-mmall</a>
    </h3>
    <h3>项目实践</h3>
    <ol>
      <li>实现基本电商购物流程,如登录,购物车,下单,支付宝扫码支付,地址等模块的接口实现</li>
      <li>后台接口: 产品管理如:上下架;订单管理,如取消,发货等</li>
      <li>调用支付宝扫码支付接口</li>
      <li>redis缓存引入</li>
      <li>jenkins持续集成部署</li>
      <li>...后续更多</li>
    </ol>

    <h2 class="blue">总结(持续更新)</h2>
    <p>
      <a href="https://github.com/rougeyan/vue-mmall/blob/master/README.md" target="_blank">
        <span class="blue">vue项目总结</span>
      </a>
    </p>
    <p>
      <a href="https://github.com/rougeyan/mmall/blob/master/README.md" target="_blank">
        <span class="blue">java项目总结</span>
      </a>
    </p>
  </div>
</template>
<script>
export default {
  props: {
  },
  data() {
    return {}
  },
  computed: {
  },
  created() {
    // 通过eventbus来缓存路由
  },
  mounted() {

  },
  watch: {
  },
  methods: {
  },
  components: {
  },
}
</script>
<style scope lang="scss">
.about {
  font-size: 18px;
  label {
    font-weight: bold;
  }
  a {
    color: $tc;
  }
  span {
    color: $tc;
    cursor: pointer;
  }
  .blue {
    color: #09f;
  }
  .tc {
    color: $tc;
  }
  i {
    color: #09f;
    cursor: pointer;
  }
  p {
    margin-bottom: 12px;
  }
  strong {
    font-size: 24px;
  }
  .textred {
    color: red;
  }
  ol {
    li {
      list-style-type: disc;
    }
  }
}
</style>
