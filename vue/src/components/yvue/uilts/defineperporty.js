function observeInit(obj) {
	for (key in obj) {
		defineReactive(obj, key, obj[key])
	}
}

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

function set(obj, key, val) {
	defineReactive(obj, key, val)
}
