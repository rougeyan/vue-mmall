<template>
  <div>
    <div class="shipping-list">
      <ul>
        <li :class="{'shipping-item':true,'selected':selectedshippingId == item.id}" v-for="item in shippingList" @click.prevent="selectShippingItem(item.id)">
          <p>
            <label>姓名:</label>
            <span>{{item.receiverName}}</span>
          </p>
          <p>
            <label>所在城市:</label>
            <span>{{item.receiverProvince +item.receiverCity+item.receiverDistrict}}</span>
          </p>
          <p>
            <label>详细地址:</label>
            <span>{{item.receiverAddress}}</span>
          </p>
          <p>
            <label>收件人手机:</label>
            <span>{{item.receiverPhone+item.receiverMobile}}</span>
          </p>
          <p>
            <label>邮政编码</label>
            <span>{{item.receiverZip}}</span>
          </p>
          <button @click.stop="delShippingItem(item.id)">删除地址</button>
        </li>
      </ul>
    </div>
    <!-- // 添加新地址   -->
    <p> + 添加新地址</p>
      <formInput 
        v-model="add_name" 
        label="用户名"
        :blurCheckRules ="['isBlank']">
      </formInput>
      <formInput 
        v-model="add_province" 
        label="省"
        :blurCheckRules ="['isBlank']">
      </formInput>
      <formInput 
        v-model="add_city" 
        label="市"
        :blurCheckRules ="['isBlank']">
      </formInput>
      <formInput 
        v-model="add_district" 
        label="区/街道"
        :blurCheckRules ="['isBlank']">
      </formInput>
      <formInput 
        v-model="add_address" 
        label="区/街道"
        :blurCheckRules ="['isBlank']">
      </formInput>
      <formInput 
        v-model="add_zip" 
        label="邮政编码"
        :blurCheckRules ="['isBlank']">
      </formInput>
      <formInput 
        v-model="add_mobile" 
        label="手机"
        :blurCheckRules ="['isBlank']">
      </formInput>
      <formInput 
        v-model="add_phone" 
        label="电话"
        :blurCheckRules ="['isBlank']">
      </formInput>
      <button @click="addShipping">新增地址</button>
  </div>
</template>

<script>
import * as api from '@/api/shippingApi'
 
export default {
    data() {
        return {
          shippingList: [],
          //新增地址
          add_name: '我是老陈',
          add_province: '广东省',
          add_city: '广州市',
          add_district: '白云区',
          add_address: '金桂园ABC',
          add_zip: '510403',
          add_mobile: '13711111111',
          add_phone: '020-1234',
          //
          selectedShippingObj: {},
          selectedshippingId: -1,
        }
    },
    computed: {
    },
    created() {
      this.getShippingList();
    },
    mounted() {
    },
    watch: {
    },
    methods: {
      getShippingList(){
        var self = this;
        api.api_shipping_list().then((res)=>{
          if(res.status == 0){
            self.shippingList = res.data.list;
            self.selectedShippingObj = self.shippingList[0];
            self.selectedshippingId = self.selectedShippingObj.id;
            self.$emit('getShippingId',self.selectedshippingId)
          }
        })
      },
      selectShippingItem(id){
        var self = this;
        api.api_shipping_selected(id).then(res=>{
          if(res.status ==0){
            self.selectedShippingObj = res.data;
            self.selectedshippingId = self.selectedShippingObj.id;
            self.$emit('getShippingId',self.selectedshippingId)
          }
        })
      },
      delShippingItem(id){
        var self = this;
        api.api_shipping_del(id).then(res=>{
          if(res.status == 0){
            self.getShippingList()
          }
        })
      },
      addShipping(){
        var self = this;
        api.api_shipping_add({
          userId: 1,
          receiverName:self.add_name,
          receiverPhone:self.add_phone,
          receiverMobile:self.add_mobile,
          receiverProvince:self.add_province,
          receiverCity:self.add_city,
          receiverDistrict:self. add_district,
          receiverAddress:self.add_address,
          receiverZip:self.add_zip,
        }).then(res=>{
          if(res.status == 0){
            self.getShippingList()
          }
        })
      }
    },
}
</script>

<style scoped lang="scss">

</style>
