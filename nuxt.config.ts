// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  components: {
    global: true,
    dirs: ["~/components"],
  },

  app: {
    head: {
      title: "Meden Épületgépészet",
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      htmlAttrs: {
        lang: "hu",
      },
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Méden épületgépészet base leírás",
        },
        { name: "format-detection", content: "telephone=no" },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
    pageTransition: { name: "page", mode: "out-in" },
  },
  modules: ["@nuxt/image", "@nuxtjs/sitemap", "nuxt-simple-robots"], 
  // typescript: {
  //   typeCheck: false
  // }

  // sitemap: {
  //   siteUrl: 'http://localhost:3000/',
  // },
});
