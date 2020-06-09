<template>
  <div class="shopping-cartlist-wrap">
    <!-- 表头 -->
    <div class="table-head">
      <table cellspacing="0">
          <tbody>
              <tr class="table-head">
                <th class="table-cell cell-check">选择</th>
                <th class="table-cell cell-info">商品信息</th>
                <th class="table-cell cell-price">单价</th>
                <th class="table-cell cell-count">数量</th>
                <th class="table-cell cell-total">合计</th>
                <th class="table-cell cell-opera">操作</th>
              </tr>
          </tbody>
        </table>
    </div>
    <!-- 表内容 -->
    <div class="table-content">
      <table cellspacing="0" v-for="(item,idx) in cartList" :key="idx">
          <tbody>
              <tr class="table-ctx-item">
                <!-- 索引 -->
                <td class="table-cell cell-check" @click="selectItem(item)">
                  <input type="checkbox" :checked="item.productChecked == 1?'checked':''" />
                </td>
                <!-- 信息 -->
                <td class="table-cell cell-info">
                  <div class="prod-msg">
                    <div class="img-wrap">
                      <img :src="item.productMainImg" alt="">
                    </div>
                    <div class="description">{{item.productName}}</div>
                  </div>
                </td>
                <!-- 单价 -->
                <td class="table-cell cell-price">
                  <!-- span 增加 -->
                  <div class="price-symbol">{{item.productPrice}}</div>
                </td>
                <!-- 数量 -->
                <td class="table-cell cell-count">
                  <numberCount v-model="item.quantity" @change="handleQuantityChange(item)"/>
                </td>
                <!-- 合计 -->
                <td class="table-cell cell-total">
                  <div class="price-symbol">{{item.productTotalPrice}}</div>
                </td>
                <!-- 操作 -->
                <td class="table-cell cell-opera" @click="delItem(item)">
                  <div class="delete-cart-item">删除</div>
                </td>
              </tr>
          </tbody>
        </table>
      
    </div>

    <operationBar>
      <slot slot="left">
        <button class="select-all">
          <input type="checkbox" :checked="allChecked"/>
          <span @click="selectForAll">全选</span>
        </button>
        <button class="delete-selected" @click="delItem('selected')">删除选中</button>
      </slot>
      <slot slot="item">
        <div class="total">总价:
        <span class="price-symbol">{{cartTotalPrice}}</span></div>
      </slot>
      <slot slot="buttons">
        <button class="gotoPreOrder-btn" @click="gotoPreOrder">去结算</button>
      </slot>
    </operationBar>
  </div>
</template>

<script>
import * as api from '@/api/myCartApi.js'
import * as judegment from '@/utils/judgeUtils.js'
// 所有的购物车操作都的结果都返回整个购物车的内容
export default {
    data() {
        return {
          cartList: [],
          // pageLock: false
          cartTotalPrice: -1,
          allChecked: false,
        }
    },
    computed: {
    },
    created() {
      this.getCartList();
      // this.getCartProdsCount();
      // this.getAllSelectedId();
    },
    mounted() {

    },
    watch: {
    },
    methods: {
      getCartList(){
        var self = this;
        api.api_get_cart_list().then(res=>{
          if(res.status == 0){
            self.cartList = res.data.cartProductVoList;
            self.cartTotalPrice = res.data.cartTotalPrice;
            self.allChecked = res.data.allChecked;
          }
        })
      },
      handleQuantityChange(e){
        let quantity = e.quantity;
        this.updataCartProd(e.productId,quantity);
      },
      reviseProdNum(item,value){
        let self =this;
        let quantity = item.quantity;
        if(value == 'minus' && quantity>0){
          quantity = --quantity;
        }else if(value == 'add'){
          quantity = ++quantity;
        }else{
          return
        }
      },
      // 修改数量
      updataCartProd(pid,count){
        let self = this;
        api.api_cart_update_prod({
          productId: pid,
          count:count
        }).then(res=>{
          if(res.status == 0){
            this.$nextTick(()=>{
              self.cartList = res.data.cartProductVoList;
              self.cartTotalPrice = res.data.cartTotalPrice;
              self.allChecked = res.data.allChecked;
            })
          }
        })
      },
      // 单选按钮
      selectItem(item){
        let self = this;
        let selectedProdId= item.productId;
        let checkedStatus = item.productChecked==0?'select':'reversal' // 选择, 反选
        switch (checkedStatus) {
          case 'select':
            api.api_select_single(selectedProdId).then(res=>{
              if(res.status == 0){
                self.cartList = res.data.cartProductVoList;
                self.cartTotalPrice = res.data.cartTotalPrice;
                self.allChecked = res.data.allChecked;
              }
            })
            break;
          case 'reversal':
            api.api_unselect_single(selectedProdId).then(res=>{
              if(res.status == 0){
                self.cartList = res.data.cartProductVoList;
                self.cartTotalPrice = res.data.cartTotalPrice;
                self.allChecked = res.data.allChecked;
              }
            })
            break;
        }
      },
      // 获取已选中的产品
      getAllSelectedId(){
        let allSelectedProdsStr = '';
        this.cartList.map(item =>{
          if(item.productChecked !=1){
            return
          }
          if(allSelectedProdsStr == ''){
            allSelectedProdsStr=`${item.productId}`
            return
          }
          allSelectedProdsStr+=`,${item.productId}`
        })
        console.log(allSelectedProdsStr);
        return allSelectedProdsStr
      },
      // 移除产品
      delItem(item){
        let self = this;
        let selectedProdIds = judegment.isObj(item)?item.productId:self.getAllSelectedId();
        api.api_cart_del_prod(selectedProdIds).then(res=>{
          if(res.status == 0){
            self.cartList = res.data.cartProductVoList;
            self.cartTotalPrice = res.data.cartTotalPrice;
            self.allChecked = res.data.allChecked;
          }
        })
      },
      // 获取购物车数量
      getCartProdsCount(){
        api.api_get_cart_prods_count().then(res=>{
          console.log(res.data)
        })
      },
      selectForAll(){
        let self = this;
        let allchecked = this.allChecked;
        if(allchecked){
          api.api_unselect_all().then(res=>{
            if(res.status == 0){
              self.cartList = res.data.cartProductVoList;
              self.cartTotalPrice = res.data.cartTotalPrice;
              self.allChecked = res.data.allChecked;
            }
          })
        }else{
          api.api_select_all().then(res=>{
            if(res.status == 0){
              self.cartList = res.data.cartProductVoList;
              self.cartTotalPrice = res.data.cartTotalPrice;
              self.allChecked = res.data.allChecked;
            }
          })

        }
      },
      gotoPreOrder(){
        this.$router.push({path:'/comfirmPreOrder'})
      }
    },
    components: {
    },
}
</script>
