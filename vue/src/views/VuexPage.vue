<template>
	<div>
		<div>count:{{ count }}</div>
		<button @click="clickBtn">加1</button>
		<button @click="clickBtn1">3秒后变为0</button>
	</div>
</template>

<script>
export default {
	data() {
		return {
			count: 0,
		}
	},
	mounted() {
		this.count = this.$store.state.count
	},
	methods: {
		clickBtn() {
			this.$store.commit('setCount', this.count++)
		},
		clickBtn1() {
			this.$store.dispatch('restCount', 0)
		},
	},
}
</script>

<style lang="scss" scoped></style>
