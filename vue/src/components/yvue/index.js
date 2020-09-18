/**
 * 对象转为响应式对象
 *
 * @param {*} obj
 */
function observeInit(obj) {
	for (key in obj) {
		defineReactive(obj, key, obj[key])
	}
}

/**
 * 响应式对象拦截
 *
 * @param {*} obj
 * @param {*} key
 * @param {*} val
 * @returns
 */
function defineReactive(obj, key, val) {
	if (typeof obj !== 'object' || obj === null) {
		return
	}

	observeInit(val)

	Object.defineProperty(obj, key, {
		get() {
			console.log(key + ':get is runed')
			return val
		},
		set(newVal) {
			console.log(key + ':set is runed')
			val = newVal
			update()
		},
	})
}

function update() {}

/**
 * 响应式对象添加属性
 *
 * @param {*} obj
 * @param {*} key
 * @param {*} val
 */
function set(obj, key, val) {
	defineReactive(obj, key, val)
}

/**
 * 自定义Vue实现类
 *
 * @class Yvue
 */
class Yvue {
	constructor(options) {
		this.$options = options
		if (typeof options.data === 'function') {
			this.$data = options.data()
		} else {
			this.$data = options.data
		}

		new Observe(this.$data)
		this.proxy()
		new Compile(this, this.$options.el)
	}

	proxy() {
		console.log(this.$data)
		Object.keys(this.$data).forEach(key => {
			Object.defineProperty(this, key, {
				get() {
					return this.$data[key]
				},
				set(val) {
					this.$data[key] = val
				},
			})
		})
	}
}

/**
 * 对象转为响应式对象实现类
 *
 * @class Observe
 */
class Observe {
	constructor(obj) {
		observeInit(obj)
	}
}

class Compile {
	constructor(vm, el) {
		this.$vm = vm
		this.$el = el

		this.compile(document.querySelector(this.$el))
	}

	compile(root) {
		const nodes = root.childNodes

		Array.from(nodes).forEach(node => {
			this.compile(node)

			if (node.nodeType === 1) {
				this.compileElement()
			} else if (node.nodeType === 3 && /\{\{(.*)\}\}/.test(node.textContent)) {
				this.compileText()
			}
		})
	}

	compileElement() {}

	compileText() {
		console.log(RegExp.$1)
	}
}
