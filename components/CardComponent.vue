<template>
  <div :class="`${bgClass}`" class="card p-5 mt-4 mx-2 w-[90%] md:max-w-fit">
    <h3 :class="`${textColor}`" class="text-center mt-4 lg:mt-16 uppercase font-semibold">
      {{ title }}
    </h3>
    <p :class="`${textColor}`" class="text-md lg:text-sm xl:text-md text-center mt-6 mb-4 lg:mb-32 uppercase">{{
      description }}</p>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
/* import { Icon } from '@iconify/vue'; */
const props = defineProps({
  title: String,
  description: String,
  bgClass: String,
  textColor: String,
  url: String,
});
</script>

