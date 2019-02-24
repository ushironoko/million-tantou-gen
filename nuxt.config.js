const pkg = require('./package')

module.exports = {
  mode: 'spa',
  srcDir: 'app',

   /**
   * PWA manifests
   */
  manifest: {
    name: 'ミリシタ担当アイドルシートジェネレータ',
    short_name: 'ミリシタ担当ジェネレータ',
    title: 'ミリシタ担当アイドルシートジェネレータ',
    'og:title': 'ミリシタ担当アイドルシートジェネレータ',
    description: '担当アイドルシートをウェブで作れるツール。',
    'og:description': '担当アイドルシートをウェブで作れるツール。',
    lang: 'ja',
    theme_color: '#FFF',
    background_color: '#e6ecf0'
  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'ミリシタ担当アイドルシートジェネレータ',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '担当アイドルシートをウェブで作れるツール。' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#00adb8' },

  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-chalk/index.css',
    '@/assets/common.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/element-ui',
    '@/plugins/konva'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    transpile: [/^element-ui/],

    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
