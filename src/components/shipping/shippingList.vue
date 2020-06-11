<template>
  <div>
    <div class="shipping-list-wrap">
      <ul class="shipping-list">
        <li :class="{'shipping-item':true,'selected':selectedshippingId == item.id}" v-for="item in shippingList" @click.prevent="selectShippingItem(item.id)">
          <div class="msg-item">
            <label>姓名:</label>
            <span>{{item.receiverName}}</span>
          </div>
          <div>
            <label>所在城市:</label>
            <span>{{item.receiverProvince +item.receiverCity+item.receiverDistrict}}</span>
          </div>
          <div>
            <label>详细地址:</label>
            <span>{{item.receiverAddress}}</span>
          </div>
          <div>
            <label>收件人手机:</label>
            <span>{{item.receiverPhone+item.receiverMobile}}</span>
          </div>
          <div>
            <label>邮政编码</label>
            <span>{{item.receiverZip}}</span>
          </div>
          <button @click.stop="delShippingItem(item.id)">删除地址</button>
        </li>
        <li class="shipping-item add-address" @click="dialogVisible=true">新增地址</li>
      </ul>
    </div>
    

    <!-- // 添加新地址   -->
    <globalDialogWrapper :visible.sync="dialogVisible"
    :maskClickClose="true">
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
        label="详细地址"
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
      <slot slot="modal-footer">
        <button @click="addShipping">新增地址</button>
      </slot>
    </globalDialogWrapper>
  </div>
</template>

<script>
import * as api from '@/api/shippingApi'
 
export default {
    data() {
        return {
          shippingList: [],
          //新增地址
          add_name: '',
          add_province: '',
          add_city: '',
          add_district: '',
          add_address: '',
          add_zip: '',
          add_mobile: '',
          add_phone: '',
          //
          selectedShippingObj: {},
          selectedshippingId: -1,

          dialogVisible:false
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
