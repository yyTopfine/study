export default class Bus {
	constructor() {
		this.callBacks = {}
	}

	$on(name, fn) {
		if (!this.callBacks[name]) {
			this.callBacks[name] = []
		}
		this.callBacks[name].push(fn)
	}

	$emit(name, msg) {
		this.callBacks[name].map(fn => {
			fn(msg)
		})
	}
}
