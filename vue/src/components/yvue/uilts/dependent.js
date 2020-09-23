/**
 * 依赖类，用于收集wather
 *
 * @export
 * @class Dependent
 */
export default class Dependent {
	constructor() {
		// 初始化一个wather收集数组
		this.depAry = []
	}

	/**
	 * 添加watcher
	 *
	 * @param {*} watcher
	 * @memberof Dependent
	 */
	addWatcher(watcher) {
		this.depAry.push(watcher)
	}

	/**
	 * 遍历执行wather中的更新函数
	 *
	 * @memberof Dependent
	 */
	notify() {
		this.depAry.forEach(watcher => {
			watcher.update()
		})
	}
}
