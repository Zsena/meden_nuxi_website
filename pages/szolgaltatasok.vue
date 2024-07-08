<script setup lang="ts">
import NumberFour from "~/components/svg/NumberFour.vue";
import NumberOne from "~/components/svg/NumberOne.vue";
import NumberThree from "~/components/svg/NumberThree.vue";
import NumberTwo from "~/components/svg/NumberTwo.vue";
import { useRoute } from 'vue-router';
const route = useRoute();
useHead(() => ({
  title: "Mé-den épületgépészet - Szolgáltatásaink",
  meta: [
    {
      hid: "description",
      name: "description",
      content:
        "Tekintse meg szolgáltatásainkat! Vállalkozásunk széleskörűen foglalkozik Víz, Gáz és Fűtés szereléssel, gépi és magasnyomású mosással, duguláselhárítással, valamint gépi, vegyszeres fűtésrendszer tisztítással.",
    },
    {
      hid: "og:title",
      property: "og:title",
      content: "Mé-den épületgépészet - Szolgáltatásaink",
    },
    {
      hid: "og:description",
      property: "og:description",
      content:
        "Tekintse meg szolgáltatásainkat! Vállalkozásunk széleskörűen foglalkozik Víz, Gáz és Fűtés szereléssel, gépi és magasnyomású mosással, duguláselhárítással, valamint gépi, vegyszeres fűtésrendszer tisztítással.",
    },
    { hid: "og:image", property: "og:image", content: "https://medenepuletgepesz.hu/img/01water.webp" },
    { hid: "og:url", property: "og:url", content: "https://medenepuletgepesz.hu/szolgaltatasok" },
  ],
  link: [
    { rel: 'canonical', href: 'https://medenepuletgepesz.hu' + route.path }
  ],
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "http://schema.org",
        "@type": "Service",
        name: "Mé-den épületgépészet - Szolgáltatásaink",
        description:
          "Tekintse meg szolgáltatásainkat! Vállalkozásunk széleskörűen foglalkozik Víz, Gáz és Fűtés szereléssel, gépi és magasnyomású mosással, duguláselhárítással, valamint gépi, vegyszeres fűtésrendszer tisztítással.",
        image: "https://medenepuletgepesz.hu/img/01water.webp",
      }),
    },
  ],
}));

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
    <SliderHero />
    <section class="my-32">
      <div class="container px-4 lg:max-w-4xl xl:max-w-6xl mx-auto flex flex-col items-center relative h-full gap-8">
        <div class="flex justify-end w-full">
          <article class="w-auto text-right" data-aos="fade-up" data-aos-duration="700" data-aos-offset="100"
            data-aos-delay="50">
            <h2 class="h2">Szolgáltatásaink</h2>
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
        <div class="flex flex-col md:flex-row justify-between w-full gap-8 mt-10">
          <div class="mt-20 lg:flex relative" data-aos="fade-up" data-aos-duration="700" data-aos-offset="100"
            data-aos-delay="50">
            <ImgCard :title="CardData[0].title" :list1="CardData[0].list1" :list2="CardData[0].list2"
              :list3="CardData[0].list3" :list4="CardData[0].list4" :bgClass="CardData[0].bgColor"
              :url="CardData[0].url" class="z-10" />
            <NumberOne class="absolute -ml-[72px] lg:ml-0 -top-24 inset-1/2 lg:-left-20" />
          </div>

          <div class="mt-20 lg:flex lg:mt-[35rem] relative" data-aos="fade-up" data-aos-duration="700"
            data-aos-offset="100" data-aos-delay="100">
            <ImgCard :title="CardData[2].title" :list1="CardData[2].list1" :list2="CardData[2].list2"
              :list3="CardData[2].list3" :list4="CardData[2].list4" :bgClass="CardData[2].bgColor"
              :url="CardData[2].url" class="z-10" />
            <NumberTwo class="absolute -ml-[72px] lg:ml-0 -top-24 inset-1/2 lg:-left-20" />
          </div>
        </div>
        <div class="flex flex-col md:flex-row justify-between w-full gap-8">
          <div class="mt-20 lg:flex relative" data-aos="fade-up" data-aos-duration="700" data-aos-offset="100"
            data-aos-delay="150">
            <ImgCard :title="CardData[1].title" :list1="CardData[1].list1" :list2="CardData[1].list2"
              :list3="CardData[1].list3" :list4="CardData[1].list4" :bgClass="CardData[1].bgColor"
              :url="CardData[1].url" class="z-10" />
            <NumberThree class="absolute -ml-[72px] lg:ml-0 -top-24 inset-1/2 lg:-left-20" />
          </div>

          <div class="mt-20 lg:flex lg:mt-[35rem] relative" data-aos="fade-up" data-aos-duration="700"
            data-aos-offset="100" data-aos-delay="200">
            <ImgCard :title="CardData[3].title" :list1="CardData[3].list1" :list2="CardData[3].list2"
              :list3="CardData[3].list3" :list4="CardData[3].list4" :bgClass="CardData[3].bgColor"
              :url="CardData[3].url" class="z-10" />
            <NumberFour class="absolute -ml-[72px] lg:ml-0 -top-24 inset-1/2 lg:-left-20" />
          </div>
        </div>
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
