<template>
  <div class="home">
    <global-head>
      <slot slot="global-h-breadCrumb">
        <p>分类 13855252522@test987.com</p>
      </slot>
    </global-head>
    <div>
      <home-category />
      <home-swpier />
    </div>
    <!-- // 楼层速览 -->
    <home-floor v-for="item in 3" :class='item==1?"double-deck":""'/>
    <global-footer></global-footer>
    <!-- <HelloWorld /> -->
  </div>
</template>

<script>
// @ is an alias to /src
import GlobalHead from "@/components/global/globalHead.vue"
import HomeCategory from "@/components/home/homeCategory.vue"
import HomeSwiper from "@/components/home/homeSwiper.vue"
import HomeFloor from "@/components/home/homeFloor.vue"
import GlobalFooter from "@/components/global/globalFooter.vue"

// import {api_user_login} from '@/api/userApi'

export default {
 
  created(){
    // // 做非空校验
    //   api_user_login({
    //     "username": 'admin',
    //     "password": 'admin'
    //     }).then(res=>{
    //     if(res.status == 0){
    //       alert(res.msg)
    //     }else{
    //       alert(res.msg)
    //     }
    //   })
  },
  components: {
    "global-head" : GlobalHead,
    "global-footer" : GlobalFooter,
    "home-category":HomeCategory,
    "home-swpier": HomeSwiper,
    "home-floor": HomeFloor
  }
};
</script>
<style lang="scss">
  @import '@/assets/scss/page/homePage.scss';
</style>