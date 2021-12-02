<!-- 当这个按钮被点击的时候，调用fn  -->
<template>
	<div class="red">
		这里是Demo的内部
		{{this.message}}
		<button @click="fn">call fn</button>
  </div>
</template>

<script>
export default{
	props:['message','fn']//声明的方式就是在这里写一个props,写上属性名
}

</script>

<style scoped>
.red{
	color:red;
	border:1px solid red;
}
</style>