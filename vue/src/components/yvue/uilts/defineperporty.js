import Dependent from './dependent.js'

/**
 * 对象转为响应式对象实现类
 *
 * @class Observe
 */
export default class Observe {
	constructor(obj, vm) {
		this.observeInit(obj, vm)
	}

	/**
	 * 对象转为响应式对象
	 *
	 * @param {*} obj
	 */
	observeInit(obj, vm) {
		Object.keys(obj).forEach(key => {
			// 为响应式对象的每个属性创建一个dep(依赖)，用于管理该属性所有的watcher(观察者)
			const dep = new Dependent()
			vm.depMap.set(key, dep)

			this.defineReactive(obj, key, obj[key], vm)
		})
	}

	/**
	 * 响应式对象拦截
	 *
	 * @param {*} obj
	 * @param {*} key
	 * @param {*} val
	 * @returns
	 */
	defineReactive(obj, key, val, vm) {
		// 非对象不做转化
		if (typeof obj !== 'object' || obj === null) {
			return
		}

		this.observeInit(val, vm)

		Object.defineProperty(obj, key, {
			get() {
				return val
			},
			set(newVal) {
				if (newVal !== val) {
					val = newVal

					// 数据有更新时，遍历依赖数组，并执行数组中watcher的update函数更新对应视图
					vm.depMap.get(key).depAry.forEach(wat => {
						wat && wat.update()
					})
				}
			},
		})
	}
}
