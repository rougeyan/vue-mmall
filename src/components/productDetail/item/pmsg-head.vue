<template>
  <div class="pmsg-header">
    <!-- 左 -->
    <div class="msg-head-l">
      <div class="bigImages img-wrap">
        <img src="https://file.gzl.cn/group1/M00/20/9A/wKkBH1y-thqAMni3AAE23gV04nA845_300X200.jpg" alt="">
      </div>
      <ul class="minImages-wrap clearfix">
        <li class="minImages img-wrap" v-for="item in 5">
          <img src="https://file.gzl.cn/group1/M00/20/9A/wKkBH1y-thqAMni3AAE23gV04nA845_300X200.jpg" alt="">
        </li>
      </ul>
    </div>

    <!-- 右 -->
    <div class="msg-head-r">
      <p class="name">{{pname}}</p>
      <p class="desc">{{desc}}</p>
      <p class="price">
        <label>价格:</label>
        <span>￥{{price}}</span></p>
      <p class="repertory">
        <label>库存:</label>
        <span>{{repertory}}</span></p>
      <div class="select-num">
        <label>数量:</label>
        <input v-model="selectNum" type="number">
      </div>
      <button class="add-cart">
        添加购物车
      </button>
    </div>
  </div>
</template>

<script>
export default {
    props: {
      "pname":{
        type:String,
        default: "产品名称"
      },
      "desc":{
        type:String,
        default: "产品最新简介产品最新简介产品最新简介产品最新简介"
      },
      "price":{
        type: Number,
        default: 1999
      },
      "repertory":{
        type: Number,
        default: 1000
      }
    },
    data() {
        return {
          selectNum: 1
        }
    },
    computed: {
    },
    created() {
    },
    mounted() {
    },
    watch: {
    },
    methods: {
    },
    components: {
    },
}
</script>

<style scoped lang="scss">

</style>
