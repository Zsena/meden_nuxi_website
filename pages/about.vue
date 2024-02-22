<script setup lang="ts">
/* const title = ref("Rólunk"); */
import CardComponent from "~/components/CardComponent.vue";
import FloatCardComponent from "~/components/FloatCardComponent.vue";

const CardData = [
  {
    id: "1",
    title: "Víz-, és gáz szerelés",
    list1: "Víz,-és gázvezeték hálózatok kiépítése és felújítása",
    list2: "Víz- és gázvezeték-szivárgások javítása",
    list3: "Vízvezeték-szerelvények beszerelése, cseréje",
    list4: "Gázkészülékek javítása, karbantartása, cseréje",
    bgColor: "card-blue-opacity",
    url: "/img/01water.png",
  },
  {
    id: "2",
    title: "Solar, klíma, hőszivattyú",
    list1: "Rendszer kivitelezés, beüzemelés, oktatás",
    list2: "Karbantartás, felújítás ",
    list3: "Energiahálózat kiépítés",
    list4: "Energetikai felülvizsgálat és tanácsadás",
    bgColor: "card-purple-opacity",
    url: "/img/02solar.png",
  },
  {
    id: "3",
    title: "Légtechnikai rendszerek",
    list1: "Ventilációs megoldások tervezése és kivitelezése",
    list2: "Korszerűsítés és javítás",
    list3: "Szellőztetés, légellátás ",
    list4: "Légállapot kialakítás és szabályozás",
    bgColor: "card-black-opacity",
    url: "/img/03ventilation.png",
  },
  {
    id: "4",
    title: "Fűtési rendszerek",
    list1: "Fűtési rendszerek tervezése, kiépítése",
    list2: "Intelligens fűtési vezérlőrendszerek beépítése",
    list3: "Felületfűtési megoldások",
    list4: "Fűtés korszerűsítés",
    bgColor: "card-gray-opacity",
    url: "/img/04heating.png",
  },
  {
    id: "5",
    title: "Tervezés, menedzsment",
    list1: "Új építésű vagy felújítás alatt álló épületek gépészete",
    list2: "Lakóépületek, irodaházak, ipari épületek gépészete",
    list3: "Műszaki ellenőrzés",
    list4: "Projektmenedzsment",
    bgColor: "card-blue-opacity",
    url: "/img/05engineer.png",
  },
];
</script>

<template>
  <main class="">
    <section class="hero mt-20">
      <div
        class="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between mt-14 rounded-2xl relative overflow-hidden"
      >
        <div
          class="flex flex-col mx-auto md:ml-[2rem] mr-[3rem] px-2 py-8 text-lg"
        >
          <h1 class="text-h2 md:text-h1 mb-10 leading-10">
            Mire számíthat tőlünk?
          </h1>
          <p>
            Cégünk elkötelezett a <b>környezettudatos építés</b>, és a karbon
            semleges építőipari megoldások megvalósításában.
          </p>
          <p class="pt-4">
            Vállaljuk a <b>lakossági és ipari létesítmények</b> gépészeti
            rendszereinek kivitelezését és karbantartását.
          </p>
          <ol class="list-disc ml-8 pt-4">
            <li>A legkorszerűbb anyagok és technológia alkalmazása</li>
            <li>A legmegfelelőbb rendszer kialakítása</li>
            <li>Megfizethető árak</li>
            <li>Szakképzett munkatársak, szakmai tanácsadás</li>
          </ol>
        </div>
        <img
          src="/img/hero.png"
          alt="whitefactory"
          class="rounded-2xl z-30 m-8"
        />
        <div class="purple-grad"></div>
        <div class="cian-grad"></div>
      </div>
    </section>
    <section class="properties">
      <article
        class="container mx-auto mt-16 lg:mt-32 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 xl:gap-8 justify-items-center"
      >
        <CardComponent
          title="Megbízhatóság"
          description="Elkötelezettségünk a garancia az ügyfél elégedettségre. "
          backgroundColor="card-black"
          textColor="text-white"
        />
        <CardComponent
          title="Szakértelem"
          description="Hozzáértő szakembereink precíz és hatékony megoldásokat nyújtanak."
          backgroundColor="card-black"
          textColor="text-white"
        />
        <CardComponent
          title="Innováció"
          description="Korszerű épületgépészet megújuló energiával."
          backgroundColor="card-black"
          textColor="text-white"
        />
        <CardComponent
          title="Minőség"
          description="Magas színvonalú szolgáltatásokkal állunk ügyfeleink rendelkezésére "
          backgroundColor="card-black"
          textColor="text-white"
        />
      </article>
    </section>
    <section class="services">
      <article class="container">
        <div v-for="item in CardData" :key="item.id" class="card-wrapper">
        <div>
          <img :src="item.url" alt="building engineering" class="img-wrapper">
        </div>
          
          <FloatCardComponent
            :title="item.title"
            :list1="item.list1"
            :list2="item.list2"
            :list3="item.list3"
            :list4="item.list4"
            :bgColor="item.bgColor"
            class="absolute card-mobile-position lg:-left-[3.5rem] xl:-left-[3.5rem] 2xl:left-[3.5rem]"
          />
        </div>
      </article>
    </section>
  </main>
</template>