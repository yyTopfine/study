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
			const childs = this.$children.filter(item => item.prop)
			const validators = []

			for (let i = 0; i < childs.length; i++) {
				validators.push(childs[i].validator())
			}

			Promise.all(validators)
				.then(() => {
					return true
				})
				.catch(() => {
					return false
				})
		},
	},
}
</script>

<style lang="scss" scoped></style>
