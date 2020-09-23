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
				this.compileElement(node)
			} else if (node.nodeType === 3 && /\{\{(.*)\}\}/.test(node.textContent)) {
				// 节点为文本操作
				const reg = node.textContent.match(/\{\{(?<textVal>.*)\}\}/)
				this.compileText(node, reg)
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
	compileElement(node) {
		const attributes = node.attributes
		// 节点属性遍历
		Array.from(attributes).forEach(attr => {
			const attrName = attr.name
			const attrValue = attr.value

			if (attrName.indexOf('v-') === 0) {
				// 根据属性名，解析出该属性对应的解析方法
				const compileMed = attrName.substr(2)

				if (this[compileMed]) {
					new Watcher(this.$vm, attrValue, () => {
						this[compileMed](node, this.$vm, attrValue)
					})
					this[compileMed](node, this.$vm, attrValue)
				}
			} else if (attrName.indexOf('@') === 0) {
				const eventName = attrName.substr(1)
				const reg = attrValue.match(/(?<med>.*)\((?<arg>.*)\)/)
				this.eventBind(node, eventName, this.$vm.methods[reg.groups.med], reg)
			}
		})
	}

	// 解析v-text指令
	text(node, vm, key) {
		node.textContent = vm[key]
	}

	// 解析v-html指令
	html(node, vm, key) {
		node.innerHTML = vm[key]
	}

	// 解析文本节点
	compileText(node, reg) {
		new Watcher(this.$vm, reg.groups.textVal, () => {
			node.textContent = this.$vm[reg.groups.textVal]
		})
		node.textContent = this.$vm[reg.groups.textVal]
	}

	eventBind(node, eventName, fn, reg) {
		node.addEventListener(eventName, () => {
			fn.apply(this.$vm, reg.groups.arg.split(','))
		})
	}

	model(node, vm, key) {
		node.value = vm[key]
		node.addEventListener('input', () => {
			vm[key] = node.value
		})
	}
}
