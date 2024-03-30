<script setup lang="ts">
import { Icon } from "@iconify/vue";

useHead(() => ({
  title: "Mé-den épületgépészet - Árajánlatkérés",
  meta: [
    {
      hid: "description",
      name: "description",
      content:
        "Kérjen árajánlatot szolgáltatásainkra! Vállalkozásunk készséggel áll rendelkezésére Víz, Gáz és Fűtés szerelésben, gépi és magasnyomású mosásban, duguláselhárításban, valamint gépi, vegyszeres fűtésrendszer tisztításban.",
    },
    {
      hid: "og:title",
      property: "og:title",
      content: "Mé-den épületgépészet - Árajánlatkérés",
    },
    {
      hid: "og:description",
      property: "og:description",
      content:
        "Kérjen árajánlatot szolgáltatásainkra! Vállalkozásunk készséggel áll rendelkezésére Víz, Gáz és Fűtés szerelésben, gépi és magasnyomású mosásban, duguláselhárításban, valamint gépi, vegyszeres fűtésrendszer tisztításban.",
    },
    { hid: "og:image", property: "og:image", content: "/img/05engineer.webp" },
    { hid: "og:url", property: "og:url", content: "/arajanlat" },
  ],
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "http://schema.org",
        "@type": "Service",
        name: "Mé-den épületgépészet - Árajánlatkérés",
        description:
          "Kérjen árajánlatot szolgáltatásainkra! Vállalkozásunk készséggel áll rendelkezésére Víz, Gáz és Fűtés szerelésben, gépi és magasnyomású mosásban, duguláselhárításban, valamint gépi, vegyszeres fűtésrendszer tisztításban.",
        image: "/img/05engineer.webp",
      }),
    },
  ],
}));
</script>

<template>
  <main class="">
    <section class="min-h-[700px] container mx-auto px-4 xl:my-28">
      <h1 class="h1" data-aos="fade-up" data-aos-duration="700">
        Kérjen árajánlatot
      </h1>
      <div class="flex flex-col lg:flex-row gap-8 xl:gap-40 my-16 xl:my-28">
        <LargeCard
          title="Kapcsolat"
          description="Vedd fel velünk a kapcsolatot"
          bgClass="card-purple"
          textBaseColor="text-white"
          iconfyIcon="gg:hello"
          image="/img/headers/header4.webp"
          alt="Kapcsolat"
          data-aos="fade-up"
          data-aos-duration="700"
        />
        <article>
          <p class="pb-6" data-aos="fade-up" data-aos-duration="700">
            Törekvésünk, hogy az újítások és a kiváló minőség vezérelje
            tevékenységünket.
          </p>
          <p data-aos="fade-up" data-aos-duration="700">
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
              url="/cegunk"
              data-aos="fade-up"
              data-aos-duration="700"
            />
          </div>
          <div
            class="pb-6 flex items-center flex-wrap"
            data-aos="fade-up"
            data-aos-duration="700"
          >
            <p class="pb-0 mt-4">
              A minőségi munkavégzés tevékenységünk alapköve
            </p>
            <div
              class="flex justify-center mt-4"
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-offset="50"
              data-aos-delay="50"
            >
              <NuxtLink to="/garancia" class="btn btn-primary px-10 ml-2">
                Garanciális feltételek
              </NuxtLink>
            </div>
          </div>
          <p data-aos="fade-up" data-aos-duration="700">
            Az a szándékunk, hogy megbízhatóságunkkal és széleskörű
            szaktudásunkkal hosszantartó ügyfél-elégedettséget biztosítsunk.
          </p>
          <p class="pb-6" data-aos="fade-up" data-aos-duration="700">
            Keressen minket
          </p>

          <NuxtLink
            to="tel:+36708824217"
            class="h5 flex items-center w-fit"
            data-aos="fade-up"
            data-aos-duration="700"
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
  </main>
</template>
