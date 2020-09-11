import Vue from 'vue'
import Vuex from '../components/ystore/index.js'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		count: 0,
	},
	mutations: {
		setCount(state, val) {
			state.count = val
		},
	},
	actions: {
		restCount({ commit }, val) {
			setTimeout(() => {
				commit('setCount', val)
			}, 3000)
		},
	},
	getters: {
		doubleCount: state => {
			return state.count * 2
		},
	},
	modules: {},
})
