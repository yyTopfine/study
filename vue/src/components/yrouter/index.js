import Vue from 'vue'
import routerLink from './routerLink.vue'
import routerView from './routerView.vue'

class YRouter {
	constructor(options) {
		this.options = options
		this.routerMap = new Map()
	}

	init() {
		for (let i = 0; i < this.options.routes.length; i++) {
			let item = this.options.routes[i]
			this.routerMap.set(item.path, item.component)
		}

		const _this = this
		window.addEventListener('hashchange', function() {
			let hashVal = location.hash.slice(1)
			let component = _this.routerMap.get(hashVal)
			console.log(component)
		})
	}
}

YRouter.install = function() {
	// console.log(location)
	let router = {}

	Vue.mixin({
		beforeCreate() {
			if (this.$options.router) {
				// console.log(this)
				this.$options.router.init()
			}
		},
	})

	Vue.util.defineReactive(router, 'hash', '/')

	Vue.component('router-link', routerLink)
	Vue.component('router-view', routerView)
}
export default YRouter
