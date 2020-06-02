<template>
    <!-- 产品简介 -->
    <div class="global-prod-sketch">
      <!-- 产品名称 -->
      <p class="sketch-name">{{product.name}}</p>
      <!-- 产品缩略图 -->
      <div class="img-wrap sketch-img">
        <img :src="product.mainImage" alt="">
      </div>
      <!-- 产品价格 -->
      <div class="price-symbol sketch-price">{{product.price}}</div>
      <!-- 产品简述 -->
      <div class="sketch-desc">{{product.subtitle}}</div>
    </div>
</template>

<script>
export default {
    props: {
      'product':{
        type: Object,
        default: ()=>{
          return {
            name: '默认产品',
            mainImage: 'http://file.gzl.cn/group1/M00/28/FD/wKkBH15zQeOAfrCyAALgtQfgXUw340.jpg',
            price: 0,
            subtitle: '默认产品副标题默认产品副标题默认产品副标题默认产品副标题默认产品副标题美的鹭湖度假区深度游＊探索王国水世界＊入住岭南花园酒店公寓房＊品尝特色濑粉宴 ＜含1早1正，含无限次半山温泉＞'
          }
        }
      }
    },
    data() {
        return {
          
        };
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
