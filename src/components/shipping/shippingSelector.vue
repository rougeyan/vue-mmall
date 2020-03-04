<template>
    <div class="shipping-selector">
      <div class="shipping-bd">
        <div class="bd-title">收获地址</div>
        <div class="shipping-list">
          <ul class="shipping-item" v-for="item in 2">
            <li>
              <label>姓名:</label>
              <span>abcd</span>
            </li>
            <li>
              <label>所在城市:</label>
              <span>广东广州</span>
            </li>
            <li>
              <label>详细地址:</label>
              <span>白云区A街C花园</span>
            </li>
            <li>
              <label>收件人手机:</label>
              <span>13800138000</span>
            </li>
            <li>
              <label>邮政编码</label>
              <span>510000</span>
            </li>
          </ul>
        </div>
        <button>新增地址</button>
      </div>
    </div>
</template>

<script>
export default {
    props: {
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
  @import '@/assets/scss/topNavBar';

</style>
