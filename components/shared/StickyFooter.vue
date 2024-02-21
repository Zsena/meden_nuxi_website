<template>
    <div class="flex justify-center items-center text-center">
      <div
        class="font-general-regular text-lg text-ternary-dark dark:text-ternary-light"
      >
        &copy; {{ currentYear }}.
        <NuxtLink
          to="/"
          class="font-general-medium hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 duration-500"
          >{{ projectName }}</NuxtLink
        >
        . Fejlesztette
        <NuxtLink
          to="https://geekrabbits.hu/" target="_blank"
          class="font-general-medium text-secondary-dark dark:text-secondary-light uppercase hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 duration-500"
          >{{ author }}</NuxtLink
        >
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
  