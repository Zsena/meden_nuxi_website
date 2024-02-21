<template>
  <swiper
    :autoplay="{
      delay: 5000,
      disableOnInteraction: false,
    }"
    :pagination="{
      clickable: true,
    }"
    :navigation="false"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide class="md:h-[80vh]">
      <div class="relative max-h-[1500px] lg:max-h-[800px] w-full h-full">
        <NuxtImg
          class="w-full h-screen md:h-[80vh] object-cover"
          src="/img/headers/header.webp"
        />
        <div class="bg-overlay"></div>
        <section
          class="container mx-auto grid lg:grid-cols-2 p-4 gap-4 right-0 top-20 left-0 absolute bottom-0 z-10 text-white place-content-center justify-center"
        >
          <article class="text-center lg:text-left mb-5 lg:mb-0">
            <h1 class="h1 mb-5">Szolgátatásaink</h1>
            <p class="text-lg">
              Országos lefedettséggel kínálunk magas színvonalú villanyszerelési
              szolgáltatásokat, amit a gyors technikának köszönhetünk.
              Épületgépész technikusaink biztosítják egy adott épület kényelmes
              használatához a megfelelő technológiát és ellátják az épületet
              különböző gépészeti szereléssel, felújítással és karbantartással.
            </p>
            <p class="text-lg mt-5">
              Cégünk széles spektrumú szolgáltatásokkal áll rendelkezésre, hogy
              eleget tegyen az épületek kényelmi és energetikai
              követelményeinek. Lakossági és ipari területeken egyaránt
              vállalunk villanyszerelést, valamint épületgépészeti, klíma- és
              hőszivattyú-szerelési munkálatokat, mindezt versenyképes árakon,
              garanciális feltételekkel és szakértői kivitelezésben.
            </p>
          </article>
          <article class="flex flex-col justify-center items-center gap-4">
            <NuxtLink class="btn grad-btn p-5 text-xl lg:text-3xl" to="/contact"
              >Kérjen ingyenes árajánlatot most!</NuxtLink
            >
            <NuxtLink class="btn grad-btn lg:text-lg" to="tel:+36708824217"
              >+36 70 882 4217</NuxtLink
            >
          </article>
        </section>
      </div>
    </swiper-slide>
    <swiper-slide class="md:h-[80vh]">
      <div class="relative max-h-[1500px] lg:max-h-[800px] w-full h-full">
        <NuxtImg
          class="w-full h-screen md:h-[80vh] object-cover"
          src="/img/headers/header2.webp"
        />
        <div class="bg-overlay bg-overlay-darker"></div>
        <section
          class="container mx-auto grid lg:grid-cols-2 p-4 gap-4 right-0 top-20 left-0 absolute bottom-0 z-10 text-white place-content-center justify-center"
        >
          <article class="text-center lg:text-left mb-5 lg:mb-0">
            <h1 class="h1 mb-5">Cégünk</h1>
            <p class="text-lg">
              A vállalatunk, amely Lepsényben jött létre, széleskörű
              szolgáltatásokat nyújt az elektromos szerelés, hőszivattyús
              rendszerek telepítése, légkondicionáló berendezések beüzemelése,
              különféle épületgépészeti feladatok és gyengeáramú hálózatok
              terén. Missziónk, hogy ügyfeleink számára magas színvonalú
              szolgáltatást biztosítsunk és tartós ügyfélkapcsolatokat
              alakítsunk ki.
            </p>
          </article>
          <article class="flex flex-col justify-center items-center gap-4">
            <NuxtLink class="btn grad-btn p-5 text-xl lg:text-3xl" to="/contact"
              >Kérjen ingyenes árajánlatot most!</NuxtLink
            >
            <NuxtLink class="btn grad-btn lg:text-lg" to="tel:+36708824217"
              >+36 70 882 4217</NuxtLink
            >
          </article>
        </section>
      </div>
    </swiper-slide>
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation, Autoplay, Pagination } from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Autoplay, Pagination, Navigation],
    };
  },
};
</script>
