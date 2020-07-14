<template>
    <BaseLayout>
        <div class="mycenter-wrapper">
        <div class="entrances-list">
            <div class="entrance-item" v-for="item in letfRoutes" :key="item.path">
                <!-- todo something 这里还可以递归 -->
                <router-link :to="item.path">{{item.name}}</router-link></div>
        </div>
        <div class="entrance-router-View">
            <router-view />
        </div>
    </div>
    </BaseLayout>
</template>

<script>
import routes from '@/router/routes.js'
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
        console.log(routes)
        let myCenterRoutes = null;
        routes.map((item)=>{
            if(!myCenterRoutes && item && item.path== "/PersonalCenter"){
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

<style lang="scss">
    @import '@/assets/scss/page/myCenter.scss';
</style>
