<template>
  <footer class="bg-gray-100">
    <div class="container mx-auto px-6 py-4 text-lg lg:text-xl">
      <div
        class="grid grid-cols-1 md:grid-cols-2 gap-4 col-span-4 items-center justify-center"
      >
        <div class="mb-4 md:mb-0">
          <div class="mb-4">
            <p class="text-lg text-gray-700">
              Professzionális épületgépészeti megoldások 1999 óta.
            </p>
          </div>
          <NuxtImg :src="logoSrc" alt="Logo" class="h-16" />
          <div class="flex space-x-4 mt-4">
            <!-- Social Icons -->
            <NuxtLink to="#" class="hover:opacity-75">
              <Icon icon="mdi:instagram" class="h-6 w-6" />
            </NuxtLink>
            <NuxtLink to="#" class="hover:opacity-75">
              <Icon icon="mdi:facebook" class="h-6 w-6" />
            </NuxtLink>
            <NuxtLink to="#" class="hover:opacity-75">
              <Icon icon="mdi:youtube" class="h-6 w-6" />
            </NuxtLink>
            <NuxtLink to="#" class="hover:opacity-75">
              <Icon icon="mdi:vk" class="h-6 w-6" />
            </NuxtLink>
          </div>
        </div>
        <div class="w-full lg:w-auto grid grid-cols-2 lg:grid-cols-4 gap-4">
          <ul class="mb-4 lg:mb-0">
            <li>
              <NuxtLink to="/termekek" class="hover:underline"
                >Termékek</NuxtLink
              >
            </li>
            <li>
              <NuxtLink to="/szolgaltatasok" class="hover:underline"
                >Szolgáltatások</NuxtLink
              >
            </li>
            <li>
              <NuxtLink to="/projektek" class="hover:underline"
                >Projektek</NuxtLink
              >
            </li>
          </ul>
          <ul class="mb-4 md:mb-0">
            <li>
              <NuxtLink to="/rolunk" class="hover:underline">Rólunk</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/karrier" class="hover:underline">Karrier</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/blog" class="hover:underline">Blog</NuxtLink>
            </li>
          </ul>
          <ul class="mb-4 md:mb-0">
            <li>
              <NuxtLink to="/kapcsolat" class="hover:underline"
                >Kapcsolat</NuxtLink
              >
            </li>
            <li>
              <NuxtLink to="/tajekoztato" class="hover:underline"
                >Tájékoztató</NuxtLink
              >
            </li>
            <li>
              <NuxtLink to="/garancia" class="hover:underline"
                >Garancia</NuxtLink
              >
            </li>
          </ul>
          <ul class="mb-4 md:mb-0">
            <li>
              <NuxtLink to="/kapcsolat" class="hover:underline"
                >Kapcsolat</NuxtLink
              >
            </li>
            <li>
              <NuxtLink to="/tajekoztato" class="hover:underline"
                >Tájékoztató</NuxtLink
              >
            </li>
            <li>
              <NuxtLink to="/garancia" class="hover:underline"
                >Garancia</NuxtLink
              >
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

const logoSrc = "/img/logo.png";
</script>
