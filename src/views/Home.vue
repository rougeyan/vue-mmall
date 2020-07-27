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
  },
  mounted(){
  },
  activated(){
  },
  methods: {
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