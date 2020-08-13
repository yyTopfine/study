import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Bus from './components/communicate/bus'

Vue.config.productionTip = false
Vue.prototype.$bus = new Bus()

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app')
