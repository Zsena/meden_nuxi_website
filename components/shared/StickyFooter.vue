<template>
  <div class="flex flex-col justify-center items-center text-center">
    <div class="text-xs">
      &copy; 2021-{{ currentYear }}. MINDEN JOG FENNTARTVA.
      <NuxtLink to="/" class="hover:text-indigo-600 duration-500">{{
        projectName
      }}</NuxtLink>
      . Design & fejlesztés:
      <NuxtLink
        to="https://geekrabbits.hu/"
        target="_blank"
        class="uppercase hover:text-indigo-600 duration-500"
        >{{ author }}</NuxtLink
      >
    </div>
    <div class="mt-4 flex flex-col sm:flex-row items-center justify-center gap-2">
      <p class="text-sm">Weboldal tárhelye:</p>
      <NuxtLink to="https://elin.hu/" target="_blank">
        <NuxtImg class="w-12 h-12" src="/img/elin.hu_logo.webp"
      /></NuxtLink>
    </div>
    <div class="mt-4">
      <p class="text-sm">OLDALUNKON NINCS ADATKEZELÉS SEM COOKIE HASZNÁLAT</p>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";

export default {
  setup() {
    const projectName = ref("MÉDEN ÉPÜLETGÉPÉSZET");
    const author = ref("Geekrabbits.hu");
    const currentYear = computed(() => new Date().getFullYear());

    return {
      projectName,
      author,
      currentYear,
    };
  },
};
</script>
