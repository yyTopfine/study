import routerLink from './routerLink.vue'

export let Vue
class YRouter {
	constructor(options) {
		this.$options = options

		this.routeMap = {}
		this.$options.routes.forEach(route => {
			this.routeMap[route.path] = route
		})
		Vue.util.defineReactive(this, 'current', '/')
		window.addEventListener('hashchange', this.hashChange.bind(this))
		window.addEventListener('load', this.hashChange.bind(this))
	}

	hashChange() {
		this.current = location.hash.slice(1)
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
	Vue.component('router-view', {
		render(h) {
			const { routeMap, current } = this.$router
			const component = routeMap[current] ? routeMap[current].component : null
			return h(component)
		},
	})
}

export default YRouter
