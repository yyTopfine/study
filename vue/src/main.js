import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Notice from './components/Notice.vue'

import { createNotice, createNoticeExtend } from './utils/index'
import Bus from './components/communicate/bus'

Vue.config.productionTip = false
Vue.prototype.$bus = new Bus()

Vue.prototype.$message = function(options) {
	createNotice(Notice, options)
}

Vue.prototype.$messageExtend = function(options) {
	createNoticeExtend(Notice, options)
}

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app')
