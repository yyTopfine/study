<template>
	<div>
		<input :value="val" @input="inputEvent" v-bind="$attrs" />
		<div>{{ val }}</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			val: '',
		}
	},
	methods: {
		inputEvent(e) {
			this.val = e.target.value
		},
	},
}
</script>

<style lang="scss" scoped></style>
