<template>
	<div class="global-bd">
		<!-- 标题 若无传参则不显示-->
		<bd-title v-show="title.length>0" :title="title"/>
		<!-- 内容 -->
		<slot></slot>
		<!-- 板块尾巴 -->
		<slot slot="bd-footer"></slot>
	</div>
</template>

<script>
import globalTitle from './globalTitle';
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
			"bd-title": globalTitle,
			// "bd-footer"
    },
}
</script>

<style scoped lang="scss">

</style>
