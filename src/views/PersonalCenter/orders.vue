<template>
    <div class="page-my-orders">
      <bd title="我的订单">
        <bd-content>
					<!-- 表头 -->
					<div class="cart-head">
						<div class="cart-table">
							<table cellspacing="0">
								<tbody>
									<tr class="table-head">
										<th class="table-cell cell-info-52">商品信息</th>
										<th class="table-cell cell-price">单价</th>
										<th class="table-cell cell-count">数量</th>
										<th class="table-cell cell-total">实际付</th>
										<th class="table-cell cell-status">交易状态</th>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					<ul class="myOrder-list">
						<li class="orderItem" v-for="(item,idx) in orderLists" :key="idx" v-if="item.orderItemVoList.length>0">
							<div class="orderItem-head">
								<span>订单号:{{item.orderNo}}</span>
								<span>创建时间:{{item.createTime}}</span>
								<!-- <span>订单状态: {{item.statusDesc}}</span> -->
								<span class="gotoOrderDetail" @click="toOrderDetail(item)">查看订单详情</span>
							</div>
							<table class="orderItem-content" cellspacing="0">
								<tbody>
									<tr class="table-ctx-item">
										<!-- 信息 -->
										<td class="table-cell cell-info-list">
											<!-- 二级菜单 -->
											<ul>
												<li v-for="(orderItem,orderItemIdx) in item.orderItemVoList" :key="orderItemIdx">
													<table cellspacing="0">
													<tbody>
														<tr class="table-ctx-item">
															<!-- 信息 -->
															<td class="table-cell cell-info-sec">
																<div class="prod-msg">
																	<div class="img-wrap">
																		<img :src="orderItem.productImage" alt />
																	</div>
																	<div class="description">{{orderItem.productName}}</div>
																</div>
															</td>
															<td class="table-cell cell-price">
																<div class="price-symbol">{{orderItem.currentUnitPrice}}</div>
															</td>
															<!-- 数量 -->
															<td class="table-cell cell-count">{{orderItem.quantity}}</td>
														</tr>
													</tbody>
												</table>
												</li>
											</ul>
										</td>
										<td class="table-cell cell-totalPayed">
											<p>{{item.payment}}</p>
										</td>
										<td :class="['table-cell','cell-orderStatus',item.statusDesc=='未支付'?'red':'']">
											<p>{{item.statusDesc}}</p>
										</td>
									</tr>
								</tbody>
							</table>
						</li>
					</ul>
					<!-- 表内容 -->
        </bd-content>
        <bd-footer>
            // todo 分页器
        </bd-footer>
      </bd>
    </div>
</template>

<script>
import {api_order_orderList} from '@/api/orderApi.js'
export default {
    data() {
        return {
					orderLists:[]
        }
    },
    computed: {
    },
    created() {
        this.getDetailList()
    },
    mounted() {
    },
    watch: {
    },
    methods: {
        getDetailList(){
					var self = this;
            api_order_orderList().then(res=>{
                if(res.status == 0){
									self.orderLists = res.data.list;
								}
            })
				},
				toOrderDetail(item){
					var self =this;
					self.$router.push({path:`/PersonalCenter/order/${item.orderNo}`})
				}
    },
    components: {
    },
}
</script>

<style scoped lang="scss">

</style>
