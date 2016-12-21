// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import App from './App'
import router from './router/index'

Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(VueResource)


window.Tin = 'http://localhost:8088'
window.sideIsOpen = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  ...App
})
