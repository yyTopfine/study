const statusKey = '[[PromiseStatus]]'
const valueKey = '[[PromiseValue]]'
let resolveFn = null
let rejectFn = null

export default class MyPromise {
	constructor(handler) {
		this[statusKey] = 'padding'
		this[valueKey] = undefined

		this.resolveFn = []
		this.rejectFn = []
		this.finallyFn = null

		handler(this._resolve.bind(this), this._reject.bind(this))
	}

	_resolve(res) {
		this[statusKey] = 'fulfilled'
		this[valueKey] = res

		const run = () => {
			for (let i = 0; i < this.resolveFn.length; i++) {
				this.resolveFn[i] && this.resolveFn[i](res)
			}
			this.finallyFn && this.finallyFn()
		}

		setTimeout(run)
	}

	_reject(err) {
		this[statusKey] = 'rejected'
		this[valueKey] = err
		const run = () => {
			for (let i = 0; i < this.rejectFn.length; i++) {
				this.rejectFn[i] && this.rejectFn[i](err)
			}
			this.finallyFn && this.finallyFn()
		}

		setTimeout(run)
	}

	then(resFn, rjttFn) {
		resFn && this.resolveFn.push(resFn)
		rjttFn && this.rejectFn.push(rjttFn)
		return this
	}

	catch(rjttFn) {
		rjttFn && this.rejectFn.push(rjttFn)
		return this
	}

	finally(finFn) {
		this.finallyFn = finFn
		return this
	}
}
