import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: 'index',
      component: Home,
      children: [{
        path: 'login',
        name: 'login',
        component: () => import('@/views/login')
      }, {
        path: 'index',
        name: 'index',
        component: () => import('@/views/layout')
      }
      ]
    }, {
      path: '*',
      name: '404',
      redirect: 'index'
    }
  ]
})
