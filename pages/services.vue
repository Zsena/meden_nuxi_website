<script setup lang="ts">
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
    <section class="py-10 px-4" id="szolgaltatasok">
      <div
        class="container mx-auto flex flex-col items-center relative h-[650vw] xs:h-[465vw] sm:h-[255vh] md:h-[355vh] lg:h-full"
      >
        <article class="absolute lg:right-[1rem]">
          <h2 class="h2 md:pt-10">Szolgáltatásaink</h2>
          <h3
            class="absolute top-[3rem] md:top-[6rem] left-1/2 -translate-x-1/2 whitespace-nowrap lg:left-[10rem]"
          >
            Tervezés, kivitelezés
          </h3>
          <h3
            class="absolute top-[4.5rem] md:top-[8rem] left-1/2 -translate-x-1/2 whitespace-nowrap lg:left-[13rem]"
          >
            Beüzemelés, felújítás
          </h3>
          <h3
            class="absolute top-[6rem] md:top-[10rem] left-1/2 -translate-x-1/2 whitespace-nowrap lg:left-[16rem]"
          >
            Karbantartás, csere
          </h3>
        </article>

        <div
          class="card-container flex flex-1 flex-col items-center lg:flex-row lg:justify-center lg:gap-[8rem] lg:ml-20 xl:gap-[20rem]"
        >
          <div
            class="card-col flex flex-1 flex-col gap-y-12 mt-[12rem] lg:justify-start lg:items-center lg:gap-y-32 lg:mt-[10rem]"
          >
            <div
              class="relative mt-28 md:mt-[10rem] lg:mt-1 w-full min-w-[326px] max-w-[480px] md:min-w-[700px] lg:min-w-[350px] lg:max-w-[420px]"
            >
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
              <NuxtImg
                src="../public/img/1.svg"
                class="absolute left-1/2 -translate-x-1/2 -top-[9rem] lg:translate-x-1/2 lg:-left-[10.5rem] lg:-top-[5rem]"
              />
            </div>
            <div
              class="absolute w-full min-w-[326px] max-w-[480px] md:min-w-[700px] lg:min-w-[350px] lg:max-w-[420px] top-[95rem] xs:top-[90rem] sm:top-[91rem] md:top-[94rem] lg:static"
            >
              <div class="relative">
                <ImgCard
                  :title="CardData[2].title"
                  :list1="CardData[2].list1"
                  :list2="CardData[2].list2"
                  :list3="CardData[2].list3"
                  :list4="CardData[2].list4"
                  :bgClass="CardData[2].bgColor"
                  :url="CardData[2].url"
                  class="mb-[6rem] z-10"
                />
                <NuxtImg
                  src="../public/img/3.svg"
                  class="absolute left-1/2 -translate-x-1/2 -top-[9rem] lg:translate-x-1/2 lg:-left-[11.5rem] lg:-top-[5rem]"
                />
              </div>
            </div>
          </div>
          <div
            class="card-col flex flex-1 flex-col justify-start items-center gap-y-32 mt-[30rem]"
          >
            <div
              class="absolute w-full min-w-[326px] max-w-[480px] md:min-w-[700px] lg:min-w-[350px] lg:max-w-[420px] top-[58rem] xs:top-[55rem] sm:top-[55rem] md:top-[58rem] lg:static"
            >
              <div class="relative">
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
                <NuxtImg
                  src="../public/img/2.svg"
                  class="absolute left-1/2 -translate-x-1/2 -top-[9rem] lg:translate-x-1/2 lg:-left-[12rem] lg:-top-[5rem]"
                />
              </div>
            </div>
            <div
              class="absolute w-full min-w-[326px] max-w-[480px] md:min-w-[700px] lg:min-w-[350px] lg:max-w-[420px] top-[131rem] xs:top-[125rem] sm:top-[127rem] md:top-[130rem] lg:static"
            >
              <div class="relative">
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
                <NuxtImg
                  src="../public/img/4.svg"
                  class="absolute left-1/2 -translate-x-1/2 -top-[9rem] lg:translate-x-1/2 lg:-left-[12rem] lg:-top-[5rem]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="py-10 px-4">
      <div class="container mx-auto my-8">
        <h2 class="h2 py-10">Munkáink</h2>
        <LightBox />
      </div>
    </section>
  </main>
</template>
