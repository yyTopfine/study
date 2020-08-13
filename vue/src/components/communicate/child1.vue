<template>
	<div>
		<span style="display:block">--------------------child1-----------------------------</span>
		<button @click="btn1">child1Btn</button>
	</div>
</template>

<script>
export default {
	methods: {
		btn1() {
			this.$bus.$emit('busevent', 'from child1 of click')
		},
	},
	mounted() {
		this.$parent.$on('parent-event', msg => {
			console.log('this is child1 mounted:', msg)
		})
	},
}
</script>

<style lang="scss" scoped></style>
