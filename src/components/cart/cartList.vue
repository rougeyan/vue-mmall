<template>
<!-- <table border="1">
  <tr>
    <th>Month</th>
    <th>Savings</th>
  </tr>
  <tr>
    <td>January</td>
    <td>$100</td>
  </tr>
</table> -->
  <div class="shopping-cart-list-wrap">
    <table>
      <!-- 表头 -->
      <tr class="cart-table-head">
        <th>全选</th>
        <th>商品信息</th>
        <th>单价</th>
        <th>数量</th>
        <th>合计</th>
        <th>操作</th>
      </tr>
      <!-- <ul class="> -->
      <tr class="cart-table-ctx-item">
        <td><input type="checkbox"/></td>
        <td>
          <div class="shopMin-pig img-wrap">
            <img src="https://file.gzl.cn/group1/M00/24/BB/wKkBHlzbsAyASxCFAADuICL3d0U715_300X200.jpg" alt="">
            </div>
            <span>	【测试学习使用】【mayi摄影】Canon/佳能 PowerShot SX620 HS高清长焦数码照相机</span>
        </td>
        <td><div class="single-price">￥1888</div></td>
        <td><div class="num-selector">- 1 +</div></td>
        <td><div class="total-price">1888</div></td>
        <td><div class="operater">删除</div></td>
      </tr>
        <div class="cart-table-ctx">
        </div>
        <!-- <li class="cart-table-ctx-item">
        </li> -->
      <!-- </ul> -->
    </table>
    <div class="shoping-cart-operator">
      <ul class="operator-wrap">
        <li>
          <input type="checkbox"/>
          <span>全选</span>
        </li>
        <li>删除选中</li>
        <li>总价: 1888</li>
      </ul>
      <button>去结算</button>
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

</style>
