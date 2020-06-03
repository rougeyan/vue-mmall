<template>
  <div>
    <div class="cart-head">
      <div class="cart-table">
        <table cellspacing="0">
          <tbody>
            <tr class="table-head">
              <th class="table-cell cell-info">商品信息</th>
              <th class="table-cell cell-price">单价</th>
              <th class="table-cell cell-count">数量</th>
              <th class="table-cell cell-total">小计</th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="cart-list">
      <div class="cart-table" v-for="(item,idx) in preOrderList" :key="idx">
        <table>
          <tbody>
            <tr class="table-ctx-item">
              <!-- 信息 -->
              <td class="table-cell cell-info">
                <div class="prod-msg">
                  <div class="img-wrap">
                    <img :src="item.productImage" alt />
                  </div>
                  <div class="description">{{item.productName}}</div>
                </div>
              </td>
              <!-- 单价 -->
              <td class="table-cell cell-price">
                <div class="price-symbol">{{item.currentUnitPrice}}</div>
              </td>
              <!-- 数量 -->
              <td class="table-cell cell-count">{{item.quantity}}</td>
              <!-- 合计 -->
              <td class="table-cell cell-total">
                <div class="price-symbol">{{item.totalPrice}}</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['preOrderList'],
  data() {
    return {
    };
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {},
  components: {}
};
</script>

<style scoped lang="scss">
</style>
