<script setup>
import { ref } from "vue";
import { Icon } from '@iconify/vue';

const title = ref("Főoldal");

const galleryImages = ref([
  { src: "/img/ourworks/padlofutes.webp", title: "Három szintes családi ház padlófűtése. 👨🏽‍🔧" },
  { src: "/img/ourworks/padlofutes2.webp", title: "Három szintes családi ház padlófűtése. 👨🏽‍🔧" },
  { src: "/img/ourworks/padlofutes3.webp", title: "Három szintes családi ház padlófűtése. 👨🏽‍🔧" },
  { src: "/img/ourworks/padlofutes4.webp", title: "Három szintes családi ház padlófűtése. 👨🏽‍🔧" },
  { src: "/img/ourworks/padlofutes7.webp", title: "Három szintes családi ház padlófűtése. 👨🏽‍🔧" },
  { src: "/img/ourworks/padlofutes8.webp", title: "Három szintes családi ház padlófűtése. 👨🏽‍🔧" },
  { src: "/img/ourworks/padlofutes.webp",  title: "Három szintes családi ház padlófűtése. 👨🏽‍🔧" },
  { src: "/img/ourworks/padlofutes2.webp", title: "Három szintes családi ház padlófűtése. 👨🏽‍🔧" },
  { src: "/img/ourworks/padlofutes3.webp", title: "Három szintes családi ház padlófűtése. 👨🏽‍🔧" },
  { src: "/img/ourworks/padlofutes4.webp", title: "Három szintes családi ház padlófűtése. 👨🏽‍🔧" },
  { src: "/img/ourworks/padlofutes7.webp", title: "Három szintes családi ház padlófűtése. 👨🏽‍🔧" },
  { src: "/img/ourworks/padlofutes8.webp", title: "Három szintes családi ház padlófűtése. 👨🏽‍🔧" },
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
        />
        <article>
          <p class="pb-6">
            Törekvésünk, hogy az újítások és a kiváló minőség vezérelje
            tevékenységünket.
          </p>
          <p>
            így biztosítva, hogy ügyfeleink számára a lehető legjobb
            szolgáltatást nyújthassunk.
          </p>
          <div class="py-6">
            <SmallCard
              urlTitle="#víziónk"
              bgClass="bg-purple-grad/10"
              description="Elkötelezettek vagyunk amellett, hogy folyamatosan fejlesszük magunkat"
              textBaseColor="text-black-base"
              textColor="text-blue-dark hover:text-blue-light transition-all duration-500 ease-out"
              url="/about"
            />
          </div>
          <p class="pb-6">A minőségi munkavégzés tevékenységünk alapköve</p>
          <p>
            Az a szándékunk, hogy megbízhatóságunkkal és széleskörű
            szaktudásunkkal hosszantartó ügyfél-elégedettséget biztosítsunk.
          </p>
          <p class="pb-6">Keress minket</p>

          <NuxtLink to="tel:+36708824217" class="h5 flex items-center w-fit">
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
        <h2 class="h2 my-10">Munkáink</h2>
        <h3 class="h3 mb-10">Három szintes családi ház padlófűtése. 👨🏽‍🔧</h3>
        <LightBox :imgs="galleryImages" :startIndex="2" />
      </div>
    </section>
  </main>
</template>