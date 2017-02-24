// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
// import axios
// import io from '.socket.io-client'

// let socket = io('http:localhost:3000')

// socket.on('Connected', function(){

// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data: {
    store
  },
  router,
  template: '<App/>',
  components: { App }
})
