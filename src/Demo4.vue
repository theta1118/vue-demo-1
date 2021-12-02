<template>
	<div class="blue">
    {{ n }}
    <button @click="add">+1</button>
  </div>
</template>

<script>
export default{
	data () {
		return {
			n: 0,
			array: [1, 2, 3, 4, 5, 6, 7, 8]
		}
	},
	created () {
		console.log('这玩意出现在内存中，没有出现在页面中')
	},
	mounted () {
		console.log('这玩意出现在页面中')
	},
	updated () {
		console.log('更新了')
		console.log(this.n)
	},
	destroyed () {
		console.log('已经消亡了')
	},
	methods:{
		add(){
			this.n += 1
		}
	}
}

</script>

<style>

</style>