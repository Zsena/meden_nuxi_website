<script setup lang="ts">
import CallToAction from "~/components/CallToAction.vue";
import { useRoute } from 'vue-router';
const route = useRoute();
useHead(() => ({
  title: "Mé-den épületgépészet - Munkáink",
  meta: [
    {
      hid: "description",
      name: "description",
      content:
        "Tekintse meg referenciáinkat és eddigi munkáinkat! Vállalkozásunk számos sikeres projektet tud felmutatni Víz, Gáz és Fűtés szerelésben, gépi és magasnyomású mosásban, duguláselhárításban, valamint gépi, vegyszeres fűtésrendszer tisztításban.",
    },
    {
      hid: "og:title",
      property: "og:title",
      content: "Mé-den épületgépészet - Munkáink",
    },
    {
      hid: "og:description",
      property: "og:description",
      content:
        "Tekintse meg referenciáinkat és eddigi munkáinkat! Vállalkozásunk számos sikeres projektet tud felmutatni Víz, Gáz és Fűtés szerelésben, gépi és magasnyomású mosásban, duguláselhárításban, valamint gépi, vegyszeres fűtésrendszer tisztításban.",
    },
    { hid: "og:image", property: "og:image", content: "https://medenepuletgepesz.hu/img/04heating.webp" },
    { hid: "og:url", property: "og:url", content: "https://medenepuletgepesz.hu/munkaink" },
  ],
  link: [
    { rel: 'canonical', href: 'https://medenepuletgepesz.hu' + route.path }
  ],
}));

const galleryImages1 = ref([
  {
    src: "/img/munkaink/csaladihazpadlofutes.webp",
    title: "Három szintes családi ház padlófűtése. 👨🏽‍🔧",
  },
  {
    src: "/img/munkaink/csaladihazpadlofutes2.webp",
    title: "Három szintes családi ház padlófűtése.👨🏽‍🔧",
  },
  {
    src: "/img/munkaink/csaladihazpadlofutes3.webp",
    title: "Három szintes családi ház padlófűtése. 👨🏽‍🔧",
  },
  {
    src: "/img/munkaink/padlofutes4.webp",
    title: "Három szintes családi ház padlófűtése. 👨🏽‍🔧",
  },
  {
    src: "/img/munkaink/padlofutes7.webp",
    title: "Három szintes családi ház padlófűtése. 👨🏽‍🔧",
  },
  {
    src: "img/munkaink/padlofutes8.webp",
    title: "Három szintes családi ház padlófűtése. 👨🏽‍🔧",
  },
  {
    src: "/img/munkaink/csaladihazpadlofutes.webp",
    title: "Három szintes családi ház padlófűtése. 👨🏽‍🔧",
  },
  {
    src: "/img/munkaink/csaladihazpadlofutes.webp",
    title: "Három szintes családi ház padlófűtése. 👨🏽‍🔧",
  },
]);

const galleryImages2 = ref([
  {
    src: "/img/munkaink/futesszereles.webp",
    title: "Fűtés szerelése 👨🏽‍🔧",
  },
  {
    src: "/img/munkaink/futesszereles2.webp",
    title: "Fűtés szerelése 👨🏽‍🔧",
  },
  {
    src: "/img/munkaink/futesszereles3.webp",
    title: "Fűtés szerelése 👨🏽‍🔧",
  },
  {
    src: "/img/munkaink/vizgazfutes.webp",
    title: "Víz gáz fűtés szerelés és duguláselhárítás. 👨‍🔧",
  },
  {
    src: "/img/munkaink/vizgazfutes2.webp",
    title: "Víz gáz fűtés szerelés és duguláselhárítás. 👨‍🔧",
  },
  {
    src: "/img/munkaink/vizgazfutes3.webp",
    title: "Víz gáz fűtés szerelés és duguláselhárítás. 👨‍🔧",
  },
  {
    src: "/img/munkaink/hokozpont.webp",
    title: "Hőközpont építése szalmabálás kazánnal. 👨‍🔧",
  },
  {
    src: "/img/munkaink/hokozpont2.webp",
    title: "Hőközpont építése szalmabálás kazánnal. 👨‍🔧",
  },
  {
    src: "/img/munkaink/hokozpont3.webp",
    title: "Hőközpont építése szalmabálás kazánnal. 👨‍🔧",
  },
  {
    src: "/img/munkaink/hokozpont4.webp",
    title: "Hőközpont építése szalmabálás kazánnal. 👨‍🔧",
  },
  {
    src: "/img/munkaink/matyasdomb.webp",
    title: "Mátyásdomb fűtés szerelés 👨‍🔧",
  },
  {
    src: "/img/munkaink/matyasdomb2.webp",
    title: "Mátyásdomb fűtés szerelés 👨‍🔧",
  },
  {
    src: "/img/munkaink/matyasdomb3.webp",
    title: "Mátyásdomb fűtés szerelés 👨‍🔧",
  },
  {
    src: "/img/munkaink/matyasdomb4.webp",
    title: "Mátyásdomb fűtés szerelés 👨‍🔧",
  },
  {
    src: "/img/munkaink/furdo_feluitas4.webp",
    title:
      "Fürdőszoba felújítás: víz és csatorna vezeték, szerelvények fel helyezése. 👩‍🔧",
  },
  {
    src: "/img/munkaink/furdo_feluitas.webp",
    title:
      "Fürdőszoba felújítás: víz és csatorna vezeték, szerelvények fel helyezése. 👩‍🔧",
  },
  {
    src: "/img/munkaink/furdo_feluitas3.webp",
    title:
      "Fürdőszoba felújítás: víz és csatorna vezeték, szerelvények fel helyezése. 👩‍🔧",
  },
  {
    src: "/img/munkaink/furdo_feluitas2.webp",
    title:
      "Fürdőszoba felújítás: víz és csatorna vezeték, szerelvények fel helyezése. 👩‍🔧",
  },
]);

const galleryImages3 = ref([
  {
    src: "/img/munkaink/csaladihazpadlofutes_rendszerlemez.webp",
    title:
      "Családi ház padlófűtés szerelése, rendszer lemez használatával!  👨🏽‍🔧",
  },
  {
    src: "/img/munkaink/csaladihazpadlofutes_rendszerlemez2.webp",
    title:
      "Családi ház padlófűtés szerelése, rendszer lemez használatával!  👨🏽‍🔧",
  },
  {
    src: "/img/munkaink/csaladihazpadlofutes_rendszerlemez3.webp",
    title:
      "Családi ház padlófűtés szerelése, rendszer lemez használatával!  👨🏽‍🔧",
  },
  {
    src: "/img/munkaink/csaladihazpadlofutes_rendszerlemez4.webp",
    title:
      "Családi ház padlófűtés szerelése, rendszer lemez használatával!  👨🏽‍🔧",
  },
]);
</script>

<template>
  <main class="">
    <section class="mt-32">
      <div class="container px-4 lg:max-w-4xl xl:max-w-6xl mx-auto flex flex-col items-center relative h-full gap-8">
        <div class="flex justify-end w-full">
          <article class="w-auto text-right" data-aos="fade-up" data-aos-duration="700" data-aos-offset="100"
            data-aos-delay="50">
            <h2 class="h2 text-left -ml-5">Munkáink</h2>
            <h3 class="text-2xl lg:text-3xl font-bvpLight">
              Tervezés, kivitelezés
            </h3>
            <h4 class="text-xl lg:text-2xl font-bvpLight">
              Beüzemelés, felújítás
            </h4>
            <h5 class="text-lg lg:text-xl font-bvpMedium">
              Karbantartás, csere
            </h5>
          </article>
        </div>
      </div>
    </section>
    <section class="py-10 px-4">
      <div class="container mx-auto my-8">
        <h3 class="h3 mb-10 text-center" data-aos="fade-up" data-aos-duration="700" data-aos-offset="50"
          data-aos-delay="100">
          Három szintes családi ház padlófűtése. 👨🏽‍🔧
        </h3>
        <CallToAction />
        <LightBox :imgs="galleryImages1" :startIndex="2" />
        <h3 class="h3 my-10 text-center" data-aos="fade-up" data-aos-duration="700" data-aos-offset="50"
          data-aos-delay="100">
          Természetes folyamatokban kínálunk szolgáltatásokat, Víz-, gáz-, és
          fűtésszerelés, továbbá a duguláselhárítás terén is tevékenykedünk. 👨🏽‍🔧
        </h3>
        <CallToAction />
        <LightBox :imgs="galleryImages2" :startIndex="2" />
        <h3 class="h3 my-10 text-center" data-aos="fade-up" data-aos-duration="700" data-aos-offset="50"
          data-aos-delay="100">
          Családi ház padlófűtés szerelése, rendszer lemez használatával! 👨🏽‍🔧
        </h3>
        <CallToAction />
        <LightBox :imgs="galleryImages3" :startIndex="2" />
      </div>
      <div class="flex justify-center mt-10" data-aos="fade-up" data-aos-duration="700" data-aos-offset="50"
        data-aos-delay="50">
        <NuxtLink to="/arajanlat" class="btn btn-primary px-10">
          Kérjen árajánlatot most!
        </NuxtLink>
      </div>
    </section>
  </main>
</template>
