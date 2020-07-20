import Vue from 'vue'
import Vuex from 'vuex'
import vuexI18n from 'vuex-i18n'
import VueRouter from 'vue-router'
import { sync } from 'vuex-router-sync'
Vue.use(VueRouter)
Vue.use(Vuex)
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
    
    return store
  }
  
  export default haeStore