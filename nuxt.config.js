const path = require('path')

module.exports = {
  mode: 'spa',
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000'
  },
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=0' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
 
/*
  ** Global CSS
  */
  css: [
    'hae/src/styles/1px.less',
    'hae/src/styles/reset.less',
    'hae/src/styles/tap.less'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {
      src: '~/plugins/vux-plugins',
      ssr: false
    },
    {
      src: '~/plugins/vux-components',
      ssr: true
    }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [

  ],
  /*
  ** Build configuration
  */
  build: {
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.forEach(item => {
          if(item.loader == 'babel-loader') {
            delete item.exclude;
            item.include = /node_modules\/hae\/src|\.nuxt|src/
          }
        })
      }
    }
  },
  server: {
    port: 8000,
    host: '0.0.0.0',
    timing: false
  }
}
