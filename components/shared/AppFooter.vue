<template>
  <footer
    class="bg-gray-100 min-h-[400px] flex flex-col items-center justify-around"
  >
    <div class="container mx-auto px-4 py-4 text-lg lg:text-xl">
      <div
        class="grid grid-cols-1 md:grid-cols-2 gap-4 items-center justify-center"
      >
        <div class="mb-4 md:mb-0">
          <div class="mb-4">
            <p class="text-lg text-gray-700">
              Professzionális épületgépészeti megoldások 2021 óta.
            </p>
          </div>
          <NuxtLink to="/">
            <NuxtImg :src="logoSrc" alt="Logo" class="h-16" />
          </NuxtLink>
          <div class="flex space-x-4 mt-4">
            <!-- Social Icons -->
            <NuxtLink to="https://www.facebook.com/medenepuletgepeszkft" target="_blank" class="hover:opacity-75">
              <Icon icon="mdi:facebook" class="h-6 w-6" />
            </NuxtLink>
            <NuxtLink to="/" class="hover:opacity-75">
              <Icon icon="mdi:instagram" class="h-6 w-6" />
            </NuxtLink>
            <NuxtLink to="/" class="hover:opacity-75">
              <Icon icon="mdi:youtube" class="h-6 w-6" />
            </NuxtLink>
          </div>
        </div>
        <div class="w-full lg:w-auto grid grid-cols-2 gap-4 lg:place-items-end">
          <ul
            class="mb-4 mr-4 sm:mb-0 sm:mr-0 flex flex-col gap-y-4 lg:flex-row lg:items-center lg:gap-4"
          >
            <li>
              <NuxtLink to="/cegunk" :class="{'active-link': isActive('/cegunk')}">Cégünk</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/szolgaltatasok" class="break-words" :class="{'active-link': isActive('/szolgaltatasok')}">Szolgáltatásaink</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/munkaink" :class="{'active-link': isActive('/munkaink')}">Munkáink</NuxtLink>
            </li>
          </ul>
          <ul class="mb-4 md:mb-0 flex flex-col gap-y-4">
            <li>
              <NuxtLink to="/arajanlat" :class="{'active-link': isActive('/arajanlat')}">Árajánlat</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/ceginformacio" :class="{'active-link': isActive('/ceginformacio')}">Céginfó</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/garancia" :class="{'active-link': isActive('/garancia')}">Garancia</NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <SharedStickyFooter />
  </footer>
</template>

<script setup>
import { Icon } from "@iconify/vue";

import { useRoute } from 'vue-router';

const logoSrc = "/img/logo.png";

const route = useRoute();

const isActive = (path) => {
  return route.path === path;
};
</script>
