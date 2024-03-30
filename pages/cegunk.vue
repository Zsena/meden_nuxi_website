<script setup lang="ts">
import CardComponent from "~/components/CardComponent.vue";
import FloatCardComponent from "~/components/FloatCardComponent.vue";

useHead(() => ({
  title: "Mé-den épületgépészet - Cégünk",
  meta: [
    {
      hid: "description",
      name: "description",
      content:
        "Ismerje meg vállalkozásunkat! Szakembereink Víz, Gáz és Fűtés szereléssel foglalkoznak, valamint gépi és magasnyomású mosással, duguláselhárítással, valamint gépi, vegyszeres fűtésrendszer tisztítással is állnak rendelkezésére.",
    },
    {
      hid: "og:title",
      property: "og:title",
      content: "Mé-den épületgépészet - Cégünk",
    },
    {
      hid: "og:description",
      property: "og:description",
      content:
        "Ismerje meg vállalkozásunkat! Szakembereink Víz, Gáz és Fűtés szereléssel foglalkoznak, valamint gépi és magasnyomású mosással, duguláselhárítással, valamint gépi, vegyszeres fűtésrendszer tisztítással is állnak rendelkezésére.",
    },
    { hid: "og:url", property: "og:url", content: "https://medenepuletgepesz.hu/cegunk" },
  ],
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "http://schema.org",
        "@type": "Organization",
        name: "Mé-den épületgépészet - Cégünk",
        description:
          "Ismerje meg vállalkozásunkat! Szakembereink Víz, Gáz és Fűtés szereléssel foglalkoznak, valamint gépi és magasnyomású mosással, duguláselhárítással, valamint gépi, vegyszeres fűtésrendszer tisztítással is állnak rendelkezésére.",
        image: "/img/cegunk.webp",
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
    bgColor: "card-blue-opacity",
    url: "/img/01water.webp",
  },
  {
    id: "2",
    title: "Solar, klíma, hőszivattyú",
    list1: "Rendszer kivitelezés, beüzemelés, oktatás",
    list2: "Karbantartás, felújítás ",
    list3: "Energiahálózat kiépítés",
    list4: "Energetikai felülvizsgálat és tanácsadás",
    bgColor: "card-purple-opacity",
    url: "/img/02solar.webp",
  },
  {
    id: "3",
    title: "Légtechnikai rendszerek",
    list1: "Ventilációs megoldások tervezése és kivitelezése",
    list2: "Korszerűsítés és javítás",
    list3: "Szellőztetés, légellátás ",
    list4: "Légállapot kialakítás és szabályozás",
    bgColor: "card-black-opacity",
    url: "/img/03ventilation.webp",
  },
  {
    id: "4",
    title: "Fűtési rendszerek",
    list1: "Fűtési rendszerek tervezése, kiépítése",
    list2: "Intelligens fűtési vezérlőrendszerek beépítése",
    list3: "Felületfűtési megoldások",
    list4: "Fűtés korszerűsítés",
    bgColor: "card-gray-opacity",
    url: "/img/04heating.webp",
  },
  {
    id: "5",
    title: "Tervezés, menedzsment",
    list1: "Új építésű vagy felújítás alatt álló épületek gépészete",
    list2: "Lakóépületek, irodaházak, ipari épületek gépészete",
    list3: "Műszaki ellenőrzés",
    list4: "Projektmenedzsment",
    bgColor: "card-blue-opacity",
    url: "/img/05engineer.webp",
  },
];
</script>

<template>
  <main>
    <section class="mt-20">
      <div class="container mx-auto mt-24 px-4 relative">
        <div
          class="flex flex-col md:flex-row items-center gap-2 justify-between hero-grad base-card-rounded px-4 xl:px-6"
        >
          <div class="pt-6 lg:py-8 text-lg">
            <h1
              class="h1 lg:h2 2xl:h1 mb-10"
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-offset="100"
              data-aos-delay="50"
            >
              Mire számíthat tőlünk?
            </h1>

            <article class="lg:max-w-[30rem]">
              <p
                class="pt-4"
                data-aos="fade-up"
                data-aos-duration="700"
                data-aos-offset="50"
                data-aos-delay="150"
              >
                Vállaljuk a <b>lakossági és ipari létesítmények</b> gépészeti
                rendszereinek kivitelezését és karbantartását.
              </p>
              <div
                class="list-disc mt-4"
                data-aos="fade-up"
                data-aos-duration="700"
                data-aos-offset="50"
                data-aos-delay="200"
              >
                <h2 class="h4">Amikkel foglalkozunk:</h2>
                <ul class="list-disc ml-8">
                  <li>fűtéstechnika vízellátás, csatornázás</li>
                  <li>
                    gázellátás – (égéstermék-elvezetés) légtechnika, szellőzés
                  </li>
                  <li>klímatechnika</li>
                  <li>
                    A legmegfelelőbb rendszer kialakítása, megfizethető árak
                  </li>
                  <li>Szakképzett munkatársak, szakmai tanácsadás</li>
                </ul>
              </div>
            </article>
          </div>

          <div class="flex justify-center lg:justify-end">
            <NuxtImg
              src="/img/hero.webp"
              alt="whitefactory"
              class="h-screen max-h-[230px] sm:max-h-[400px] w-full base-rounded my-8 z-30 object-cover"
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-offset="100"
              data-aos-delay="50"
            />
          </div>
        </div>
      </div>
    </section>
    <section class="px-4">
      <article
        class="container mx-auto mt-8 lg:mt-20 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 xl:gap-8 justify-items-center"
      >
        <CardComponent
          title="Megbízhatóság"
          description="Elkötelezettségünk a garancia az ügyfél elégedettségre. "
          bgClass="card-black"
          textColor="text-white"
          url="/icons/megbizhatosag4.svg"
          data-aos="fade-up"
          data-aos-duration="700"
          data-aos-delay="50"
        />
        <CardComponent
          title="Szakértelem"
          description="Hozzáértő szakembereink precíz megoldásokat nyújtanak."
          bgClass="card-black"
          textColor="text-white"
          url="/icons/szakertelem2.svg"
          data-aos="fade-up"
          data-aos-duration="700"
          data-aos-delay="50"
        />
        <CardComponent
          title="Innováció"
          description="Korszerű épületgépészet megújuló energiával."
          bgClass="card-black"
          textColor="text-white"
          url="/icons/innovacio2.svg"
          data-aos="fade-up"
          data-aos-duration="700"
          data-aos-delay="50"
        />
        <CardComponent
          title="Minőség"
          description="Magas színvonalú szolgáltatásokkal állunk ügyfeleink rendelkezésére "
          bgClass="card-black"
          textColor="text-white"
          url="/icons/minoseg2.svg"
          data-aos="fade-up"
          data-aos-duration="700"
          data-aos-delay="50"
        />
      </article>
    </section>
    <section class="py-10 px-4">
      <article class="container mx-auto">
        <div
          v-for="item in CardData"
          :key="item.id"
          class="relative"
          data-aos="fade-up"
          data-aos-duration="700"
          data-aos-delay="50"
        >
          <div class="min-h-[230px] relative ml-auto w-full lg:w-[93%]">
            <NuxtImg
              :src="item.url"
              alt="building engineering"
              class="my-5 lg:my-20 min-h-[230px] object-cover base-card-rounded w-full h-full"
            />
            <div class="bg-overlay z-0 base-rounded"></div>
          </div>
          <div
            class="absolute top-0 left-0 bottom-0 right-0 w-full lg:w-fit lg:right-auto h-full flex justify-center items-center z-10"
          >
            <FloatCardComponent
              :title="item.title"
              :list1="item.list1"
              :list2="item.list2"
              :list3="item.list3"
              :list4="item.list4"
              :bgClass="item.bgColor"
            />
          </div>
        </div>
      </article>
      <div
        class="flex justify-center mt-10"
        data-aos="fade-up"
        data-aos-duration="700"
        data-aos-offset="50"
        data-aos-delay="50"
      >
        <NuxtLink to="/munkaink" class="btn btn-primary px-10">
          Tekintse meg munkáinkat
        </NuxtLink>
      </div>
    </section>
  </main>
</template>
