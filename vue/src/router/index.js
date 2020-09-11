import Vue from 'vue'
// import VueRouter from 'vue-router'
import VueRouter from '../components/yrouter'
import Home from '../views/Home.vue'
import FormTest from '../views/FormTest.vue'
import VuexPage from '../views/VuexPage.vue'
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
	{
		path: '/vuex',
		name: 'VuexPage',
		component: VuexPage,
		children: [
			{
				path: 'childrenTest',
				component: FormTest,
			},
		],
	},
]

const router = new VueRouter({
	routes,
})

export default router
