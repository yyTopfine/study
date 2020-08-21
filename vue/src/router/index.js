import Vue from 'vue'
// import VueRouter from 'vue-router'
import VueRouter from '../components/yrouter'
import Home from '../views/Home.vue'
import FormTest from '../views/FormTest.vue'
Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/form',
		name: 'FormTest',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: FormTest, // () => import(/* webpackChunkName: "yform" */ '../views/FormTest.vue'),
	},
]

const router = new VueRouter({
	routes,
})

export default router
