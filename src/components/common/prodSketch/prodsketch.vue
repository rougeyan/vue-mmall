<template>
    <!-- 产品简介 -->
    <div class="global-prod-sketch">
      <!-- 产品名称 -->
      <p class="sketch-name">{{name}}</p>
      <!-- 产品缩略图 -->
      <div class="img-wrap sketch-img">
        <img :src="imgsrc" alt="">
      </div>
      <!-- 产品价格 -->
      <div class="sketch-price">
        <span>￥</span>
        <span>{{price}}</span>
      </div>
      <!-- 产品简述 -->
      <div class="sketch-desc">{{desc}}</div>
    </div>
</template>

<script>
export default {
    props: {
      'name': {
        type: String,
        default: "产品名称"
      },
      'imgsrc': {
        type: String,
        default: "http://file.gzl.cn/group1/M00/28/FD/wKkBH15zQeOAfrCyAALgtQfgXUw340.jpg"
      },
      'price':{
        type: Number,
        default: 12999
      },
      'desc':{
        type: String,
        default: "暂无简述"
      }
    },
    data() {
        return {
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
