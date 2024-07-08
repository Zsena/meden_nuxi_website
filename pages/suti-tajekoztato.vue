<script setup>
import { Icon } from "@iconify/vue";
import { useRoute } from 'vue-router';
const route = useRoute();

useHead(() => ({
    title: "Mé-den épületgépészet - Adatkezelési és süti tájékoztató",
    meta: [
        {
            hid: "description",
            name: "description",
            content: "Ismerje meg vállalkozásunkat! Szakembereink Víz, Gáz és Fűtés szereléssel foglalkoznak, valamint gépi és magasnyomású mosással, duguláselhárítással, valamint gépi, vegyszeres fűtésrendszer tisztítással is állnak rendelkezésére.",
        },
        {
            hid: "og:title",
            property: "og:title",
            content: "Mé-den épületgépészet - Adatkezelési és süti tájékoztató",
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
        { hid: "og:url", property: "og:url", content: "https://medenepuletgepesz.hu/suti-tajekoztato" },
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
                name: "Mé-den épületgépészet - Adatkezelési és süti tájékoztató",
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
                                <NuxtLink to="/" type="button" aria-label="vissza a főoldalra" class="back-button">
                                    <Icon icon="akar-icons:arrow-back" />
                                </NuxtLink>
                                <article>
                                    <header class="flex flex-col">
                                        <time datetime="2022-09-05" class="flex items-center text-base text-slate-400">
                                            <span class="h-4 w-0.5 bg-slate-200"></span><span class="ml-3">március 30,
                                                2024</span></time>
                                        <h1 class="h1">Adatkezelési és Süti tájékoztató</h1>
                                    </header>
                                    <div class="container mx-auto px-4 py-8">

                                        <h2 class="text-xl font-semibold mb-2">1. Általános információk</h2>
                                        <p>A <NuxtLink to="ceginformacio" class="text-blue-500 font-bold">Mé-den
                                                Épületgépész Kft.</NuxtLink> jelen adatkezelési
                                            tájékoztatóban meghatározott módon és célból kezeli az Ön adatait.
                                        </p>

                                        <h2 class="text-xl font-semibold mb-2">2. Cookie-k használata</h2>
                                        <p>Az oldalunk cookie-kat (sütiket) használ, hogy javítsa a felhasználói élményt
                                            és biztosítsa a weboldal megfelelő működését. A cookie-k használatáról
                                            részletes információkat a cookie kezelési
                                            irányelveinkben talál.</p>

                                        <h2 class="text-3xl font-bold mb-4">Cookie kezelési irányelvek</h2>

                                        <div class="mb-4">
                                            <p class="leading-relaxed">Az oldalunk cookie-kat (sütiket) használ, hogy
                                                javítsa a felhasználói élményt és biztosítsa a weboldal megfelelő
                                                működését. A cookie-k olyan kis szövegfájlok, amelyeket az Ön böngészője
                                                tárol a számítógépen vagy mobil eszközén. Ezeket fájlokat arra
                                                használjuk, hogy megjegyezzük az Ön preferenciáit és javítsuk a weboldal
                                                teljesítményét.</p>
                                        </div>

                                        <div class="mb-4">
                                            <h2 class="text-2xl font-semibold mb-2">Főbb tudnivalók:</h2>
                                            <ul class="list-none">
                                                <li class="text-xl font-semibold mb-2">Mik azok a cookie-k?</li>
                                                <li>Cookie-kat használunk annak érdekében, hogy a weboldalunk
                                                    megfelelően működjön, és jobb felhasználói élményt nyújtson.</li>
                                                <li class="text-xl font-semibold mb-2">Hogyan használjuk a cookie-kat?
                                                </li>
                                                <li>A cookie-kat arra használjuk, hogy információkat gyűjtsünk és
                                                    elemizzünk a felhasználói viselkedésről, valamint hogy személyre
                                                    szabott hirdetéseket jelenítsünk meg az Ön számára.</li>
                                                <li class="text-xl font-semibold mb-2">Hogyan tudja kezelni a
                                                    cookie-kat?</li>
                                                <li>Böngészője beállításaiban módosíthatja vagy letilthatja a cookie-k
                                                    használatát. Azonban ezt követően előfordulhat, hogy nem tud teljes
                                                    körűen használni weboldalunkat.</li>
                                                <li class="text-xl font-semibold mb-2">Harmadik fél cookie-k</li>
                                                <li>Néhány esetben harmadik féltől származó cookie-kat is használhatunk,
                                                    például szolgáltatások javítása vagy statisztikák gyűjtése céljából.
                                                </li>
                                            </ul>
                                        </div>
                                        <h2 class="text-xl font-semibold mb-2">3. Google Tag Manager és Google Analytics
                                            (gtag_report)</h2>
                                        <p>Az oldalunk Google Tag Manager-t használ az adatok gyűjtésére és elemzésére,
                                            valamint Google Analytics (gtag_report) szolgáltatást a felhasználói
                                            magatartás elemzésére és a weboldal teljesítményének mérésére. A Google Tag
                                            Manager és Google Analytics által gyűjtött adatokra vonatkozó részletes
                                            információkat a szabályzatunkban
                                            talál.</p>

                                        <h2 class="text-3xl font-bold mb-4">Adatvédelmi irányelvek</h2>
                                        <div class="mb-4">
                                            <h2 class="text-xl font-semibold mb-2">Személyes adatok gyűjtése és
                                                kezelése:</h2>
                                            <p class="leading-relaxed">Nem gyűjtünk és kezelünk személyes
                                                adatokat az oldalon. Kizárólag analitikai adatokat kezelünk.</p>
                                        </div>
                                        <div class="mb-4">
                                            <h2 class="text-xl font-semibold mb-2">Adatmegosztás:</h2>
                                            <p class="leading-relaxed">Az Ön adatait nem adjuk át harmadik
                                                felek számára kereskedelmi vagy egyéb célból.</p>
                                        </div>

                                        <div>
                                            <h2 class="text-xl font-semibold mb-2">Felhasználói jogok:</h2>
                                            <p class="leading-relaxed">Jogában áll kérni adataihoz való
                                                hozzáférést, törlését vagy az adatkezelés
                                                korlátozását.</p>
                                        </div>

                                        <div>
                                            <h2 class="text-xl font-semibold mb-2">Kapcsolatfelvétel:</h2>
                                            <p class="leading-relaxed">Ha bármilyen kérdése van az adatvédelemmel
                                                kapcsolatban, kérjük, vegye fel velünk a kapcsolatot az alábbi
                                                elérhetőségeken: <a href="mailto:gepeszet118@gmail.com"
                                                    class="text-blue-500">gepeszet118@gmail.com</a>.</p>
                                        </div>
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