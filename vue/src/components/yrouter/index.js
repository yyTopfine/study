import routerLink from './routerLink.vue'
import routerView from './routerView.js'

export let Vue
class YRouter {
	constructor(options) {
		this.$options = options

		this.routeMap = {}
		this.$options.routes.forEach(route => {
			this.routeMap[route.path] = route
		})
		// Vue.util.defineReactive(this, 'current', '/')
		this.current = '/'
		Vue.util.defineReactive(this, 'matched', [])

		this.match()

		window.addEventListener('hashchange', this.hashChange.bind(this))
		window.addEventListener('load', this.hashChange.bind(this))
	}

	hashChange() {
		this.current = location.hash.slice(1)
		this.match()
	}

	match(routes) {
		const routesAry = routes || this.$options.routes
		for (const route of routesAry) {
			if (this.current === '/' && route.path === '/') {
				this.matched.push(route.component)
			}

			if (this.current !== '/' && this.current.indexOf(route.path)) {
				this.matched.push(route.component)
				console.log('qq', route.children)
				this.match(route.children)
			}
		}
	}
}

YRouter.install = function(_Vue) {
	Vue = _Vue

	Vue.mixin({
		beforeCreate() {
			if (this.$options.router) {
				Vue.prototype.$router = this.$options.router
			}
		},
	})

	Vue.component('router-link', routerLink)
	Vue.component('router-view', routerView)
}

export default YRouter
