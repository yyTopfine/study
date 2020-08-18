<template>
	<div>
		<form>
			<slot></slot>
		</form>
	</div>
</template>

<script>
export default {
	provide() {
		return {
			ruleForm: this.ruleForm,
			rule: this.rule,
		}
	},
	props: {
		ruleForm: {
			type: Object,
			required: true,
		},
		rule: {
			type: Object,
			required: true,
		},
	},
	methods: {
		validator() {
			const validators = this.$children.filter(item => item.prop).map(item => item.validator())

			return Promise.all(validators)
		},
	},
}
</script>

<style lang="scss" scoped></style>
