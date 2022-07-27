const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],
  publicPath: '',
  outputDir: 'docs',
  pwa: {
    name: 'Singapore PSI Map'
  },
  chainWebpack: config =>
  {
    // config.devtool('eval-cheap-module-source-map')
    config.optimization.minimize(false)

    config.plugin('html')
      .tap(args =>
      {
        args[0].minify = false
        return args
      })
  }
})
