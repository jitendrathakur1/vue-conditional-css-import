# vue-conditional-css-import
Switching css file based on condition like theme name, brand name etc. Using this solution, you will easily switch css based on conditon.

### main.js or compnent.js 
```
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
```

