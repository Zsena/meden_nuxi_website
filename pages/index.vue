<script setup>
import { ref } from "vue";
import { Icon } from "@iconify/vue";

const title = ref("Főoldal");

const galleryImages = ref([
  {
    src: "/img/ourworks/csaladihazpadlofutes_rendszerlemez2.webp",
    title: "Családi ház padlófűtés szerelése, rendszer lemez használatával! 👨🏽‍🔧",
  },
  {
    src: "/img/ourworks/csaladihazpadlofutes_rendszerlemez3.webp",
    title: "Családi ház padlófűtés szerelése, rendszer lemez használatával! 👨🏽‍🔧",
  },
  {
    src: "/img/ourworks/csaladihazpadlofutes.webp",
    title: "Három szintes családi ház padlófűtése. 👨🏽‍🔧",
  },
  {
    src: "/img/ourworks/padlofutes7.webp",
    title: "Három szintes családi ház padlófűtése. 👨🏽‍🔧",
  },
  {
    src: "/img/ourworks/padlofutes.webp",
    title: "Három szintes családi ház padlófűtése. 👨🏽‍🔧",
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
    src: "/img/ourworks/futesszereles.webp",
    title: "Fűtés szerelése 👨🏽‍🔧",
  },
  {
    src: "/img/ourworks/futesszereles2.webp",
    title: "Fűtés szerelése 👨🏽‍🔧",
  },
  {
    src: "/img/ourworks/vizgazfutes.webp",
    title: "Víz gáz fűtés szerelés és duguláselhárítás. 👨‍🔧",
  },
  {
    src: "/img/ourworks/hokozpont4.webp",
    title: "Hőközpont építése szalmabálás kazánnal. 👨‍🔧",
  },
  {
    src: "/img/ourworks/matyasdomb2.webp",
    title: "Mátyásdomb fűtés szerelés 👨‍🔧",
  },
]);
</script>

<template>
  <main class="">
    <Head>
      <Title>{{ title }}</Title>
      <Meta name="description" :content="title" />
    </Head>
    <BaseHero />
    <section class="min-h-[700px] container mx-auto px-4 pt-6" id="celjaink">
      <div class="flex flex-col lg:flex-row gap-8 xl:gap-40 my-16 xl:my-28">
        <LargeCard
          title="Céljaink"
          description="
A fő célunk, hogy ügyfeleink teljes megelégedéssel térjenek haza, és egy biztonságos, kényelmes otthonban vagy munkahelyen élvezhessék mindennapjaikat."
          description2="Ezt a célt kiváló szaktudással, megbízhatósággal és kiváló minőségű szolgáltatásokkal érjük el. Csapatunk minden egyes tagja magas szinten képzett szakember, aki elkötelezett amellett, hogy tudását és szakmai készségeit folyamatosan fejlessze, így biztosítva, hogy a legfrissebb információkkal és technológiákkal állhassanak ügyfeleink rendelkezésére."
          bgClass="card-blue"
          textBaseColor="text-white"
          iconfyIcon="gg:hello"
          image="/img/headers/header6.webp"
          alt="Ez egy alt"
          data-aos="fade-up"
          data-aos-duration="700"
          data-aos-offset="100"
          data-aos-delay="50"
        />
        <article>
          <p
            class="pb-6"
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-offset="100"
            data-aos-delay="100"
          >
            Törekvésünk, hogy az újítások és a kiváló minőség vezérelje
            tevékenységünket.
          </p>
          <p
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-offset="50"
            data-aos-delay="150"
          >
            így biztosítva, hogy ügyfeleink számára a lehető legjobb
            szolgáltatást nyújthassunk.
          </p>
          <div
            class="py-6"
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-offset="50"
            data-aos-delay="200"
          >
            <SmallCard
              urlTitle="#víziónk"
              bgClass="bg-purple-grad/10"
              description="Elkötelezettek vagyunk amellett, hogy folyamatosan fejlesszük magunkat"
              textBaseColor="text-black-base"
              textColor="text-blue-dark hover:text-blue-light transition-all duration-500 ease-out"
              url="/about"
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-offset="50"
              data-aos-delay="250"
            />
          </div>
          <p
            class="pb-6"
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-offset="50"
            data-aos-delay="300"
          >
            A minőségi munkavégzés tevékenységünk alapköve
          </p>
          <p
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-offset="50"
            data-aos-delay="350"
          >
            Az a szándékunk, hogy megbízhatóságunkkal és széleskörű
            szaktudásunkkal hosszantartó ügyfél-elégedettséget biztosítsunk.
          </p>
          <p
            class="pb-6"
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-offset="50"
            data-aos-delay="400"
          >
            Keress minket
          </p>

          <NuxtLink
            to="tel:+36708824217"
            class="h5 flex items-center w-fit"
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-offset="50"
            data-aos-delay="400"
          >
            <Icon
              icon="material-symbols-light:send-to-mobile-outline"
              class="w-10 h-10"
            />
            <span class="ml-2">+36 70 882 4217</span>
          </NuxtLink>
        </article>
      </div>
    </section>
    <section class="py-10 px-4">
      <div class="container mx-auto my-8">
        <h2
          class="h2 my-10"
          data-aos="fade-up"
          data-aos-duration="700"
          data-aos-offset="100"
          data-aos-delay="50"
        >
          Munkáink
        </h2>
        <h3
          class="h3 mb-10"
          data-aos="fade-up"
          data-aos-duration="700"
          data-aos-offset="50"
          data-aos-delay="100"
        >
          Természetes folyamatokban kínálunk szolgáltatásokat, Víz-, gáz-, és
          fűtésszerelés, továbbá a duguláselhárítás terén is tevékenykedünk. 👨🏽‍🔧
        </h3>
        <CallToAction />
        <LightBox :imgs="galleryImages" :startIndex="2" />
      </div>
    </section>
  </main>
</template>
