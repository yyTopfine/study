<template>
	<div>
		<input :value="val" @input="inputEvent" v-bind="$attrs" />
		<div>{{ val }}</div>
	</div>
</template>

<script>
import event from '../../utils/event'
export default {
	inheritAttrs: false,
	mixins: [event],
	data() {
		return {
			val: '',
		}
	},
	methods: {
		inputEvent(e) {
			this.val = e.target.value
			this.$emit('input', this.val)
			this.dispatch('yFormItem', 'validator')
			// this.$parent.$emit('validator')
		},
	},
}
</script>

<style lang="scss" scoped></style>
