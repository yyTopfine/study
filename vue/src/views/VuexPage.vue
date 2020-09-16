<template>
	<div>
		<div>count:{{ $store.state.count }}</div>
		<div>double count:{{ $store.getters.doubleCount }}</div>
		<br />
		<button @click="clickBtn">加1</button>
		<br />
		<button @click="clickBtn1" style="margin-top:20px">3秒后变为0</button>
		<br />
		<br />
		<div>--------------------------------------嵌套路由---------------------------------------</div>
		<router-view></router-view>
	</div>
</template>

<script>
export default {
	methods: {
		clickBtn() {
			this.$store.commit('setCount', ++this.$store.state.count)
		},
		clickBtn1() {
			this.$store.dispatch('restCount', 0)
		},
	},
}
</script>

<style lang="scss" scoped></style>
