import Vue from 'vue'
import App from './App.vue'
import router from './router'

// Split each import into a separate chunk (https://router.vuejs.org/guide/advanced/lazy-loading.html).
const redThemecss = () => import('@/scss/red-theme.scss')
const blueThemecss = () => import('@/scss/blue-theme.scss')

Vue.config.productionTip = false
switch ('RED') {
  case 'RED': {
    redThemecss()
    break
  }
  case 'BLUE': {
    blueThemecss()
    break
  }
}

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
