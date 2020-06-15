<template>
    <div class="my-info">
        <bd title="修改密码">
        <bd-content>
          <ul>
            <li>
              <formInput
                v-model="oldPwd" 
                label="原密码"
                :blurCheckRules ="['isBlank',]">
              </formInput>
            </li>
            <li>
              <formInput
                v-model="pwd" 
                label="新密码"
                :blurCheckRules ="['isBlank',]">
              </formInput>
            </li>
            <li>
              <formInput 
                v-model="pwdsec" 
                label="确认密码"
                :blurCheckRules ="['isBlank']">
              </formInput>
            </li>
          </ul>
        </bd-content>
				<bd-footer>
					<button @click="revisePwd">提交</button>
				</bd-footer>
      </bd>
    </div>
</template>

<script>
export default {
    props: {
    },
    data() {
        return {
					oldPwd: '',
					pwd: '',
					pwdsec: '',
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
			revisePwd(){
				console.log('修改成功')
			}
    },
    components: {
    },
}
</script>

<style scoped lang="scss">

</style>
