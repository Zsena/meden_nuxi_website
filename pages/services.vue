<script setup lang="ts">
import NumberFour from "~/components/svg/NumberFour.vue";
import NumberOne from "~/components/svg/NumberOne.vue";
import NumberThree from "~/components/svg/NumberThree.vue";
import NumberTwo from "~/components/svg/NumberTwo.vue";

const title = ref("Szolgáltatásaink");

const CardData = [
  {
    id: "1",
    title: "Víz-, és gáz szerelés",
    list1: "Víz,-és gázvezeték hálózatok kiépítése és felújítása",
    list2: "Víz- és gázvezeték-szivárgások javítása",
    list3: "Vízvezeték-szerelvények beszerelése, cseréje",
    list4: "Gázkészülékek javítása, karbantartása, cseréje",
    bgColor: "card-black-opacity",
    url: "/img/service1.webp",
  },
  {
    id: "2",
    title: "Solar, klíma, hőszivattyú",
    list1: "Rendszer kivitelezés, beüzemelés, oktatás",
    list2: "Karbantartás, felújítás ",
    list3: "Energiahálózat kiépítés",
    list4: "Energetikai felülvizsgálat és tanácsadás",
    bgColor: "card-blue-opacity",
    url: "/img/service2.webp",
  },
  {
    id: "3",
    title: "Légtechnikai rendszerek",
    list1: "Ventilációs megoldások tervezése és kivitelezése",
    list2: "Korszerűsítés és javítás",
    list3: "Szellőztetés, légellátás ",
    list4: "Légállapot kialakítás és szabályozás",
    bgColor: "card-purple-opacity",
    url: "/img/service3.webp",
  },
  {
    id: "4",
    title: "Fűtési rendszerek",
    list1: "Fűtési rendszerek tervezése, kiépítése",
    list2: "Intelligens fűtési vezérlőrendszerek beépítése",
    list3: "Felületfűtési megoldások",
    list4: "Fűtés korszerűsítés",
    bgColor: "card-gray-opacity",
    url: "/img/service4.webp",
  },
];
</script>

<template>
  <main class="">
    <Head>
      <Title>{{ title }}</Title>
      <Meta name="description" :content="title" />
    </Head>
    <SliderHero />
    <section class="mt-32">
      <div class="container mx-auto flex flex-col items-center relative h-full gap-16">
        <div class="flex justify-end w-full">
          <article class="w-auto text-right">
            <h2 class="h2">Szolgáltatásaink</h2>
            <h3 class="h3">Tervezés, kivitelezés</h3>
            <h4 class="h4">Beüzemelés, felújítás</h4>
            <h5 class="h5">Karbantartás, csere</h5>
          </article>
        </div>
        <div class="flex flex-col md:flex-row justify-between w-full gap-16">
          <div class="flex flex-row-reverse relative">
            <ImgCard
              :title="CardData[0].title"
              :list1="CardData[0].list1"
              :list2="CardData[0].list2"
              :list3="CardData[0].list3"
              :list4="CardData[0].list4"
              :bgClass="CardData[0].bgColor"
              :url="CardData[0].url"
              class="z-10"
            />
            <NumberOne class="absolute top-0 left-10" />
          </div>

          <div class="flex md:mt-[35rem] relative">
            <ImgCard
              :title="CardData[2].title"
              :list1="CardData[2].list1"
              :list2="CardData[2].list2"
              :list3="CardData[2].list3"
              :list4="CardData[2].list4"
              :bgClass="CardData[2].bgColor"
              :url="CardData[2].url"
              class="z-10"
            />
            <NumberTwo class="absolute top-0 right-10" />
          </div>
        </div>
        <div class="flex flex-col md:flex-row justify-between w-full gap-16">
          <div class="flex flex-row-reverse relative">
            <ImgCard
              :title="CardData[1].title"
              :list1="CardData[1].list1"
              :list2="CardData[1].list2"
              :list3="CardData[1].list3"
              :list4="CardData[1].list4"
              :bgClass="CardData[1].bgColor"
              :url="CardData[1].url"
              class="z-10"
            />
            <NumberThree class="absolute top-0 left-10" />
          </div>

          <div class="flex md:mt-[35rem] relative">
            <ImgCard
              :title="CardData[3].title"
              :list1="CardData[3].list1"
              :list2="CardData[3].list2"
              :list3="CardData[3].list3"
              :list4="CardData[3].list4"
              :bgClass="CardData[3].bgColor"
              :url="CardData[3].url"
              class="z-10"
            />
            <NumberFour class="absolute top-0 right-10" />
          </div>
        </div>
      </div>
    </section>
    <section class="py-10 px-4">
      <div class="container mx-auto my-8">
        <h2 class="h2 py-10">Munkáink</h2>
        <!-- <LightBox /> -->
      </div>
    </section>
  </main>
</template>
