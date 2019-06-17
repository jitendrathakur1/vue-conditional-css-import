# vue-conditional-css-import
Switching css file based on condition like theme name, brand name etc. Using this solution, you will easily switch css based on conditon.

## Require module to enable conditional css.
1) "node-sass"
2) "style-loader"

## This feature is enabled in ./vue.config.js.
Adding prefix "Useable" in your css file like this "theme.useable.scss"
```
module.exports = {
  chainWebpack: config => {
    config.module.rule('scss').exclude.add(/\.useable.scss$/)

    config.module
      .rule('scss-useable')
      .test(/\.useable.scss$/)
      .use('style-loader/useable')
      .loader('style-loader/useable')
      .end()
      .use('css-loader')
      .loader('css-loader')
      .end()
      .use('postcss-loader')
      .loader('postcss-loader')
      .end()
      .use('sass-loader')
      .loader('sass-loader')
  }
}
```
Refereance url :[Useable Reference](https://webpack.js.org/loaders/style-loader/#useable).
[chaining-advanced Reference](https://cli.vuejs.org/guide/webpack.html#chaining-advanced)

### Create css javascript file for your css like "blue-theme.useable.scss" & "red-theme.useable.scss"
```
import blueStyles from '../../scss/blue-theme.useable.scss'
export default blueStyles.use()
```
Styles are used: blueStyles.use()
Styles are removed: blueStyles.unuse() 

### main.js or compnent.js 
```
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
```

