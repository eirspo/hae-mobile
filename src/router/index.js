import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Index from '../components/Index'
import List from '../components/List'

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
      path: '/inner/list',
      name: 'list',
      component: List
    }
  ]
})
