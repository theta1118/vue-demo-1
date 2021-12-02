// import Vue from 'vue'

// console.log(window.Vue)
// import App from './App.vue'

// Vue.config.productionTip = false

// 完整版的写法
// 这里面的app就是单文件组件

// import Demo from './Demo.vue'
// console.log(Demo.render.toString())
// new Vue({
// 	el: '#frank',
// 	render (h) {
// 		return h(Demo)
// 	}
// });

// new Vue({
// 	render:h => h(Demo)
// }).$mount('#frank')


// 非完整版的写法
// new Vue({
// 	el: "#app",
// 	template: `<div>{{n}}</div>`,
// 	data () {
// 		return {
// 			n: 0
// 		}
// 	}
// })


console.log(window.Vue)

const Vue = window.Vue

Vue.config.productionTip = false

import Demo4 from './Demo4.vue'

new Vue({
	components: { Demo4 },
	data: {
		visible: true
	},
	template: `
	<div>
	<button @click="toggle">toggle</button>
	<hr>
	<Demo4 v-if="visible === true"/>
	</div>	
	`,
	methods: {
		toggle () {
			this.visible = !this.visible
		}
	}
}).$mount('#frank')