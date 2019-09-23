import Vue from 'vue'
import App from './App.vue'
import './plugins/modal'
import './plugins/api'
import router from './router/router'
import store from './vuex/store'
import './registerServiceWorker'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
