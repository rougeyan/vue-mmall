<template>
  <div class="pmsg-header">
    <!-- 左 -->
    <div class="msg-head-l">
      <div class="bigImages img-wrap">
        <img :src="productData.mainImage" alt="">
      </div>
      <div class="minImages-container">
        <ul class="minImages-wrap clearfix">
          <li class="minImages img-wrap" v-for="item in subImagesList(productData.subImages)">
            <img :src="item" alt="">
          </li>
      </ul>
      </div>
    </div>

    <!-- 右 -->
    <ol class="msg-head-r products-msgs">
      <li class="pd-name">{{productData.name}}</li>
      <li class="pd-desc">{{productData.subtitle}}</li>
      <li class="pd-price">
        <label>价格:</label>
        <span class="price-symbol">{{productData.price}}</span></li>
      <li class="pd-repertory">
        <label>库存:</label>
        <span>{{productData.stock}}</span></li>
      <li class="select-num">
        <label>数量:</label>
        <input v-model="selectNum" type="number">
      </li>
      <li>
        <button class="add-cart" @click="addCart">添加购物车</button>
        <button class="to-my-cart" @click="gotoMyCart">查看购物车</button>
      </li>
    </ol>
  </div>
</template>

<script>
import * as api from '@/api/myCartApi.js'
import {api_user_getLoginUserId} from '@/api/userApi'
export default {
    props: {
      "productData":{
        type:Object,
      }
    },
    data() {
        return {
          selectNum: 1,
          subImages: [],
          userId: -1,
        }
    },
    watch: {
      productData: {
          handler(newValue, oldValue) {
              console.log(newValue);
          }
      }
    },
    computed: {
    },
    created() {
      var self = this;
      api_user_getLoginUserId().then(res=>{
        if(res.status == 0){
          self.userId = res.data.userId;
        }
      })
    },
    mounted() {
    },
    methods: {
      subImagesList: function(subImageList){
        if(!subImageList){
          return []
        }
        return subImageList.split(',')
      },
      addCart(){
        var self = this;
        api.api_cart_add_prod({
          userId: self.userId,
          productId: self.productData.id,
          count: 1
        }).then(res=>{
          if(res.status == 0){
            this.$toast({
              cancelText: '', // 显示确认按钮
              comfirmText: '去支付', 
              content:'添加购物车成功',//弹窗的内容
              autoHide: 2000,// 自动时间
            })
          }
        })
      },
      gotoMyCart(){
        this.$router.push({path:'/myCart'})
      }
    },
    components: {
    },
}
</script>

<style scoped lang="scss">

</style>
