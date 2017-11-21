// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Mock from './mock'
import axios from './axios'
import 'bootstrap/dist/css/bootstrap.css'
import './assets/css/xmi.css'
import XMIPlugin from './assets/js/plugin'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(XMIPlugin)

if (process.env.NODE_ENV === 'development') {
  Mock.bootstrap()
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
