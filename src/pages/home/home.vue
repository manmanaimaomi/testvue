<template>
	<div>
		多页应用 页面打开快  跳转慢
		单页应用 页面跳转不用请求html文件请求 切换快  用js 渲染
		首屏展示慢一点 对搜索引擎不好 排名不好 因为搜索引擎只认识html之中的内容 单页应用 内容是js渲染形成的 搜索引擎不认识内容
		<div>homedsfa</div>
		<router-link to="/list">列表页</router-link>
	</div>
</template>
<script>
	export default {
		name:'home'
	}

</script>
<style>
	
</style>