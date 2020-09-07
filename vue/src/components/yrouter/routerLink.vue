<template>
	<div>
		<a :href="'#' + to"><slot></slot></a>
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
}
</script>

<style lang="scss" scoped></style>
