export default {
  mode: "spa",
  /*
   ** Headers of the page
   */
  head: {
    title: "Object Oriented Conference",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Object-Oriented Conference はオブジェクト指向をテーマに、あれこれ共有したり、セッションを聴講することで、みなさんの知見を深めるためのイベントです。オブジェクト指向についてまったく知らない方やオブジェクト指向を完全に理解した方、そして普段オブジェクト指向以外のパラダイムを利用している方もお気軽にご参加ください！"
      },
      {
        hid: "og:site_name",
        property: "og:site_name",
        content: "Object Oriented Conference"
      },
      { hid: "og:type", property: "og:type", content: "website" },
      { hid: "og:url", property: "og:url", content: "https://ooc.dev" },
      {
        hid: "og:title",
        property: "og:title",
        content: "Object Oriented Conference"
      },
      {
        hid: "og:description",
        property: "og:description",
        content:
          "Object-Oriented Conference はオブジェクト指向をテーマに、あれこれ共有したり、セッションを聴講することで、みなさんの知見を深めるためのイベントです。オブジェクト指向についてまったく知らない方やオブジェクト指向を完全に理解した方、そして普段オブジェクト指向以外のパラダイムを利用している方もお気軽にご参加ください！"
      },
      {
        hid: "og:image",
        property: "og:image",
        content: "https://ooc.dev/ogp.png"
      },
      { hid: "twitter:card", property: "twitter:card", content: "summary" },
      { hid: "twitter:site", property: "twitter:site", content: "@oocon_2020" },
      { name: "theme-color", content: "#f4de0f" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "stylesheet", ref: "https://use.typekit.net/dre5koo.css" }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#ff6022" },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    "~/plugins/vue-scrollto",
    { src: "~plugins/ga.js", mode: "client" }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    "@nuxtjs/style-resources",
    "@nuxtjs/sitemap"
  ],
  styleResources: {
    scss: ["~/assets/scss/_mixin.scss"]
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  sitemap: {
    hostname: "https://ooc.dev",
    gzip: true,
    routes: []
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
