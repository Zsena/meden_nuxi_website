<template>
    <article :class="`large-card ${bgClass} ${textBaseColor}`">
      <h2 class="h2 uppercase mb-10 flex items-center">
        <span class="mr-2">{{ title }} </span>
        <Icon :icon="iconfyIcon" />  
      </h2>

      <p v-if="description" class="text-2xl">{{ description }}</p>
      <p v-if="description2" class="mt-6">{{ description2 }}</p>
      <NuxtImg class="w-full object-cover mt-5 max-h-52 base-card-rounded" :src="image" :alt="alt"/>
    </article>
  </template>
  
  <script setup>

  import {defineProps } from "vue";
  import { Icon } from '@iconify/vue';

  const props = defineProps({
    title: String,
    description: String,
    description2: String,   
    bgClass: String,
    textBaseColor: String,
    iconfyIcon: String,
    image: String,
    alt: String
  });
  
  </script>