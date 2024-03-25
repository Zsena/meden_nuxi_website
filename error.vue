<script setup lang="ts">
import type { NuxtError } from "#app";

const props = defineProps({
  error: Object as () => NuxtError,
});

const handleError = () => clearError({ redirect: "/" });
</script>

<template>
  <main
    class="container mt-32 mx-auto text-center font-sans antialiased bg-white
     grid min-h-[20rem] place-content-center"
  >
    <div class="relative z-20 px-5">
      <NuxtImg
        src="/img/404.png"
        alt="404! Hoppá, ezt az oldalt most nem találtuk meg Önnek!"
        class="w-full"
      />
      <template v-if="props.error?.statusCode === 404">
        <h1 class="text-9xl font-medium my-8">404!</h1>
        <p class="font-bold text-xl mb-5">
          Hoppá, ezt az oldalt most nem találtuk meg Önnek! ☹
        </p>
        <p class="font-medium text-lg">
          Az Ön által keresett lap ideiglenesen nem elérhető, a neve
          megváltozott, vagy eltávolították.
        </p>
      </template>
      <template v-else>
        <h1 class="text-9xl font-medium my-8">Hoppá! Valami elromlott.</h1>
        <p class="font-bold text-xl mb-5">
          Sajnáljuk, de úgy tűnik, hogy belső hiba történt a szerverünkön, és
          nem tudjuk megjeleníteni a kért oldalt. Kérjük, próbálkozzon újra később
          vagy írjon nekünk a zsanett.tamas87@gmail.com-ra.
        </p>
        <p class="font-medium text-lg">
          Köszönjük a türelmét és megértését.
        </p>
      </template>
      <p>
        <button type="button" @click="handleError" class="btn primary-btn my-4">
          Vissza a főoldalra
        </button>
      </p>
    </div>
    <div class="fixed left-0 right-0 spotlight z-10"></div>
  </main>
</template>
