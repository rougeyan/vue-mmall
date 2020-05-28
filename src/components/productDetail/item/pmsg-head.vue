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
        <button class="add-cart">添加购物车</button>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
    props: {
      "productData":{
        type:Object,
      },
      "pname":{
        type:String,
        default: "珠海长隆海洋王国1天游"
      },
      "desc":{
        type:String,
        default: "＊三大剧场表演＊六大乐园主题区域＊海洋大巡游花车＊海洋保卫战烟花秀＊无人机表演"
      },
      "price":{
        type: Number,
        default: 239
      },
      "repertory":{
        type: Number,
        default: 30
      }
    },
    data() {
        return {
          selectNum: 1,
          subImages: []
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
    },
    mounted() {
    },
    methods: {
      subImagesList: function(subImageList){
        if(!subImageList){
          return []
        }
        return subImageList.split(',')
      }
    },
    components: {
    },
}
</script>

<style scoped lang="scss">

</style>
