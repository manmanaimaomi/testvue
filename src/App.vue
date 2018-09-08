<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!-- 当前路由地址所显示的内容 -->
    <router-view/>
  </div>
</template>
<!-- 单文件组件  Vue.component('abc',{}) -->

<!-- 路由是根据网址的不同 返回给用户不同的页面 -->
<script>
export default {
  name: 'App'
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /*text-align: center;*/
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
