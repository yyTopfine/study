<template>
	<div class="itemContainer">
		<div class="item">
			<label>{{ label }}</label>
			<slot></slot>
		</div>
		<div class="error">{{ errorMsg }}</div>
	</div>
</template>

<script>
import schema from 'async-validator'
export default {
	inject: ['ruleForm', 'rule', 'formItem'],
	componentName: 'yFormItem',
	data() {
		return {
			errorMsg: '',
		}
	},
	props: {
		label: {
			type: String,
		},
		prop: {
			type: String,
		},
	},
	mounted() {
		this.$on('validator', () => {
			this.validator()
		})
		this.formItem.push(this)
	},
	methods: {
		validator() {
			const validater = new schema({ [this.prop]: this.rule[this.prop] })
			const _this = this
			return validater.validate({ [this.prop]: this.ruleForm[this.prop] }, (errors, fields) => {
				if (errors) {
					_this.errorMsg = fields[this.prop][0].message
				} else {
					_this.errorMsg = ''
				}
			})
		},
	},
}
</script>

<style lang="scss" scoped>
.item {
	display: flex;
}

.itemContainer {
	margin: 10px 20px;
}

.error {
	color: red;
}
label {
	margin-right: 10px;
}
</style>
