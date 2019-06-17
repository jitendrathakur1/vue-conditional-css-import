import Vue from 'vue'
import App from './App.vue'
import router from './router'

// Split each import into a separate chunk (https://router.vuejs.org/guide/advanced/lazy-loading.html).
const redThemecss = () => import('./lib/css/red-theme')
const blueThemecss = () => import('./lib/css/blue-theme')

// This means they can be loaded conditionally (https://webpack.js.org/loaders/style-loader/#useable).
// This feature is enabled in ./vue.config.js > chainWebpack.
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
