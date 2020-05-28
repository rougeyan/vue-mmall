<template>
  <div class="shopping-cartlist-wrap">
    <!-- 表头 -->
    <div class="cart-head">
      <div class="cart-table">
        <table cellspacing="0">
          <tbody>
              <tr class="table-head">
                <th class="table-cell cell-check">
                  <input type="checkbox"/>
                  <span>全选</span>
                </th>
                <th class="table-cell cell-info">商品信息</th>
                <th class="table-cell cell-price">单价</th>
                <th class="table-cell cell-count">数量</th>
                <th class="table-cell cell-total">合计</th>
                <th class="table-cell cell-opera">操作</th>
              </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- 表内容 -->
    <div class="cart-list">
      <div class="cart-table" v-for="(item,idx) in cartList" :key="idx">
        <table>
          <tbody>
              <tr class="table-ctx-item">
                <!-- 索引 -->
                <td class="table-cell cell-check">
                  <input type="checkbox" :checked="item.selected == 1?'checked':''" />
                </td>
                <!-- 信息 -->
                <td class="table-cell cell-info">
                  <div class="prod-msg">
                    <div class="img-wrap">
                      <img :src="item.prodImg" alt="">
                    </div>
                    <div class="description">{{item.desc}}</div>
                  </div>
                </td>
                <!-- 单价 -->
                <td class="table-cell cell-price">
                  <div class="price-symbol">{{item.price}}</div>
                </td>
                <!-- 数量 -->
                <td class="table-cell cell-count">
                  <div class="count-selector"><input v-model="item.selectedNum" type="number"></div>
                </td>
                <!-- 合计 -->
                <td class="table-cell cell-total">
                  <div class="price-symbol">{{item.price*item.selectedNum}}</div>
                </td>
                <!-- 操作 -->
                <td class="table-cell cell-opera">
                  <div class="delete-cart-item">删除</div>
                </td>
              </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="operator-wrap">
      <div class="select-all">
        <input type="checkbox"/>
        <span>全选</span>
      </div>
      <div class="delete-selected">删除选中</div>
      <div class="total">总价:
        <span class="price-symbol">1888</span></div>
      <button class="to-pay">去结算</button>
      </div>
  </div>
</template>

<script>
export default {
    props: {
    },
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
    metdods: {
    },
    components: {
    },
}
</script>
