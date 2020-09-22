/**
 * 观察者类
 *
 * @export
 * @class Watcher
 */
export default class Watcher {
	constructor(node, vm, attrValue, fn) {
		this.node = node
		this.vm = vm
		this.attrValue = attrValue
		this.fn = fn
	}

	/**
	 * dom更新函数
	 *
	 * @memberof Watcher
	 */
	update() {
		this.fn(this.node, this.vm, this.attrValue)
	}
}
