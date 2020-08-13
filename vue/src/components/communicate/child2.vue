<template>
	<div>
		<span style="display:block">--------------------child2-----------------------------</span>
		<button @click="clickbtn">child2btn</button>
		<button @click="listenerTest">$listener</button>
		<div>{{ valueRoot.value }}</div>
	</div>
</template>

<script>
export default {
	inject: {
		valueRoot: 'value',
	},
	mounted() {
		this.$bus.$on('busevent', msg => {
			console.log('child2 mounted:', msg)
		})

		console.log('child2 $attrs:', this.$attrs)
	},
	methods: {
		clickbtn() {
			this.$parent.$emit('parent-event', 'parentEvent from child2')
		},
		listenerTest() {
			this.$emit('listener-test', 'this string from child2')
		},
	},
}
</script>

<style lang="scss" scoped></style>
