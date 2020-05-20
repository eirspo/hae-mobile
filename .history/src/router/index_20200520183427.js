import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Index from '../components/Index'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Index',
      name: 'index',
      component: Index
    },
    {
      path: '/list',
      name: 'list',
      component: Index
    }
  ]
})
