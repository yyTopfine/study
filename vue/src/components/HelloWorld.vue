<template>
	<div class="hello">
		<h1 @click="titileClick">{{ msg }}</h1>
		<child1></child1>
		<child2 v-bind="$attrs" v-on="$listeners"></child2>
	</div>
</template>

<script>
import Child1 from './communicate/child1'
import Child2 from './communicate/child2'
export default {
	name: 'HelloWorld',
	components: {
		Child1,
		Child2,
	},
	methods: {
		titileClick() {
			// 当存在异步组件或动态组件时，下标所对应的组件将不会是模板中定义的顺序
			// $children 与 refs的最大区别在于 ref可以指代原生dom元素,而$children只能指代vue实例
			this.$children[0].btn1()
		},
	},
	props: {
		msg: String,
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
	margin: 40px 0 0;
}
ul {
	list-style-type: none;
	padding: 0;
}
li {
	display: inline-block;
	margin: 0 10px;
}
a {
	color: #42b983;
}
</style>
