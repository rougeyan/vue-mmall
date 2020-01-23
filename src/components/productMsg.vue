<template>
<!-- http://b2c.test.com.cn/domestic/0F1ACAEBF20F41DDE0532429030A5D63.html?departureDate=&utm_source=hotsale_&utm_medium=GZSK002085 -->
  <div class="product-msg-wrap">
    <div class="pmsg-header">
      <div class="msg-head-l">
        <div class="bigImages img-wrap">
          <img src="https://file.gzl.cn/group1/M00/20/9A/wKkBH1y-thqAMni3AAE23gV04nA845_300X200.jpg" alt="">
        </div>
        <span>小图</span>
        <ul class="minImages-wrap clearfix">
          <li class="minImages img-wrap" v-for="item in 5">
            <img src="https://file.gzl.cn/group1/M00/20/9A/wKkBH1y-thqAMni3AAE23gV04nA845_300X200.jpg" alt="">
          </li>
        </ul>
      </div>
      <div class="msg-head-r">
        <p class="name"></p>
        <p class="price">
          <label>价格</label>
          <span>￥691</span></p>
        <p class="repertory">
          <label>库存</label>
          <span>4132</span></p>
        <div class="select-num">
          <label>数量</label>
          <span>10</span>
        </div>
        <button class="add-cart">
          添加购物车
        </button>
      </div>
    </div>
    <div class="pmsg-content">
      <p>【组团形式】广之旅自组团，16人以上必派全陪，绝不拼团，信誉与质量的保证，傲视同侪。</p>
      <p>————经典江南，一城一风韵————</p>
      <p>◆禅意无锡：游【灵山大佛景区】（价值220元/人）、东方禅意小镇【拈花湾】，漫步隋唐古风街巷，享静心舒身假期。</p>
      <p>◆清雅姑苏：漫步中国四大园林之一【留园】，赏苏州园林的雅致、精巧。</p>
      <p>◆枕水乌镇：游"最后的枕水人家"【乌镇西栅】，赏江南标志性水乡风光。</p>
      <p>◆闲逸杭城：“浓妆淡抹总相宜”的【西湖】，翠竹掩映的【云栖竹径】，四季皆景的【西溪湿地】，共筑生态杭州的放松、叹氧假期。</p>
      <p>————礼遇江南，三重专属礼————</p>
      <p>◆轻奢美宿：杭州1晚升级入住超豪华酒店；乌镇升级入住景区内超豪华酒店，拈花湾入住豪华禅意民宿，体验住在风景里的惬意。</p>
      <p>◆视觉夜宴：特别安排欣赏灵山小镇•拈花湾3D水幕灯光秀《禅行》，感受“一花一世界，一叶一如来”的曼妙禅境。</p>
      <p>◆地道风味：特别安排于杭帮菜博物馆品正宗杭帮菜（价值50元/成人），享江南清、鲜、脆、嫩的舌尖之旅。</p>
      <img src="http://file.gzl.cn/group1/M00/17/3B/wKkBH1r6TmeAMHuAAAOo9IkhG7g235.jpg" alt="">
      <img src="http://file.gzl.cn/group1/M00/19/C9/wKkBHlr6TnGAIrGzAAOx-frKu0c686.jpg" alt="">
    </div>
    <div class="pmsg-footer"></div>
  </div>
</template>

<script>

export default {
  data() {
    return {
    }
  },
  created() {
  },
  methods: {
  },
  components: {
  },
}
</script>

<style scoped lang="scss">
  @import '@/assets/scss/topNavBar';
</style>
