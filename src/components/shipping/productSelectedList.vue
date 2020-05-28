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
      <div class="cart-table" v-for="(item,idx) in cartList" :key="idx">
        <table>
          <tbody>
            <tr class="table-ctx-item">
              <!-- 信息 -->
              <td class="table-cell cell-info">
                <div class="prod-msg">
                  <div class="img-wrap">
                    <img :src="item.prodImg" alt />
                  </div>
                  <div class="description">{{item.desc}}</div>
                </div>
              </td>
              <!-- 单价 -->
              <td class="table-cell cell-price">
                <div class="price-symbol">{{item.price}}</div>
              </td>
              <!-- 数量 -->
              <td class="table-cell cell-count">{{item.selectedNum}}</td>
              <!-- 合计 -->
              <td class="table-cell cell-total">
                <div class="price-symbol">{{item.price*item.selectedNum}}</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="operator-wrap">
      <div class="total">总价:
        <span class="price-symbol">1888</span></div>
      <button class="to-pay">去支付</button>
    </div>

  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
          cartList: [{
          "selected": 0, // 已选未选
          "prodImg": "https://file.gzl.cn/group1/M00/24/BB/wKkBHlzbsAyASxCFAADuICL3d0U715_300X200.jpg",
          "desc": "【测试学习使用】【mayi摄影】Canon/佳能 PowerShot SX620 HS高清长焦数码照相机",
          "price" : 1988,
          "selectedNum": 1,
          "totalPrice": 1988
        },{
          "selected": 1, // 已选未选
          "prodImg": "https://file.gzl.cn/group1/M00/24/BB/wKkBHlzbsAyASxCFAADuICL3d0U715_300X200.jpg",
          "desc": "【测试学习使用】【mayi摄影】Canon/佳能 PowerShot SX620 HS高清长焦数码照相机",
          "price" : 99.8,
          "selectedNum": 10,
          "totalPrice": 1988
        }]
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
