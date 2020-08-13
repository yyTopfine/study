<template>
	<div class="formContainer">
		<y-form :ruleForm="modelData" :rule="rules" ref="formTest">
			<form-item label="user" prop="userName">
				<y-input v-model="modelData.userName" placeholder="please input username" type="text"></y-input>
			</form-item>
			<form-item label="password" prop="password">
				<y-input v-model="modelData.password" placeholder="please input password" type="password"></y-input>
			</form-item>
			<form-item>
				<button @click="submitForm">提交</button>
			</form-item>
		</y-form>
	</div>
</template>

<script>
import YForm from '../components/Form/YForm'
import FormItem from '../components/Form/FormItem'
import YInput from '../components/Form/YInput'
export default {
	components: {
		YForm,
		FormItem,
		YInput,
	},
	data() {
		return {
			modelData: {
				userName: '',
				password: '',
			},
			rules: {
				userName: { required: true, message: 'please input name' },
				password: { required: true, message: 'please input password' },
			},
		}
	},
	methods: {
		submitForm() {
			const isCan = this.$refs.formTest.validator()
			isCan ? alert('成功') : alert('失败')
		},
	},
}
</script>

<style lang="scss" scoped>
.formContainer {
	margin: 20px 20px;
}
</style>
