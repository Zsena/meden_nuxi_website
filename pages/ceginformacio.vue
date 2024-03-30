<script setup lang="ts">
import { Icon } from "@iconify/vue";

useHead(() => ({
  title: "Mé-den épületgépészet - Céginformáció",
  meta: [
    {
      hid: "description",
      name: "description",
      content: "Ismerje meg vállalkozásunkat! Szakembereink Víz, Gáz és Fűtés szereléssel foglalkoznak, valamint gépi és magasnyomású mosással, duguláselhárítással, valamint gépi, vegyszeres fűtésrendszer tisztítással is állnak rendelkezésére.",
    },
    {
      hid: "og:title",
      property: "og:title",
      content: "Mé-den épületgépészet - Céginformáció",
    },
    {
      hid: "og:description",
      property: "og:description",
      content: "Ismerje meg vállalkozásunkat! Szakembereink Víz, Gáz és Fűtés szereléssel foglalkoznak, valamint gépi és magasnyomású mosással, duguláselhárítással, valamint gépi, vegyszeres fűtésrendszer tisztítással is állnak rendelkezésére.",
    },
    {
      hid: "og:image",
      property: "og:image",
      content: "https://medenepuletgepesz.hu/img/headers/header6.webp",
    },
    { hid: "og:url", property: "og:url", content: "https://medenepuletgepesz.hu/ceginformacio" },
  ],
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "http://schema.org",
        "@type": "Service",
        name: "Mé-den épületgépészet - Céginformáció",
        description: "Ismerje meg vállalkozásunkat! Szakembereink Víz, Gáz és Fűtés szereléssel foglalkoznak, valamint gépi és magasnyomású mosással, duguláselhárítással, valamint gépi, vegyszeres fűtésrendszer tisztítással is állnak rendelkezésére.",
        image: "https://medenepuletgepesz.hu/img/headers/header6.webp",
      }),
    },
  ],
}));

</script>

<template>
  <main class="flex-auto my-28 base-site">
    <div class="sm:px-8 mt-16 lg:mt-32">
      <div class="mx-auto w-full max-w-7xl lg:px-8">
        <div class="relative px-4 sm:px-8 lg:px-12">
          <div class="mx-auto max-w-2xl lg:max-w-5xl">
            <div class="xl:relative">
              <div class="mx-auto max-w-2xl">
                <NuxtLink
                  to="/"
                  type="button"
                  aria-label="vissza a főoldalra"
                  class="back-button"
                >
                  <Icon icon="akar-icons:arrow-back" />
                </NuxtLink>
                <article>
                  <header class="flex flex-col">
                    <time
                      datetime="2022-09-05"
                      class="flex items-center text-base text-slate-400"
                    >
                      <span class="h-4 w-0.5 bg-slate-200"></span
                      ><span class="ml-3">marcius 30, 2024</span></time
                    >
                    <h1 class="h1">Cégünk</h1>
                  </header>
                  <div class="mt-8" data-mdx-content="true">
                    <p>
                      A Mé-den Épületgépészet Kft. elkötelezett az iránt, hogy
                      ügyfelei számára kiváló minőségű épületgépészeti
                      megoldásokat nyújtson.
                    </p>
                    <NuxtImg src="/img/headers/header3.webp" />
                    <h2 class="h2">Cégadatok:</h2>
                    <p>RÖVIDÍTETT NÉV: <br> <strong>MÉ-DEN Épületgépész Kft.</strong></p>
                    <p>TELJES NÉV: <br><strong>MÉ-DEN Épületgépész Korlátolt Felelősségű Társaság</strong></p>
                    <p>ALAPÍTÁS ÉVE: <br><strong>2021</strong></p>
                    <p>ADÓSZÁM: <br><strong>29204818-2-07</strong></p>
                    <p>FŐTEVÉKENYSÉG: </br><strong>4322 Víz-, gáz-, fűtés-, légkondicionáló-szerelés</strong></p>
                    <p>SZÉKHELY: <br><strong>8132 Lepsény, Dózsa György utca 17.</strong></p>
                    <p>Weboldal fejlesztő admin (Zsena): <br><strong>+36 20 503 2515</strong></p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>