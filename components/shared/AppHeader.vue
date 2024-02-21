<template>
  <header class="bg-white fixed w-full z-40 top-0">
    <nav class="container mx-auto flex justify-between items-center p-4">
      <NuxtLink to="/" class="text-2xl font-bold">
        <NuxtImg :src="logoSrc" alt="Logo" class="h-8" />
      </NuxtLink>
      <div class="hidden md:flex space-x-4">
        <NuxtLink to="/">Főoldal</NuxtLink>
        <NuxtLink to="/about">Rólunk</NuxtLink>
        <NuxtLink to="/services">Szolgáltatásaink</NuxtLink>
        <NuxtLink to="/contact">Kapcsolat</NuxtLink>
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
          class="text-white fixed bottom-0 left-0 w-full max-w-sm mx-auto bg-blue-dark p-4 flex flex-col items-start z-30"
          style="height: 100vh"
        >
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
            to="/"
            class="block py-2 hover:text-gray-300"
            @click="toggleMobileMenu"
            >Főoldal</NuxtLink
          >
          <NuxtLink
            to="/about"
            class="block py-2 hover:text-gray-300"
            @click="toggleMobileMenu"
            >Rólunk</NuxtLink
          >
          <NuxtLink
            to="/services"
            class="block py-2 hover:text-gray-300"
            @click="toggleMobileMenu"
            >Szolgáltatások</NuxtLink
          >
          <NuxtLink
            to="/contact"
            class="block py-2 hover:text-gray-300"
            @click="toggleMobileMenu"
            >Kapcsolat</NuxtLink
          >
        </div>
      </transition>
    </nav>
  </header>
</template>
<script>
import { ref } from "vue";

export default {
  setup() {
    const logoSrc = "/img/logo.png";
    const isMobileMenuOpen = ref(false);

    const toggleMobileMenu = () => {
      isMobileMenuOpen.value = !isMobileMenuOpen.value;
    };

    return {
      logoSrc,
      isMobileMenuOpen,
      toggleMobileMenu,
    };
  },
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
