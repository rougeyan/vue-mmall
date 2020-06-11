<template>
 <div class="full-layer" v-if="visible">
   <div class="layer-mask" @click="maskClose(maskClickClose)"></div>
   <div class="dialog-wrap">
    <div class="dialog-content">
      <p>{{title}}</p>
      <slot></slot>
    </div>
    <div class="dialog-footer">
      <slot name="modal-footer"></slot>
    </div>
   </div>
 </div>
</template>

<script>
 export default {
   props: {
     'title':{
       type:String,
       default: ''
     },
     'visible':true, // 显示属性
     'maskClickClose':false, // 允许点击遮罩关闭
   },
   data () {
     return {
     }
   },
   methods:{
     maskClose(){
       if(this.maskClickClose){
         this.$emit('update:visible',false);
       }
     }
   },
   components: {

   }
 }
</script>

<style>

 
</style>
