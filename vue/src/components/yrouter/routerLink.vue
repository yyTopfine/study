<template>
	<div>
		<a :href="pathUrl"><slot></slot></a>
	</div>
</template>

<script>
export default {
	mame: 'routerLink',
	props: {
		to: {
			type: String,
			required: true,
		},
	},
	computed: {
		pathUrl() {
			return this.to === '/' ? '#/' : '#' + this.to
		},
	},
}
</script>

<style lang="scss" scoped></style>
