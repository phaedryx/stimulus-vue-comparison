const { environment } = require('@rails/webpacker')

const { DefinePlugin } = require('webpack')
const { VueLoaderPlugin } = require('vue-loader')
const customConfig = {
  resolve: {
    alias: {
      vue: 'vue/dist/vue.esm-bundler.js' // Use the variation that allows Vue to use existing HTML (e.g. Rails views)
    }
  }
}

environment.config.merge(customConfig)

environment.plugins.prepend(
  'Define',
  new DefinePlugin({
    __VUE_OPTIONS_API__: false, // To use the Composition API exclusively (I like it, but this is optional)
    __VUE_PROD_DEVTOOLS__: false // Ensure development code tools stay out of production code
  })
)

environment.plugins.prepend(
  'VueLoaderPlugin',
  new VueLoaderPlugin()
)

environment.loaders.prepend('vue', {
  test: /\.vue$/,
  use: [{ loader: 'vue-loader' }]
})

module.exports = environment
