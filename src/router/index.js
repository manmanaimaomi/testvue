import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'//@是src目录的意思
import Home from '@/pages/home/home'
import List from '@/pages/list/list'

Vue.use(Router)

export default new Router({
  routes: [
    {
    	path:'/',
    	name:'home',
    	component:Home
    },
    {
    	path:'/list',
    	name:'list',
    	component:List
    }
  ]
})
