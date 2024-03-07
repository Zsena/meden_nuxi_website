<template>
  <header class="bg-white fixed w-full z-40 top-0">
    <nav class="container mx-auto flex justify-between items-center p-4">
      <NuxtLink to="/" class="text-2xl font-bold">
        <NuxtImg :src="logoSrc" alt="Logo" class="h-8" />
      </NuxtLink>
      <div class="hidden md:flex space-x-4">
        <NuxtLink to="/" :class="{'active-link': isActive('/')}" class="home"><Icon icon="iconoir:home" /></NuxtLink>
        <NuxtLink to="/cegunk" :class="{'active-link': isActive('/cegunk')}">Cégünk</NuxtLink>
        <NuxtLink to="/szolgaltatasok" :class="{'active-link': isActive('/szolgaltatasok')}">Szolgáltatásaink</NuxtLink>
        <NuxtLink to="/munkaink" :class="{'active-link': isActive('/munkaink')}">Munkáink</NuxtLink>
        <NuxtLink to="/arajanlat" :class="{'active-link': isActive('/arajanlat')}">Árajánlat</NuxtLink>
        <NuxtLink to="tel:+36708824217" class="h5 hidden lg:flex items-center w-fit">
          <span class="ml-2">+36 70 882 4217</span>
        </NuxtLink>
      </div>
      <button type="button" class="md:hidden p-4" @click="toggleMobileMenu">
        <span class="sr-only">Menü</span
        ><svg width="24" height="24" fill="none" aria-hidden="true">
          <path
            d="M12 6v.01M12 12v.01M12 18v.01M12 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      </button>
      <transition name="slide">
        <div
          v-if="isMobileMenuOpen"
          class="text-white fixed h-screen left-0 top-0 w-full max-w-sm mx-auto bg-blue-light p-4 z-30"
        >
          <div class="mt-5 flex flex-col items-start">
            <button class="self-end" @click="toggleMobileMenu">
              <!-- Close Icon -->
              <svg
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <NuxtLink to="/" class="text-2xl font-bold mb-5">
              <NuxtImg :src="logoSrc" alt="Logo" class="h-8 opacity-60" />
            </NuxtLink>
            <NuxtLink
              to="/" :class="{'active-link': isActive('/')}"
              class="block py-2 hover:text-gray-300"
              @click="toggleMobileMenu"
              ><Icon icon="iconoir:home" /></NuxtLink
            >
            <NuxtLink
              to="/cegunk" :class="{'active-link': isActive('/cegunk')}"
              class="block py-2 hover:text-gray-300"
              @click="toggleMobileMenu"
              >Cégünk</NuxtLink
            >
            <NuxtLink
              to="/szolgaltatasok" :class="{'active-link': isActive('/szolgaltatasok')}"
              class="block py-2 hover:text-gray-300"
              @click="toggleMobileMenu"
              >Szolgáltatások</NuxtLink
            >
            <NuxtLink
              to="/munkaink" :class="{'active-link': isActive('/munkaink')}"
              class="block py-2 hover:text-gray-300"
              @click="toggleMobileMenu"
              >Munkáink</NuxtLink
            >
            <NuxtLink
              to="/arajanlat" :class="{'active-link': isActive('/arajanlat')}"
              class="block py-2 hover:text-gray-300"
              @click="toggleMobileMenu"
              >Árajánlat</NuxtLink
            >
            <NuxtLink to="tel:+36708824217" class="h5 flex items-center w-fit">
              <span class="ml-2">+36 70 882 4217</span>
            </NuxtLink>
          </div>
        </div>
      </transition>
    </nav>
  </header>
</template>

<script setup>
import { Icon } from "@iconify/vue";
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const logoSrc = "/img/logo.png";
const isMobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const route = useRoute();

const isActive = (path) => {
  return route.path === path;
};
</script>

<style scoped>
/* Slide-in animation */
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.8s ease;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateX(-100%);
}
.slide-enter-to,
.slide-leave-from {
  transform: translateX(0);
}
</style>
