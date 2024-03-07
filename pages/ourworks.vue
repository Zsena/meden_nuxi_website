<script setup lang="ts">
import CallToAction from '~/components/CallToAction.vue';

const title = ref("Munkáink");
const galleryImages1 = ref([
  {
    src: "/img/ourworks/csaladihazpadlofutes.webp",
    title: "Három szintes családi ház padlófűtése. 👨🏽‍🔧",
  },
  {
    src: "/img/ourworks/csaladihazpadlofutes2.webp",
    title: "Három szintes családi ház padlófűtése.👨🏽‍🔧",
  },
  {
    src: "/img/ourworks/csaladihazpadlofutes3.webp",
    title: "Három szintes családi ház padlófűtése. 👨🏽‍🔧",
  },
  {
    src: "/img/ourworks/padlofutes4.webp",
    title: "Három szintes családi ház padlófűtése. 👨🏽‍🔧",
  },
  {
    src: "/img/ourworks/padlofutes7.webp",
    title: "Három szintes családi ház padlófűtése. 👨🏽‍🔧",
  },
  {
    src: "img/ourworks/padlofutes8.webp",
    title: "Három szintes családi ház padlófűtése. 👨🏽‍🔧",
  },
  {
    src: "/img/ourworks/csaladihazpadlofutes.webp",
    title: "Három szintes családi ház padlófűtése. 👨🏽‍🔧",
  },
  {
    src: "/img/ourworks/csaladihazpadlofutes.webp",
    title: "Három szintes családi ház padlófűtése. 👨🏽‍🔧",
  },
]);

const galleryImages2 = ref([
  {
    src: "/img/ourworks/futesszereles.webp",
    title: "Fűtés szerelése 👨🏽‍🔧",
  },
  {
    src: "/img/ourworks/futesszereles2.webp",
    title: "Fűtés szerelése 👨🏽‍🔧",
  },
  {
    src: "/img/ourworks/futesszereles3.webp",
    title: "Fűtés szerelése 👨🏽‍🔧",
  },
  {
    src: "/img/ourworks/vizgazfutes.webp",
    title: "Víz gáz fűtés szerelés és duguláselhárítás. 👨‍🔧",
  },
  {
    src: "/img/ourworks/vizgazfutes2.webp",
    title: "Víz gáz fűtés szerelés és duguláselhárítás. 👨‍🔧",
  },
  {
    src: "/img/ourworks/vizgazfutes3.webp",
    title: "Víz gáz fűtés szerelés és duguláselhárítás. 👨‍🔧",
  },
  {
    src: "/img/ourworks/hokozpont.webp",
    title: "Hőközpont építése szalmabálás kazánnal. 👨‍🔧",
  },
  {
    src: "/img/ourworks/hokozpont2.webp",
    title: "Hőközpont építése szalmabálás kazánnal. 👨‍🔧",
  },
  {
    src: "/img/ourworks/hokozpont3.webp",
    title: "Hőközpont építése szalmabálás kazánnal. 👨‍🔧",
  },
  {
    src: "/img/ourworks/hokozpont4.webp",
    title: "Hőközpont építése szalmabálás kazánnal. 👨‍🔧",
  },
  {
    src: "/img/ourworks/matyasdomb.webp",
    title: "Mátyásdomb fűtés szerelés 👨‍🔧",
  },
  {
    src: "/img/ourworks/matyasdomb2.webp",
    title: "Mátyásdomb fűtés szerelés 👨‍🔧",
  },
  {
    src: "/img/ourworks/matyasdomb3.webp",
    title: "Mátyásdomb fűtés szerelés 👨‍🔧",
  },
  {
    src: "/img/ourworks/matyasdomb4.webp",
    title: "Mátyásdomb fűtés szerelés 👨‍🔧",
  },
  {
    src: "/img/ourworks/furdo_feluitas4.webp",
    title:
      "Fürdőszoba felújítás: víz és csatorna vezeték, szerelvények fel helyezése. 👩‍🔧",
  },
  {
    src: "/img/ourworks/furdo_feluitas.webp",
    title:
      "Fürdőszoba felújítás: víz és csatorna vezeték, szerelvények fel helyezése. 👩‍🔧",
  },
  {
    src: "/img/ourworks/furdo_feluitas3.webp",
    title:
      "Fürdőszoba felújítás: víz és csatorna vezeték, szerelvények fel helyezése. 👩‍🔧",
  },
  {
    src: "/img/ourworks/furdo_feluitas2.webp",
    title:
      "Fürdőszoba felújítás: víz és csatorna vezeték, szerelvények fel helyezése. 👩‍🔧",
  },
]);

const galleryImages3 = ref([
  {
    src: "/img/ourworks/csaladihazpadlofutes_rendszerlemez.webp",
    title:
      "Családi ház padlófűtés szerelése, rendszer lemez használatával!  👨🏽‍🔧",
  },
  {
    src: "/img/ourworks/csaladihazpadlofutes_rendszerlemez2.webp",
    title:
      "Családi ház padlófűtés szerelése, rendszer lemez használatával!  👨🏽‍🔧",
  },
  {
    src: "/img/ourworks/csaladihazpadlofutes_rendszerlemez3.webp",
    title:
      "Családi ház padlófűtés szerelése, rendszer lemez használatával!  👨🏽‍🔧",
  },
  {
    src: "/img/ourworks/csaladihazpadlofutes_rendszerlemez4.webp",
    title:
      "Családi ház padlófűtés szerelése, rendszer lemez használatával!  👨🏽‍🔧",
  },
]);
</script>

<template>
  <main class="">
    <Head>
      <Title>{{ title }}</Title>
      <Meta name="description" :content="title" />
    </Head>
    <SliderHero />
    <section class="mt-32">
      <div
        class="container px-4 lg:max-w-4xl xl:max-w-6xl mx-auto flex flex-col items-center relative h-full gap-8"
      >
        <div class="flex justify-end w-full">
          <article class="w-auto text-right"  data-aos="fade-up"
            data-aos-duration="700"
            data-aos-offset="100"
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
        <h3
          class="h3 mb-10 text-center"
          data-aos="fade-up"
          data-aos-duration="700"
          data-aos-offset="50"
          data-aos-delay="100"
        >
          Három szintes családi ház padlófűtése. 👨🏽‍🔧
        </h3>
        <CallToAction />
        <LightBox :imgs="galleryImages1" :startIndex="2" />
        <h3
          class="h3 my-10 text-center"
          data-aos="fade-up"
          data-aos-duration="700"
          data-aos-offset="50"
          data-aos-delay="100"
        >
          Természetes folyamatokban kínálunk szolgáltatásokat, Víz-, gáz-, és
          fűtésszerelés, továbbá a duguláselhárítás terén is tevékenykedünk. 👨🏽‍🔧
        </h3>
        <CallToAction />
        <LightBox :imgs="galleryImages2" :startIndex="2" />
        <h3
          class="h3 my-10 text-center"
          data-aos="fade-up"
          data-aos-duration="700"
          data-aos-offset="50"
          data-aos-delay="100"
        >
          Családi ház padlófűtés szerelése, rendszer lemez használatával! 👨🏽‍🔧
        </h3>
        <CallToAction />
        <LightBox :imgs="galleryImages3" :startIndex="2" />
      </div>
    </section>
  </main>
</template>
