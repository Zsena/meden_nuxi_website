<script setup lang="ts">
import { Icon } from "@iconify/vue";
const title = ref("Kapcsolat");
</script>

<template>
  <main class="">
    <Head>
      <Title>{{ title }}</Title>
      <Meta name="description" :content="title" />
    </Head>
    <section class="min-h-[700px] container mx-auto px-4">
      <div
        class="flex flex-col lg:flex-row gap-8 xl:gap-40 my-16 xl:my-28 relative top-8"
      >
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
          data-aos-offset="100"
          data-aos-delay="50"
        />
        <article>
          <p
            class="pb-6"
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-offset="100"
            data-aos-delay="50"
          >
            Törekvésünk, hogy az újítások és a kiváló minőség vezérelje
            tevékenységünket.
          </p>
          <p
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-offset="100"
            data-aos-delay="100"
          >
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
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-offset="100"
              data-aos-delay="150"
            />
          </div>
          <p
            class="pb-6"
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-offset="100"
            data-aos-delay="200"
          >
            A minőségi munkavégzés tevékenységünk alapköve
          </p>
          <p
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-offset="100"
            data-aos-delay="250"
          >
            Az a szándékunk, hogy megbízhatóságunkkal és széleskörű
            szaktudásunkkal hosszantartó ügyfél-elégedettséget biztosítsunk.
          </p>
          <p
            class="pb-6"
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-offset="100"
            data-aos-delay="300"
          >
            Keress minket
          </p>

          <NuxtLink
            to="tel:+36708824217"
            class="h5 flex items-center w-fit"
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-offset="100"
            data-aos-delay="350"
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
