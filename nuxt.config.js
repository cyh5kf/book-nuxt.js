const pkg = require('./package')
var TransformModulesPlugin = require('webpack-transform-modules-plugin')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: '/js/response.js' }
    ],
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  router: {
    middleware: 'check-auth'
  },

  /*
  ** Global CSS
  */
  css: [
    '@/assets/css/main.css',
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '@/plugins/cube-ui', ssr: false },
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    proxy:true
    // See https://github.com/nuxt-community/axios-module#options
  },

  proxy:{
    '/api/': { 
      target: 'https://47.110.179.84',
      pathRewrite: {'^/api/': ''},
      secure: false,
      changeOrigin: true
    }
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
   analyze: true,
   resolve: {
      alias: {
        'cube-ui': 'cube-ui/lib'
      }
    },
    plugins: [
      new TransformModulesPlugin()
    ],
    babel: {        //配置按需引入规则
      "plugins":[
          [
              "component",
              {
                  "libraryName":"element-ui",
                  "styleLibraryName":"theme-chalk"
              }
          ]
      ]
    },
    extend(config, ctx) {
      
    }
  }
}
