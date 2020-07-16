import Vue from 'vue'
import Vuex from 'vuex'
import vuexI18n from 'vuex-i18n'
import VueRouter from 'vue-router'
import { sync } from 'vuex-router-sync'

Vue.use(VueRouter)

// The following line will be replaced with by vux-loader with routes in ./demo_list.json
const routes = []

const router = new VueRouter({
    routes
})

Vue.use(router)
  
const haeStore = () => {

    /** i18n **/
    let store = new Vuex.Store({
        modules: {
        i18n: vuexI18n.store
        }
    })
    
    Vue.use(vuexI18n.plugin, store)

    sync(store, router)

    // simple history management
    const history = window.sessionStorage
    history.clear()
    let historyCount = history.getItem('count') * 1 || 0
    history.setItem('/', 0)
    let isPush = false
    let isTouchStart = false
    let endTime = Date.now()
    let methods = ['push', 'go', 'replace', 'forward', 'back']
    
    document.addEventListener('touchend', () => {
        isTouchStart = false
        endTime = Date.now()
    })
    document.addEventListener('touchstart', () => {
        isTouchStart = true
    })
    methods.forEach(key => {
        let method = router[key].bind(router)
        router[key] = function (...args) {
        isPush = true
        method.apply(null, args)
        }
    })
      
    router.beforeEach(function (to, from, next) {
        store.commit('updateLoadingStatus', {isLoading: true})
      
        const toIndex = history.getItem(to.path)
        const fromIndex = history.getItem(from.path)
        let direction
      
        if (toIndex) {
          if (!fromIndex || parseInt(toIndex, 10) > parseInt(fromIndex, 10) || (toIndex === '0' && fromIndex === '0')) {
            direction = 'forward'
          } else {
            direction = 'reverse'
          }
        } else {
          ++historyCount
          history.setItem('count', historyCount)
          to.path !== '/' && history.setItem(to.path, historyCount)
          direction = 'forward'
        }
      
        // 判断是否是ios左滑返回 或者 右滑前进
        if (toIndex && toIndex !== '0' && !isPush && (((Date.now() - endTime) < 377) || isTouchStart)) {
          store.commit('updateDirection', {direction: ''})
        } else {
          store.commit('updateDirection', { direction: direction })
        }
        isTouchStart = false
      
        if (/\/http/.test(to.path)) {
          let url = to.path.split('http')[1]
          window.location.href = `http${url}`
        } else {
          next()
        }
    })
    
    router.afterEach(function (to) {
        isPush = false
        store.commit('updateLoadingStatus', {isLoading: false})
        if (process.env.NODE_ENV === 'production') {
          ga && ga('set', 'page', to.fullPath)
          ga && ga('send', 'pageview')
        }
    })
    
    return store
  }
  
  export default haeStore