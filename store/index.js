import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
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
    })    
    return store
  }
  
  export default haeStore