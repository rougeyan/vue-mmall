<template>
  <div class="shopping-cartlist-wrap">
    <table border="1px" cellspacing="0">
      <!-- 表头 -->
      <tr class="table-head">
        <th>全选
          <input type="checkbox"/>
        </th>
        <th>商品信息</th>
        <th>单价</th>
        <th>数量</th>
        <th>合计</th>
        <th>操作</th>
      </tr>
      <!-- 内容 -->
      <tr class="table-ctx-item" v-for="(item,idx) in cartList" :key="idx">
        <td><input type="checkbox" :checked="item.selected == 1?'checked':''" /></td>
        <td>
          <div class="prod-msg">
            <div class="img-wrap">
              <img :src="item.prodImg" alt="">
            </div>
            <div class="description">{{item.desc}}</div>
          </div>
        </td>
        <td><div class="single-price">￥{{item.price}}</div></td>
        <td><div class="num-selector">
          <input v-model="item.selectedNum" type="number"></div></td>
        <td><div class="total-price">{{item.price*item.selectedNum}}</div></td>
        <td><div class="delete-cart-item">删除</div></td>
      </tr>
        <div class="table-ctx">
        </div>
    </table>
    
    <div class="operator-wrap">
      <div>
        <input type="checkbox"/>
        <span>全选</span>
      </div>
      <div>删除选中</div>
      <div>总价: 1888</div>
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
    methods: {
    },
    components: {
    },
}
</script>
