import Watcher from './watcher.js'

/**
 * 模板编译
 *
 * @class Compile
 */
export default class Compile {
	constructor(vm, el) {
		this.$vm = vm
		this.$el = el
		this.watcherFn = null

		this.compile(document.querySelector(this.$el))
	}

	/**
	 * 根据不同类型的dom节点，进行不同的编译操作
	 *
	 * @param {*} root
	 * @memberof Compile
	 */
	compile(root) {
		const nodes = root.childNodes

		// 遍历节点，根据不同的节点类型进行不同的编译
		Array.from(nodes).forEach(node => {
			// 如果节点存在子节点，则递归遍历
			if (node.childNodes) {
				this.compile(node)
			}

			if (node.nodeType === 1) {
				// 节点为元素节点操作
				this.compileElement(node, this.$vm)
			} else if (node.nodeType === 3 && /\{\{(.*)\}\}/.test(node.textContent)) {
				// 节点为文本操作
				this.compileText(node, this.$vm)
			}
		})
	}

	/**
	 * 解析元素节点
	 *
	 * @param {*} node
	 * @param {*} vm
	 * @memberof Compile
	 */
	compileElement(node, vm) {
		const attributes = node.attributes
		// 节点属性遍历
		Array.from(attributes).forEach(attr => {
			const attrName = attr.name
			const attrValue = attr.value

			// 根据属性名，解析出该属性对应的解析方法
			const key = attrName.substr(2)

			if (this[key]) {
				this.watcherFn = new Watcher(node, this.$vm, attrValue, this[key])
				vm.depMap.get(attrValue).addWatcher(this.watcherFn)
				this[key](node, this.$vm, attrValue)
			}
		})
	}

	// 解析v-text指令
	text(node, vm, value) {
		node.textContent = vm[value]
	}

	// 解析v-html指令
	html(node, vm, value) {
		node.innerHTML = vm[value]
	}

	// 解析文本节点
	compileText(node, vm) {
		this.watcherFn = new Watcher(node, vm, vm[RegExp.$1], () => {
			node.textContent = vm[RegExp.$1]
		})
		vm.depMap.get(RegExp.$1).addWatcher(this.watcherFn)
		node.textContent = vm[RegExp.$1]
	}
}
