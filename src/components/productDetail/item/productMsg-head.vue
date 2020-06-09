<template>
  <div class="productMsg-header">
    <!-- 左 -->
    <bd :title="productData.name">
      <div class="msg-head-l">
        <div class="bigImages img-wrap">
          <img :src="bigImageContainer" alt />
        </div>
        <div class="minImages-container">
          <ul class="minImages-wrap clearfix">
            <li class="minImages img-wrap" v-for="(item,idx) in subImagesList(productData.subImages)" :key="idx" @mouseenter="setBigImage(item)" @mouseleave="resetBigImage(item)">
              <img :src="item" alt />
            </li>
          </ul>
        </div>
      </div>

      <!-- 右 -->
      <ol class="msg-head-r products-msgs">
        <li class="product-name">{{productData.name}}</li>
        <li class="product-desc">{{productData.subtitle}}</li>
        <li class="product-item product-price">
          <label>价格:</label>
          <span class="price-symbol">{{productData.price}}</span>
        </li>
        <li class="product-item">
          <label>库存:</label>
          <span>{{productData.stock}}</span>
        </li>
        <li class="product-item">
          <label>数量:</label>
          <numberCount v-model="selectNum" :maxValue="productData.stock"/>
        </li>
        <li>
          <button class="add-cart" @click="addCart">添加购物车</button>
          <button class="to-my-cart" @click="gotoMyCart">立即购买</button>
        </li>
      </ol>
    </bd>
  </div>
</template>

<script>
import * as api from "@/api/myCartApi.js";
import { api_user_getLoginUserId } from "@/api/userApi";
export default {
  props: {
    productData: {
      type: Object
    }
  },
  data() {
    return {
      selectNum: 1,
      subImages: [],
      userId: -1,
      bigImageContainer: '',
    };
  },
  watch: {
    // 监听productData
    productData: {
      handler(newValue, oldValue) {
        this.bigImageContainer = newValue.mainImage;
      }
    }
  },
  created() {
    var self = this;
    this.bigImageContainer = this.productData.mainImage;
    api_user_getLoginUserId().then(res => {
      if (res.status == 0) {
        self.userId = res.data.userId;
      }
    });
  },
  methods: {
    subImagesList: function(subImageList) {
      if (!subImageList) {
        return [];
      }
      return subImageList.split(",");
    },
    addCart() {
      var self = this;
      api.api_cart_add_prod({
          userId: self.userId,
          productId: self.productData.id,
          count: self.selectNum
        })
        .then(res => {
          if (res.status == 0) {
            this.$toast({
              cancelText: "", // 显示确认按钮
              comfirmText: "去支付",
              content: "添加购物车成功", //弹窗的内容
              autoHide: 2000 // 自动时间
            });
          }
        });
    },
    gotoMyCart() {
      this.$router.push({ path: "/myCart" });
    },
    setBigImage(url){
      this.bigImageContainer = url;
    },
    resetBigImage(){
      this.bigImageContainer = this.productData.mainImage;
    }

  },
  components: {}
};
</script>

<style scoped lang="scss">
</style>
