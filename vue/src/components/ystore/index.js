class Store {
	constructor(options) {
		this.state = options.state
		this.mutations = options.mutations
		this.actions = options.actions

		this.mutationMap = {}
		const keyAry = Object.keys(this.mutations)
		keyAry.forEach(key => {
			this.mutationMap[key] = this.mutations[key]
		})

		this.actionsMap = {}
		Object.keys(this.actions).forEach(key => {
			if (key) {
				this.actionsMap[key] = this.actions[key]
			}
		})
	}

	commit(methodName, val) {
		this.mutationMap[methodName](this.state, val)
	}

	dispatch(methodName, val) {
		this.actionsMap[methodName](this, val)
	}
}

function install(Vue) {
	Vue.mixin({
		beforeCreate() {
			if (this.$options.store) {
				Vue.prototype.$store = this.$options.store
			}
		},
	})
}

export default {
	Store,
	install,
}
