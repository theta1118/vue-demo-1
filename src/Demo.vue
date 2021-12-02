<!-- 第一部分：视图 -->
<template>
  <div class="blue">
   demo
  </div>
</template>

<!-- 第二部分：视图之外的其他部分 -->
<script>
export default {
  data () {
    return {
      n: 0
    }
  },
  methods: {
    add () {
      this.n += 1
    },
  }
}
</script>

<!-- 第三部分：CSS -->
<style scoped>
   .blue{
		color:blue;
   }
</style>