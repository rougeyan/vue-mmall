<template>
  <div class="home">
    <global-head>
      <slot slot="global-h-breadCrumb">
        <p>分类 13855252522@test987.com</p>
      </slot>
    </global-head>
    <button @click="getModal">getModal</button>
    <button @click="dialogVisible=true">dialogVisible</button>
    <button @click="getModal">getModal</button>
    <div>
      <home-category />
      <home-swpier />
    </div>
    <!-- // 楼层速览 -->
    <home-floor v-for="item in 3"  :key="item" :class='item==1?"double-deck":""'/>
    <global-footer></global-footer>
    <!-- <HelloWorld /> -->
    <globalDialog :visible.sync="dialogVisible"
    :maskClickClose="true">
      <p>dialog对话框内容</p>
      <slot name="footer">
        <button @click="dialogVisible=false">关闭</button>
      </slot>
    </globalDialog>
  </div>
</template>

<script>
// @ is an alias to /src
import GlobalHead from "@/components/global/globalHead.vue"
import HomeCategory from "@/components/home/homeCategory.vue"
import HomeSwiper from "@/components/home/homeSwiper.vue"
import HomeFloor from "@/components/home/homeFloor.vue"
import GlobalFooter from "@/components/global/globalFooter.vue"

// import {api_user_login} from '@/api/userApi'

export default {
  data() {
    return {
      dialogVisible: false,
    }
  },
 
  created(){

  },
  mounted(){
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
        autoHide: 50000,// 自动时间
      }).then(res=>{
        this.$toast({
        showComfirm: true, // 显示确认按钮
        showCancle: false,//true->确认消息弹窗,false->消息提示弹窗
        title:'this is second title', //弹窗的标题
        content:'this is second content',//弹窗的内容
        mask: true, // 显示遮罩;
      })
      },err=>{})
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