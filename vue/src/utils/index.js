import Vue from 'vue'
export function createNotice(component, options) {
	const vm = new Vue({
		render: h => {
			return h(component, {
				props: {
					title: options.title,
					message: options.message,
				},
			})
		},
	}).$mount()

	document.querySelector('body').append(vm.$el)

	setTimeout(() => {
		document.querySelector('body').removeChild(vm.$el)
		vm.$destroy()
	}, 3000)

	return vm
}

export function createNoticeExtend(component, options) {
	const constr = Vue.extend(component)

	const vm = new constr({
		propsData: options,
	}).$mount()

	document.querySelector('body').append(vm.$el)

	vm.remove = function() {
		document.querySelector('body').removeChild(vm.$el)
		vm.$destroy()
	}

	// setTimeout(() => {
	// 	document.querySelector('body').removeChild(vm.$el)
	// 	vm.$destroy()
	// }, 3000)

	return vm
}
