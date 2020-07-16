<template>
  <BaseLayout>
    <div class="home">
    <div>
      <home-category  :categoryList="category"/>
      <home-swpier />
    </div>
    <!-- 楼层速览 -->
    <home-floor :productsList="phoneProductsList" :title="phoneParams.title" class="double-deck"/>
    <home-floor :productsList="travelProductsList" :title="travelParams.title" />
    <!-- <HelloWorld /> -->
    <DialogWrapper :visible.sync="dialogVisible"
    :maskClickClose="true">
      <div>div - dialog content对话框内容</div>
      <slot slot="modal-footer">
        <button @click="dialogVisible=false">关闭</button>
      </slot>
    </DialogWrapper>

  </div>
  </BaseLayout>
</template>

<script>
// @ is an alias to /src
import HomeCategory from "@/components/home/homeCategory.vue"
import HomeSwiper from "@/components/home/homeSwiper.vue"
import HomeFloor from "@/components/home/homeFloor.vue"

import {api_categoryId_search,api_get_categorys} from '@/api/homePageApi'
import io from 'socket.io-client';

export default {
  name: "home",
  data() {
    return {
      dialogVisible: false,
      phoneParams:{
        title: '手机',
        categoryId: 100012, // 数据库写死的
      },
      phoneProductsList:[],
      travelParams:{
        title: '旅游产品',
        categoryId: 100003, // 数据库写死的
      },
      travelProductsList:[],

      category: [] // 分类;
    }
  },
 
  created(){
    if(process.env.NODE_ENV === "production"){
        this.$toast({
        title:'注意', //弹窗的标题
        content:'本项目是个人基于课程学习练手的地方,线上所有物品均为虚拟产品,不会产生真实订单。请勿进行真实交易支付。',//弹窗的内容
        mask: true, // 显示遮罩;
        autoHide: 5000,// 自动时间
      })
    }
    this.getPhoneCategory();
    this.getTravelCategory();
    api_get_categorys().then(res=>{
      if(res.status == 0){
        this.category = res.data;
      }
    })
    // this.testSocketIo();
    // this.testSuccessSocet();
    /**
     *  Request URL: ws://localhost:8081/ws.do?id=10087
     *               ws://localhost:8081/ws.do/?id=10087&EIO=3&transport=websocket
        Provisional headers are shown
        Accept-Encoding: gzip, deflate, br
        Accept-Language: zh-CN,zh;q=0.9
        Cache-Control: no-cache
        Connection: Upgrade
        Host: localhost:8081
        Origin: http://localhost:8082
        Pragma: no-cache
        Sec-WebSocket-Extensions: permessage-deflate; client_max_window_bits
        Sec-WebSocket-Key: MzGWfN9MdQydPjFs6Vpu+w==
        Sec-WebSocket-Version: 13
        Upgrade: websocket
        User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36
        id: 10087
     */
  },
  mounted(){
  },
  activated(){
  },
  methods: {
    testSocketIo(){
      const wsPath = "http://localhost:8081";
      // 实际的path地址;
      // ws://localhost:8081/ws/?id=test10088&EIO=3&transport=websocket
      
      // websocket
      const mysocket = io(wsPath,{
        secure: true,
        reconnection: false,
        path: '/ws',
        query: {
          "id": 'test10088'
        },
        // autoConnect: true,
        transports: ['websocket'] // 传输协议
      });
      setTimeout(()=>{
        console.log(`[connected]:::::${mysocket.connected}`)
      },1000)
    },
    // 成功例子
    testSuccessSocet(){
      const wsPath = "ws://localhost:8081/ws?id=10088898";
      // let path = "ws://"+window.location.host+"/api/ws";
      let sockets = new WebSocket(wsPath);
      console.log(sockets.id)
      sockets.onopen = function (evt) {
        console.log(`[client:::]建立连接中......`);
      };
      sockets.onmessage = function (evt) {
          // var message = JSON.parse(evt.data); //将数据解析成JSON形式
          console.log(evt.data); //展示消息
          console.log(sockets);
          // console.log(evt)
      };
      sockets.onerror = function (evt) {
          console.log("产生异常");
      };
      sockets.onclose = function (evt) {
          console.log("已经关闭连接");
      };
    },
    getPhoneCategory(){
      api_categoryId_search(this.phoneParams).then(res=>{
        this.phoneProductsList = res.data.list;
      })
    },
    getTravelCategory(){
      api_categoryId_search(this.travelParams).then(res=>{
        this.travelProductsList = res.data.list;
      })
    }
  },
  components: {
    "home-category":HomeCategory,
    "home-swpier": HomeSwiper,
    "home-floor": HomeFloor
  }
};
</script>
<style lang="scss">
  @import '@/assets/scss/page/homePage.scss';
  .important-msg{
    color: red;
    font-size: 24px;
  }
</style>