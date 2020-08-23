import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Play from './views/Play.vue'

Vue.use(Router)

export default new Router({
  base: process.env.BASE_URL,
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta:{
        title:"GameVideo"
      }
    },
    
    {
      path: '/play',
      component: Play ,
      meta:{
        title:"GameVideo"
      }
    }
   
  ]
})
