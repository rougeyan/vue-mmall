<template>
  <transition name="fade" v-if="show">
    <div class="full-layer">
      <!-- 遮罩 -->
      <div class="layer-mask" v-if="mask" @click="maskClose(maskClickClose)"></div>
      <!-- 内容层 -->
      <div class="modal-wrap" :class="styleClassName?styleClassName:''">
        <div id="mountedwrapper"></div>
        <p v-if="title">{{title}}</p>
        <div class="modal-content">
           <!-- 一些简单具体的内容 -->
          {{content}}
        </div>
        <div class="modal-footer">
          <button v-show="showComfirm" @click="comfirm">确1认</button>
          <button v-show="showCancle" @click="cancel">取消</button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
 export default {
   data () {
     return {
       maskClickClose: true, // 点击mask关闭
       styleClassName:'', // 样式层
       showCancle: true, // 显示取消按钮
       showComfirm: false, // 显示确认按钮
       title: 'title', // 标题
       show: true, // 显示状态
       content: 'content', // 内容
       mask: true, // 是否显示遮罩
       autoHide: -1, // 自动关闭时间
     }
   },
   created(){
   },
   mounted(){
     var self = this;
     if(self.autoHide && self.autoHide>0){
       setTimeout(()=>{
         self.show = false;
       },self.autoHide)
     }
    //  this.$nextTick(function () {
    //   debugger
    //   // Code that will run only after the
    //   // entire view has been rendered
    //   })
   },
   methods: {
     initParams(params){
       let self = this;
       for (const key in params) {
         if (params.hasOwnProperty(key)) {
           const element = params[key];
           self[key] = element
         }
       }
     }, 
     comfirm(){
       this.show = false;
       //  调用
       this.promiseCb(true);
     },
     cancel(){
       this.show = false;
       this.promiseCb(false);
     },
     maskClose(bool){
       if(bool)this.show = false;
       // 主动关闭都是取消
       this.promiseCb(false);
     }
   },
   components: {

   }
 }
</script>

<style lang="scss">
// 提示框
.modal-tips{
  color: $tc;
}
// 消息框

// 确认框
 
</style>
