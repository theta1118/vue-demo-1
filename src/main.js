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
		visible: true,
		n: 0
	},
	//传的方式就是在组件后面加上key value
	//外部传参
	//两个message的写法是完全等价的
	//我的add从右边更新了n,然后这个n又传给了我的message,
	//然后message又会映射到Demo4.vue的那个位置
	//传参的时候可以传普通的变量，也可以传函数，还有固定的字符串
	template: `
	    <div>
	      {{n}}
	      <Demo4 :message="n" :fn="add"/>
	    </div>	
	`,
	methods: {
		add () {
			this.n += 1
		},
		toggle () {
			this.visible = !this.visible
		}
	}
}).$mount('#frank')