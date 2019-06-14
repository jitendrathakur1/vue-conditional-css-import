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
