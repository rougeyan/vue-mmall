<template>
  <transition name="fade">
    <div class="full-layer"  v-if="show">
      <!-- 遮罩 -->
      <div class="layer-mask" v-if="mask" @click="maskClose(maskClickClose)"></div>
      <!-- 内容层 -->
      <div :class="['modal-wrap',style]">
        <p class="title" v-if="title">{{title}}</p>
        <div class="modal-content">
          <!-- 一些简单具体的内容 -->
          {{content}}
        </div>
        <div class="modal-footer">
          <button v-show="!!comfirmText" @click="comfirm">{{comfirmText}}</button>
          <button v-show="!!cancelText" @click="cancel">{{cancelText}}</button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      maskClickClose: true, // 点击mask关闭
      style: "", // 样式层
      cancelText: "", // 显示取消按钮
      comfirmText: "", // 显示确认按钮
      title: "", // 标题
      show: true, // 显示状态
      content: "this is content", // 内容
      mask: true, // 是否显示遮罩
      autoHide: -1, // 自动关闭时间
      promiseCallback: false // 是否需要promise回调
    };
  },
  created() {},
  mounted() {
    // 这里不能调用 定时器, 因为此时已经渲染完毕
  },
  methods: {
    // 调用函数初始化;
    initParams(params) {
      let self = this;
      for (const key in params) {
        if (params.hasOwnProperty(key)) {
          const element = params[key];
          self[`${key}`] = element;
        }
      }
      this.interval = null;
      // 调用定时器
      if (self.autoHide && self.autoHide > 0) {
        setTimeout(() => {
          // 默认添加自动关闭的情况都是
          if (self.promiseCallback) {
            self.comfirm();
          } else {
            self.cancel();
          }
        }, self.autoHide);
      }
    },
    comfirm() {
      let self = this;
      self.show = false;
      //  调用
      self.promiseCb(true);
    },
    cancel() {
      let self = this;
      self.show = false;
      self.promiseCb(false);
    },
    // 主动触发
    maskClose(bool) {
      if (bool) this.show = false;
      if (self.promiseCallback) {
        this.promiseCb(true);
      } else {
        this.promiseCb(false);
      }
    },
  },
  beforeDestroy() {
    // 清除定时器
    this.interval = null;
  }
};
</script>

<style lang="scss">
// 提示框
.modal-tips {
  color: $tc;
}
// 消息框

// 确认框
</style>
