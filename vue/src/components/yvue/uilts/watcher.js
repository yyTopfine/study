import Dependent from './dependent.js'
/**
 * 观察者类
 *
 * @export
 * @class Watcher
 */
export default class Watcher {
	constructor(vm, attrValue, fn) {
		this.vm = vm
		this.attrValue = attrValue
		this.fn = fn

		// 将waatcher(观察者)实例作为Dep(依赖)的静态属性
		Dependent.target = this
		// data数据对象的读取，用于触发一次watcher收集
		vm[attrValue]
		// 重置静态属性
		Dependent.target = null
	}

	/**
	 * dom更新函数
	 *
	 * @memberof Watcher
	 */
	update() {
		this.fn.call(this.vm)
	}
}
