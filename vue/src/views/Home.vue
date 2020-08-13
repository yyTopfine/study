<template>
	<div class="home">
		<input v-model="valueObj.value" />
		<HelloWorld msg="Welcome to Your Vue.js App" title="hello title" @listener-test="listenerTest" />
	</div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
	name: 'Home',
	components: {
		HelloWorld,
	},
	provide() {
		return {
			value: this.valueObj,
		}
	},
	data() {
		return {
			valueObj: {
				value: 'test',
			},
		}
	},
	methods: {
		listenerTest(msg) {
			console.log('home Component:', msg)
		},
	},
}
</script>
