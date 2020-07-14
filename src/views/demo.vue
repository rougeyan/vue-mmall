<template>
  <div class="home">
    <global-head>
      <slot slot="global-h-breadCrumb">
        <p>分类 13855252522@test987.com</p>
      </slot>
    </global-head>
    <button @click="getModal">全局模态框</button>
    <button @click="dialogVisible=true">标签模态框</button>


    <DialogWrapper :visible.sync="dialogVisible"
    :maskClickClose="true">
      <div>div - dialog content对话框内容</div>
      <slot slot="modal-footer">
        <button @click="dialogVisible=false">关闭</button>
      </slot>
    </DialogWrapper>
  </div>
</template>

<script>
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
    this.$toast({
      title:'注意', //弹窗的标题
      style: 'error-tips',
      cancelText: "取消", // 显示取消按钮
      comfirmText: "确定", // 显示确认按钮
      content:'本项目是个人基于课程学习练手的地方,线上所有物品均为虚拟产品,不会产生真实订单。请勿进行真实交易支付。',//弹窗的内容
      mask: true, // 显示遮罩;
      autoHide: -1,// 自动时间
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
        content:'本项目是个人基于课程学习练手的地方,线上所有物品均为虚拟产品,不会产生真实订单。请勿进行真实交易支付。',//弹窗的内容
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
    }
  },
  components: {}
};
</script>
<style lang="scss">
  @import '@/assets/scss/page/homePage.scss';
</style>