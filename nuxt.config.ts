// https://nuxt.com/docs/api/configuration/nuxt-config
import { gtag_report_conversion } from './composables/useReportConversion';

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
      script: [
        { src: "https://www.googletagmanager.com/gtag/js?id=G-P70G108MQD", async: true },
        {
          hid: 'gtm',
          children: `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-P70G108MQD');`,
          type: 'text/javascript',
        },
        {
          hid: 'gtag_report_conversion',
          children: `(${gtag_report_conversion.toString()})();`,
          type: 'text/javascript',
        },
        {
          src: "//cdn.cookie-script.com/s/a3448cb7ae3ea3adfd6e8acdbb58a776.js",
          type: "text/javascript",
        }
      ],
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Vállalkozásunk Víz Gáz és fűtés szerelés mellett foglalkozik gépi és magasnyomású mosóval való dugulás elhárítással valamint gépi, vegyszeres fűtés rendszer tisztítással is!",
        },
        { name: "format-detection", content: "telephone=no" },
        {
          hid: "keywords",
          name: "keywords",
          content: "épületgépészet, gépészeti tervezés, fűtés, szellőzés, légkondicionálás, hűtés, hőszivattyú, energetika, energiahatékonyság, épületautomatizálás, HVAC, légtechnika, szabályozás, páraelszívó, csőhálózat, fűtéskorszerűsítés, energiafelhasználás, hőcserélő, gázellátás, vízellátás, épületenergetika, klímaberendezés, energiaaudit, zöldtechnológia, hőszigetelés, kazán, hőleadás, hőmérséklet-szabályozás, energiatakarékosság, hőterhelés, légáramlás, tűzvédelem.",
        },
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
        { property: 'og:type', content: 'website' },
        { hid: "og:url", property: "og:url", content: "https://medenepuletgepesz.hu" },
        {
          hid: "twitter:card",
          name: "twitter:card",
          content: "summary_large_image",
        },
        { name: 'robots', content: 'index, follow' },
        { name: 'author', content: 'Zsena - Geekrabbits.hu' },
        { name: 'language', content: 'hu' },
        { name: 'geo.position', content: '46.9777206, 18.21988267' }
      ],
      link: [
        { rel: 'canonical', href: 'https://medenepuletgepesz.hu/' },
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      ],
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
