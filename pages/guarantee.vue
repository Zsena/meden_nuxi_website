<script setup lang="ts">
import { Icon } from "@iconify/vue";
useHead({
  title: `Meden Épületgépészet - Garancia`,
})
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
                      ><span class="ml-3">marcius 5, 2024</span></time
                    >
                    <h1 class="h1">Garancia</h1>
                  </header>
                  <div class="mt-8" data-mdx-content="true">
                    <p>
                      A Mé-den Épületgépészet Kft. elkötelezett az iránt, hogy
                      ügyfelei számára kiváló minőségű épületgépészeti
                      megoldásokat nyújtson. Tudjuk, hogy a megbízhatóság és a
                      minőség kulcsfontosságú a hosszú távú ügyfélelégedettség
                      szempontjából, ezért vállalatunk büszkén kínálja alábbi
                      garanciális feltételeit:
                    </p>
                    <NuxtImg src="/img/headers/header5.webp" />
                    <h2 class="h2">Garanciaidőszak:</h2>
                    <p>
                      A Mé-den Épületgépészet Kft. által végzett összes
                      épületgépészeti munkára és beszerelt berendezésre 24
                      hónapos teljeskörű garanciát vállalunk a munkák
                      befejezésének napjától számítva. Ez magában foglalja a
                      hibás anyagok cseréjét és a munkaerőköltséget is.
                    </p>
                    <h2 class="h2">Garanciális javítások:</h2>
                    <p>
                      Amennyiben a garanciaidőszak alatt bármilyen hiba vagy
                      rendellenesség merül fel a munkánk kapcsán, kérjük,
                      azonnal vegye fel velünk a
                      <NuxtLink to="contact">kapcsolatot</NuxtLink> . Vállaljuk,
                      hogy 72 órán belül kiszállunk, és orvosoljuk a problémát,
                      garantálva ezzel az Ön megelégedettségét.
                    </p>
                    <h2 class="h2">Kiterjesztett garancia:</h2>
                    <p>
                      Lehetőség van kiterjesztett garancia megvásárlására egyes
                      berendezésekre és szolgáltatásokra. Ezáltal még nagyobb
                      biztonságban érezheti magát, tudva, hogy hosszú távon is
                      számíthat ránk.
                    </p>
                    <h2 class="h2">Garanciális feltételek:</h2>
                    <p>
                      A garancia érvényessége a rendszeres karbantartás és a
                      gyártó által előírt használati utasítások betartásának
                      függvénye. A garancia nem terjed ki azokra a hibákra,
                      amelyek a termék helytelen használatából, szándékos
                      rongálásból vagy természeti katasztrófákból erednek.
                    </p>
                    <h2 class="h2">Kapcsolatfelvétel:</h2>
                    <p>
                      Amennyiben garanciális igényt szeretne érvényesíteni, vagy
                      ha további információra van szüksége, kérjük, lépjen
                      kapcsolatba ügyfélszolgálatunkkal az alábbi
                      elérhetőségeken:
                      <NuxtLink
                        to="tel:+36708824217"
                        class="h5 flex items-center w-fit"
                      >
                        <span class="ml-2">+36 70 882 4217</span>
                      </NuxtLink>
                      <NuxtLink
                        to="mailto:gepeszet118@gmail.com"
                        class="h5 flex items-center w-fit"
                      >
                        <span class="ml-2">gepeszet118@gmail.com</span>
                      </NuxtLink>
                      Munkatársaink készséggel állnak rendelkezésére minden
                      további kérdés vagy észrevétel esetén.
                    </p>
                    <p class="h2">Ami jellemez minket:</p>
                    <ol class="list-disc pl-5">
                      <li>Megbízhatóság</li>
                      <li>Ügyfélbarát munkatársak</li>
                      <li>Hatékonyság</li>
                      <li>Munka határidőre elvégzése</li>
                      <li>Türelem</li>
                    </ol>
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
