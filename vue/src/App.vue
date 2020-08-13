<template>
	<div id="app">
		<div class="linkContainer">
			<ul>
				<li><router-link to="/" class="link">通信测试</router-link></li>
				<li><router-link to="/form" class="link">表单测试</router-link></li>
			</ul>
		</div>
		<div class="content">
			<router-view />
		</div>
	</div>
</template>
<script>
export default {}
</script>

<style lang="scss">
html,
body {
	height: 100%;
}

#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	display: flex;
	height: 100%;
}

.linkContainer {
	border-right: solid 1px;
	text-align: left;
	width: 180px;
	height: 100%;

	ul li {
		list-style: none;
	}
}

.content {
	flex: 1;
}
</style>
