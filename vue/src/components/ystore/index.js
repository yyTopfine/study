let Vue
class Store {
	constructor(options) {
		this._vm = new Vue({
			data: options.state,
		})
		this.mutations = options.mutations
		this.actions = options.actions
		this.options = options
		this.getters = {}

		this.gettersInit()

		this.commit = this.commit.bind(this)
		this.dispatch = this.dispatch.bind(this)
	}

	commit(methodName, val) {
		this.mutations[methodName](this.state, val)
	}

	dispatch(methodName, val) {
		return this.actions[methodName](this, val)
	}

	gettersInit() {
		const keyAry = Object.keys(this.options.getters)

		keyAry.forEach(key => {
			Object.defineProperty(this.getters, key, {
				get: () => {
					return this.options.getters[key](this.state)
				},
			})
		})
	}

	get state() {
		return this._vm._data
	}

	set state(val) {
		new Error('can not set ,please use commit or dispatch change state')
	}
}

function install(_Vue) {
	Vue = _Vue
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
