<template>
	<div class="global-bd">
		<!-- 标题 若无传参则不显示-->
		<bdTitle v-show="title.length>0" :title="title"/>
		<!-- 内容 -->
		<slot></slot>
    <slot slot="bd-cont"></slot>
		<!-- 尾 -->
		<slot slot="bd-footer"></slot>
	</div>
</template>

<script>
export default {
    props: {
      'title': {
        type: String,
        default: ''
      }
    },
    data() {
        return {
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

<style scoped lang="scss">

</style>
