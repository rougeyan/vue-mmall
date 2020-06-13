<template>
  <div class="home">
    <global-head>
      <slot slot="global-h-breadCrumb">
        <p>分类 13855252522@test987.com</p>
      </slot>
    </global-head>
    <button @click="getModal">getModal</button>
    <button @click="dialogVisible=true">dialogVisible</button>
    <div>
      <home-category  :categoryList="category"/>
      <home-swpier />
    </div>
    <!-- // 楼层速览 -->
    <home-floor :productsList="phoneProductsList" :title="phoneParams.title" class="double-deck"/>
    <home-floor :productsList="travelProductsList" :title="travelParams.title" />
    <global-footer></global-footer>
    <!-- <HelloWorld /> -->
    <globalDialogWrapper :visible.sync="dialogVisible"
    :maskClickClose="true">
      <div>div - dialog content对话框内容</div>
      <slot slot="modal-footer">
        <button @click="dialogVisible=false">关闭</button>
      </slot>
    </globalDialogWrapper>
  </div>
</template>

<script>
// @ is an alias to /src
import GlobalHead from "@/components/global/globalHead.vue"
import HomeCategory from "@/components/home/homeCategory.vue"
import HomeSwiper from "@/components/home/homeSwiper.vue"
import HomeFloor from "@/components/home/homeFloor.vue"
import GlobalFooter from "@/components/global/globalFooter.vue"

import {api_categoryId_search,api_get_categorys} from '@/api/homePageApi'

export default {
  name: "Home",
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
    this.getPhoneCategory();
    this.getTravelCategory();
    api_get_categorys().then(res=>{
      if(res.status == 0){
        this.category = res.data;
      }
    })
  },
  mounted(){
  },
  activated(){
    console.log(1234)
  },
  methods: {
    getModal(){
      var self = this;
      this.$toast({
        showComfirm: true, // 显示确认按钮
        showCancle: true,//true->确认消息弹窗,false->消息提示弹窗
        title:'this is title', //弹窗的标题
        content:'this is content',//弹窗的内容
        mask: true, // 显示遮罩;
        autoHide: 5000,// 自动时间
      }).then(res=>{
        this.$toast({
        showComfirm: true, // 显示确认按钮
        showCancle: false,//true->确认消息弹窗,false->消息提示弹窗
        title:'this is second title', //弹窗的标题
        content:'this is second content',//弹窗的内容
        mask: true, // 显示遮罩;
      })
      },err=>{})
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
    "global-head" : GlobalHead,
    "global-footer" : GlobalFooter,
    "home-category":HomeCategory,
    "home-swpier": HomeSwiper,
    "home-floor": HomeFloor
  }
};
</script>
<style lang="scss">
  @import '@/assets/scss/page/homePage.scss';
</style>