<template>
  <div class="number-count-wrapper">
    <div class="number-count">
      <div :class="{'icon':true,' icon-minus':true,'disabled':value==1}" @click="minus">
        <i class="iconfont iconiconset0187"></i>
      </div>
      <input class="numberCount-input"
      type="number" 
      :value="value"
      :max="maxValue"
      @input="handleInput"
      @change="handleChange"
      ref="inputValue"
      />
      <div :class="{'icon':true,' icon-minus':true,'disabled':value==maxValue}" @click="add">
        <i class="iconfont iconiconset0186"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props: {
      "value":[Number],
      "maxValue":[Number],
    },
    methods: {
      minus(){
        this.handleChange(this.value-1)
      },
      add(){
        this.handleChange(this.value+1)
      },
      handleInput($event){
        let val = parseInt($event.target.value);
        if(isNaN(val) || val<=0){
          this.$refs.inputValue.value = 1;
          this.$emit('input', 1)
          this.$emit('change', 1)
        }else if(val>this.maxValue){
          this.$refs.inputValue.value = this.maxValue;
          this.$emit('input', this.maxValue)
          this.$emit('change', this.maxValue)
        }
      },
      // handleBlur($event){
      //   let val = parseInt($event.target.value);
      //   if(!val){
      //     this.handleChange(1)
      //     return
      //   }
      //   this.handleChange(val)
      // },
      handleChange($event){
        let val;
        if(typeof($event) == 'object'){
          val = parseInt($event.target.value);
        }else if(typeof($event) == 'number'){
          val = $event
        }
        // 小于0的情况
        if(val<=0){
          this.$emit('input', 1)
          return
        }else if(this.maxValue && this.maxValue>0 && val>=this.maxValue){
          this.$emit('input', this.maxValue)
          this.$emit('change', this.maxValue)
          return
        }else{
          this.$emit('input', val)
          this.$emit('change', val)
        }

      }
    },
    components: {
    },
}
</script>

<style scoped lang="scss">
  .number-count-wrapper{
    display: inline-block;
  }
  .number-count{
    display: flex;
    align-items: center;
    width: 120px;
  }
  .numberCount-input{
    flex: 1;
    width: 60px;
    font-size: 20px;
    padding: 0;
    border: 1px solid #eee;
    text-align: center;
  }
  .icon-add, .icon-minus{
    cursor: pointer;
    .iconfont{
      font-size: 28px;
      font-weight: bold;
    }
    &.disabled{
      color: $cf1;
    }
  }
</style>
