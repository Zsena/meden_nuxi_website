<template>
  <article
    class="w-full flex flex-col lg:flex-row justify-center items-center gap-4 my-8"
    data-aos="fade-up"
    data-aos-duration="700"
    data-aos-offset="100"
    data-aos-delay="50"
  >
    <h4 class="h4">Keressen minket bizalommal</h4>
    <NuxtLink
      to="tel:+36708824217" @click="(event) => reportConversion(event, '+36708824217')"
      class="h5 flex items-center w-fit"
      data-aos="fade-up"
      data-aos-duration="700"
    >
      <Icon icon="tabler:device-mobile-heart" class="w-10 h-10" />
      <span class="ml-2">+36 70 882 4217</span>
    </NuxtLink>
  </article>
</template>
<script setup>
import { Icon } from "@iconify/vue";
import { useReportConversion } from '~/composables/useReportConversion';
const { reportConversion } = useReportConversion();
</script>
