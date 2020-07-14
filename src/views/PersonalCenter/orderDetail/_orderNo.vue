<template>
    <div class="page-my-order-detail">{{orderNo}}
    <bd title="订单信息">
			<bd-content>
				<ul>
					<li>
						<label for="">订单号:</label>
						<span>{{orderMsg.orderNo}}</span>
					</li>
					<li>
						<label for="">创建时间:</label>
						<span>{{orderMsg.createTime}}</span>
					</li>
					<li>
						<label for="">支付方式:</label>
						<span>{{orderMsg.paymentTypeDesc}}</span>
					</li>
					<li>
						<label for="">订单状态:</label>
						<span>{{orderMsg.statusDesc}}</span>
					</li>
					<li>
						<label for="">支付状态:</label>
						<span>{{orderMsg.statusDesc}}</span>
					</li>
					<li>
						<label for="">支付时间:</label>
						<span>{{orderMsg.paymentTime}}</span>
					</li>
					<li>
						<label for="">收货人:</label>
						<span>{{shippingMsg.receiverName}}</span>
					</li>
					<li>
						<label for="">收货电话:</label>
						<span>{{shippingMsg.receiverPhone?shippingMsg.receiverPhone:shippingMsg.receiverMobile}}</span>
					</li>
					<li>
						<label for="">收货地址:</label>
						<span>{{shippingMsg.address}}</span>
					</li>
				</ul>
			</bd-content>
		</bd>
		<bd title="商品清单">
			<bd-content>
				<product-selected-list :preOrderList="preOrderList"/>
			</bd-content>
		</bd>
    </div>
</template>

<script>
import {api_order_orderDetail} from '@/api/orderApi'
import ProductSelectedList from "@/components/shipping/productSelectedList.vue"
export default {
    props: {
    },
    data() {
        return {
					orderNo:'',
					orderMsg:{},
					shippingMsg:{},
					preOrderList: []
        }
    },
    computed: {
    },
    created() {
				// console.log(this.$route.params.orderNo)
				this.orderNo = this.$route.params.orderNo;
				this.getOrderDetail(this.orderNo);
    },
    mounted() {
    },
    watch: {
    },
    methods: {
			getOrderDetail(orderNo){
				api_order_orderDetail(orderNo).then(res=>{
					console.log(res.data)
					this.orderMsg = res.data;
					let ship = res.data.shippingVo;
					this.shippingMsg.address = `${ship.receiverProvince}${ship.receiverCity}${ship.receiverDistrict}${ship.receiverAddress}`
					this.shippingMsg.receiverName = ship.receiverName;
					this.shippingMsg.receiverMobile = ship.receiverMobile;
					this.shippingMsg.receiverPhone = ship.receiverPhone;
					this.shippingMsg.receiverZip = ship.receiverZip;

					this.preOrderList = res.data.orderItemVoList;
				})
			}
    },
    components: {
			"product-selected-list" : ProductSelectedList
    },
}
</script>

<style scoped lang="scss">

</style>