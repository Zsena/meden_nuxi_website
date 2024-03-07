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
      title: "Mé-den Épületgépészet",
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      htmlAttrs: {
        lang: "hu",
        class: "scroll-smooth",
      },
      
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Vállalkozásunk Víz Gáz és fűtés szerelés mellett foglalkozik gépi és magasnyomású mosóval való dugulás elhárítással valamint gépi, vegyszeres fűtés rendszer tisztítással is!",
        },
        { name: "format-detection", content: "telephone=no" },
        {
          hid: "og:title",
          property: "og:title",
          content: "Mé-den Épületgépészet",
        },
        {
          hid: "og:description",
          property: "og:description",
          content: "Vállalkozásunk Víz Gáz és fűtés szerelés mellett foglalkozik gépi és magasnyomású mosóval való dugulás elhárítással valamint gépi, vegyszeres fűtés rendszer tisztítással is!",
        },
        {
          hid: "og:image",
          property: "og:image",
          content: "/img/headers/header3.webp",
        },
        {
          hid: "twitter:card",
          name: "twitter:card",
          content: "summary_large_image",
        },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
    pageTransition: { name: "page", mode: "out-in" },
  },
  modules: [
    "@nuxt/image",
    "@nuxtjs/sitemap",
    "nuxt-simple-robots",
    "nuxt-aos",
  ],
});
