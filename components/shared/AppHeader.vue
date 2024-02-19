<template>
  <header class="bg-gray-800 text-white fixed w-full z-20 top-0">
    <nav class="container mx-auto flex justify-between items-center p-4">
      <NuxtLink to="/" class="text-2xl font-bold">
        <NuxtImg :src="logoSrc" alt="Logo" class="h-8" />
      </NuxtLink>
      <div class="hidden md:flex space-x-4">
        <NuxtLink to="/" class="hover:text-gray-300">Home</NuxtLink>
        <NuxtLink to="/about" class="hover:text-gray-300">About</NuxtLink>
        <NuxtLink to="/services" class="hover:text-gray-300">Services</NuxtLink>
        <NuxtLink to="/contact" class="hover:text-gray-300">Contact</NuxtLink>
      </div>
      <button class="md:hidden" @click="toggleMobileMenu">Menu</button>
      <transition name="slide">
        <div v-if="isMobileMenuOpen" class="fixed bottom-0 left-0 w-full max-w-sm mx-auto bg-gray-800 p-4 flex flex-col items-start z-30" style="height: 100vh;">
          <button class="self-end" @click="toggleMobileMenu">
            <!-- Close Icon -->
            <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <NuxtLink to="/" class="block py-2 hover:text-gray-300" @click="toggleMobileMenu">Home</NuxtLink>
          <NuxtLink to="/about" class="block py-2 hover:text-gray-300" @click="toggleMobileMenu">About</NuxtLink>
          <NuxtLink to="/services" class="block py-2 hover:text-gray-300" @click="toggleMobileMenu">Services</NuxtLink>
          <NuxtLink to="/contact" class="block py-2 hover:text-gray-300" @click="toggleMobileMenu">Contact</NuxtLink>
        </div>
      </transition>
    </nav>
  </header>
</template>
<script>
import { ref } from 'vue';

export default {
  setup() {
    const logoSrc = '/img/logo.png';
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
.slide-enter-active, .slide-leave-active {
  transition: transform 0.8s ease;
}
.slide-enter-from, .slide-leave-to {
  transform: translateX(-100%);
}
.slide-enter-to, .slide-leave-from {
  transform: translateX(0);
}
</style>
