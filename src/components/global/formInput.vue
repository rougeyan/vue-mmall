<template>
  <div class="formItem-InputBd">
    <label :class="{'nessary':nessary}">{{label}}：</label>
    <input
      :type="inputType"
      placeholder="请输入" 
      :value="value"
      :readonly="!!readonly?true:false"
      @change="handleChange"
      @input="handleInput"
      @focus="handleFocus"
      @blur="handleBlur"
      />
    <div class="error-msg" v-if="errorTips">{{errorTips}}</div>
  </div>
</template>

<script>
import {formItemMixin} from '@/common/formItemMixin';
import {promisifyArrayMethods,promiseAllCheckedResult,debounce} from '@/common/utils'
export default {
  name: 'myFormInput',
  props:{
    "value":[String,Number],
    "label": {
      type: String,
      default: "label"
    },
    "inputType":{
      type: String,
      default: "text"
    },
    "nessary":{
      type: Boolean,
      default: true
    },
    "readonly":{
      type: Boolean,
      default: false,
    },
    "inputCheckRules": {
      type: Array,
      default: ()=>[]
    },
    "blurCheckRules": {
      type: Array,
      default: ()=>[]
    }
  },
  data() {
    return {
      errorTips: '', // 错误提示
    }
  },
  created() {
  },
  methods: {
    updataData(val){
      // this.$emit('change', val)
      this.$emit('input', val); // v-model语法糖 监听
    },
    // @input 监听输入状态
    /**
     * attention:
     * fix-bug: 不可以把 this.$emit('input', val);放到防抖的回调里
     * handleInput: debounce(function($event){
     *  // todo soemthing
     *  // let self = this;
     *  // self.$emit('input', val);
     * },300)
     */
    handleInput: debounce(function($event){
      // 防抖函数
      let self = this;
      let val = $event.target.value;
      if(self.inputCheckRules.length == 0) return
      let pArray = promisifyArrayMethods($event.target.value,this.inputCheckRules);
      promiseAllCheckedResult(pArray).then(res=>{
        self.errorTips = res.msg;
      })
    },480,function($event){
      // 同步执行函数;
      // console.log("同步执行函数");
      let self = this;
      self.$emit('input', $event.target.value);
    }),
    // 监听输值发生变化的时候 / 失焦的时候 / 按下Enter键的时候
    // 有个bug就是在handleChange执行的时候为什么取的是旧的值
    handleChange(e){
      let self = this;
      const emitType = 'change';
      self.validChecked(e.target.value,this.inputCheckRules,emitType);
    },
    // @blur 监听失焦点
    handleBlur(e){
      let self = this;
      // 在readOnly下 不作任何判定
      if(self.readonly){
        return
      }
      const emitType = 'blur';
      self.validChecked(e.target.value,this.blurCheckRules,emitType);
    },
    //  监听获取焦点的时候
    handleFocus(event){
      this.clearTips()
      // 触发focus;
      this.$emit('focus', event);
    },
    clearTips(){
      this.errorTips = '';
    },
    // 通用检测
    validChecked(val,typeMethodsArr=[],emitType){
      let self = this;
      if(typeMethodsArr.length == 0) return
      let pArray = promisifyArrayMethods(val,typeMethodsArr);
      promiseAllCheckedResult(pArray).then(res=>{
        self.errorTips = res.msg;
        self.$emit(emitType, res);
      })
    },
    
  },
  components: {
  },
}
</script>

<style scoped lang="scss">

</style>
