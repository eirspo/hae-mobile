import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Inex from '../components/ind'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path:'/index',
      name:'index',
      component:Index
    }
  ]
})
