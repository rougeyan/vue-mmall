import Vue from 'vue';
import store from "@/store/index.js";
import Modaltemplate from './loginDialog.vue'
/**
 * 
 * new Indicator({ el: document.createElement('div')})与
 * new Indicator().$mount(); 是一样的 这样才拿到dom节点
 * [vue.extend中 创建实力后$(mount),与](https://blog.csdn.net/a460550542/article/details/82689602)
 */

const Indicator = Vue.extend(Modaltemplate);
let instance;

export default {
  open(options = {}) {
    if (!instance) {
      instance = new Indicator({
          store
        }
        // { el: document.createElement('div')}
      ).$mount();
    }
    if (instance.visible) return;
    instance.title = typeof options === 'string' ? options : options.title || '';
    instance.maskClickClose = typeof options === 'string' ? options : options.maskClickClose || true;
    // 挂在在body上;
    document.body.appendChild(instance.$el);
    Vue.nextTick(() => {
      instance.visible = true;
    });
  },

  close() {
    if (instance) {
      instance.visible = false;
    }
  }
};