// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'  //app.vue  app.js   app.json
import router from './router'//路由配置内容

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App : App},
  // components: { App },
  template: '<App/>'
})
