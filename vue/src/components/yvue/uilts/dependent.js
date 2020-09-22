export default class Dependent {
	constructor() {
		this.depAry = []
	}

	addWatcher(watcher) {
		this.depAry.push(watcher)
	}
}
