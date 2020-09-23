import Observe from './uilts/defineperporty.js'
import Compile from './uilts/compile.js'

/**
 * 自定义Vue实现类
 *
 * @class Yvue
 */
export class Yvue {
	constructor(options) {
		this.$options = options

		// 判断data是否为函数
		if (typeof options.data === 'function') {
			this.$data = options.data()
		} else {
			this.$data = options.data
		}

		this.methods = options.methods

		// 初始化$date中属性对应的依赖集合
		this.depMap = new Map()

		// $data响应式转化
		this.observe = new Observe(this.$data, this)

		// 将$data中的属性代理到yvue实例上，从而使其能通过实例直接访问
		this.proxy()

		// 页面初始化编译
		new Compile(this, this.$options.el)
	}

	/**
	 * 代理$data属性至yvue实例
	 *
	 * @memberof Yvue
	 */
	proxy() {
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

	/**
	 * 响应式对象添加属性
	 *
	 * @param {*} obj
	 * @param {*} key
	 * @param {*} val
	 */
	set(obj, key, val) {
		this.observe.defineReactive(obj, key, val)
	}
}
