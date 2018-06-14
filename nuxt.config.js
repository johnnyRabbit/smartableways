module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'smartableways',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  css: [
       '~/assets/css/animate.css',
       '~/assets/css/nivo-lightbox.css',
       '~/assets/css/owl.carousel.min.css',
       '~/assets/css/owl.theme.css',
       '~/assets/css/bootstrap.min.css',
       '~/assets/css/responsive.css',
       '~/assets/css/slick-theme.css',
       '~/assets/css/slick.css',
       '~/assets/css/slicknav.css',
       '~/assets/css/main.css'
  ],
  plugins:[
    { src: '~/plugins/jquery-min.js', ssr: false },
    { src: '~/plugins/popper.min.js', ssr: false },
    { src: '~/plugins/bootstrap.min.js', ssr: false },
    { src: '~/plugins/owl.carousel.min.js', ssr: false },
    { src: '~/plugins/slick.min.js', ssr: false },
    { src: '~/plugins/wow.js', ssr: false },
    { src: '~/plugins/jquery.nav.js', ssr: false },
    { src: '~/plugins/scrolling-nav.js', ssr: false },
    { src: '~/plugins/jquery.easing.min.js', ssr: false },
    { src: '~/plugins/jquery.slicknav.js', ssr: false },
    { src: '~/plugins/main.js', ssr: false },
    { src: '~/plugins/form-validator.min.js', ssr: false },
    { src: '~/plugins/contact-form-script.min.js', ssr: false },
    { src: '~/plugins/map.js', ssr: false },
  ],
  render: {
    bundleRenderer: {
      shouldPreload: (file, type) => {
        return ['script', 'style', 'font'].includes(type)
      }
    }
  }
}
