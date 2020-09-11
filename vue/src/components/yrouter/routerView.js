export default {
	render(h) {
		this.$vnode.data.routerView = true

		let depth = 0
		let parent = this.$parent

		while (parent) {
			const vnode = parent.$vnode && parent.$vnode.data
			if (vnode && vnode.routerView) {
				depth++
			}
			parent = parent.$parent
		}

		const component = this.$router.matched[depth] || null
		return h(component)
	},
}
