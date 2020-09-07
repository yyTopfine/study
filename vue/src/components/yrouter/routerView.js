import { Vue } from './index'
export default {
	name: 'RouterView',
	render(h) {
		console.log(_Vue.$router)
		console.log(this.current)
		return h('div', {}, [this.$router[this.current].component])
	},
}
