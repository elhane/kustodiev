const StyleLintPlugin = require('stylelint-webpack-plugin')

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  target: 'static',
  router: {
    base: '/kustodiev/',
  },

  head: {
    title: 'Борис Кустодиев',
    htmlAttrs: {
      lang: 'ru',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Картины Бориса Кустодиева',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'preload',
        as: 'font',
        crossorigin: 'crossorigin',
        type: 'font/woff2',
        href: '/fonts/yeseva-one-regular.woff2',
      },
      {
        rel: 'preload',
        as: 'font',
        crossorigin: 'crossorigin',
        type: 'font/woff2',
        href: '/fonts/helvetica-regular.woff2',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/node_modules/normalize-css/normalize.css', '~/assets/styles.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
  ],

  styleResources: {
    scss: ['./assets/global/_mixins.scss', './assets/global/_vars.scss'],
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config, { isDev, isClient }) {
      config.plugins.push(
        new StyleLintPlugin({
          syntax: 'scss',
        })
      )
    },
  },
}
