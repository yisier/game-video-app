/**
 * 项目的入口js文件
 */

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import '@/assets/vue.css'
import moment from 'moment'


// 设置使用中文
moment.locale('zh-cn')

Vue.config.productionTip = false
Vue.prototype.$moment = moment


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')


router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})