import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Index from '../components/Index'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/',
      name: 'index',
      component: Index
    }
  ]
})
