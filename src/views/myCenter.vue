<template>
    <div>
        <global-head />
        <div class="mycenter-wrapper">
            <div class="entrances-list">
                <div class="entrance-item" v-for="item in letfRoutes" :key="item.name">
                    <!-- todo something 这里还可以递归 -->
                    <router-link :to="item.path">{{item.path}}</router-link></div>
            </div>
            <div class="entrance-router-View">
                <router-view />
            </div>
        </div>
    </div>
</template>

<script>
import {processRoutes} from '@/router/router.js'
import GlobalHead from "@/components/global/globalHead.vue"
export default {
    props: {
    },
    data() {
        return {
            letfRoutes: []
        }
    },
    computed: {
    },
    created() {
        console.log(processRoutes)
        // 做一个js尾递归
        let myCenterRoutes = null;
        processRoutes.map((item)=>{
            if(!myCenterRoutes && item && item.name== '/myCenter.vue'){
                myCenterRoutes = item;
            }
        })
        this.letfRoutes = myCenterRoutes?myCenterRoutes.children:[];
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

<style scoped lang="scss">

</style>
