<template>
	<div class="noticeContainer">
		<div>{{ title }}</div>
		<div>{{ message }}</div>
		<button @click="close">关闭</button>
	</div>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
		},
		message: {
			type: String,
		},
	},
	methods: {
		close() {
			this.remove()
		},
	},
}
</script>

<style lang="scss" scoped>
.noticeContainer {
	position: absolute;
	top: 20%;
	left: 45%;
	border: 1px solid #ccc;
	width: 200px;
	padding: 10px;
	text-align: center;
	background-color: aliceblue;
	border-radius: 5px;
}
</style>
